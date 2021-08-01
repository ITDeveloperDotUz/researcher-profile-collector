const axios = require("axios");
const config = require('config')
const Researcher = require('../models/Researcher')
const swUrl = config.get('swUrl')

module.exports = {
	async search(req, res){
		try {
			let data

			const searchParams = req.params.searchParams.split(':')

			if (searchParams[2] && searchParams[2] === 'true'){
				const response = await axios.get(swUrl + '/search/' + req.params.searchParams, {
					headers: {
						accept: 'application/json',
						authorization: 'Bearer ' + config.get('sciencewebToken')
					}
				})
				const responseData = response.data.filter(researcher => !!researcher.profile.filled)

				// we need to normalize the data received from scienceweb
				const promises = responseData.map(async (researcher) => {
					const formattedData = formatData(researcher)

					try {
						await Researcher.updateOne({id: formattedData.id}, formattedData, { upsert: true })
					} catch (e){
						console.log(e.message)
					}
					return formattedData
				})
				data = await Promise.all(promises)

			} else {
				if (searchParams[0] === 'name') {
					data = await Researcher.find({
						"$expr": {
							$or: [
								{
									"$regexMatch": {
										"input": {
											"$concat": [
												"$first_name", " ", "$last_name"
											]
										},
										"regex": searchParams[1],
										"options": "i"
									}
								},
								{
									"$regexMatch": {
										"input": {
											"$concat": [
												"$last_name", " ", "$first_name"
											]
										},
										"regex": searchParams[1],
										"options": "i"
									}
								}
							]
						}
					})
				} else {
					data = await Researcher.find({[searchParams[0]]:searchParams[1]})
				}
			}
			// if data is not empty return it to user
			if(data.length > 0){
				res.json({message: `Found ${data.length} result(s)!`, data})
			} else res.status(201).json({message: 'Nothing found with this search term!'})

		} catch (e) {
			console.log(e)
			res.status(500).json({message: 'Something went wrong. Please try again later'})
		}
	},
	async getProfile(req, res){
		try {

			const researcher = await Researcher.findOne({id: req.params.id})
			if (researcher){
				res.json({message:'Found requested profile.', data: researcher})
			} else {
				res.status(404).json({message: 'No researcher found with this id.'})
			}
		} catch (e) {
			console.log(e)
			res.status(500).json({message: 'Something went wrong. Please try again later'})
		}
	}
}

function formatData(researcher){
	const keywords = researcher.profile.keywords ? researcher.profile.keywords.split(',') : null

	return {
		country_code: researcher.country_code,
		email:researcher.email,
		first_name: researcher.first_name,
		last_name: researcher.last_name,
		id: researcher.id,
		avatar: `https://scienceweb.uz/${researcher.profile.avatar || 'images/icons/no_gender.png'}`,
		bio: researcher.profile.bio,
		keywords: keywords,
		orcid: researcher.orcid,
		public_name: researcher.profile.public_name,
		organization: (researcher.profile.work_job && researcher.profile.work_org) ? `${researcher.profile.work_job} at ${researcher.profile.work_org}` : (researcher.profile.work_org || researcher.profile.work_job),
		social_links: JSON.parse(researcher.profile.social_links),
		googleScholarProfile: researcher.scholar_profile ? makeGSProfile(researcher.scholar_profile) : null,
		publonsProfile: researcher.publons_profile ? makePublonsProfile(researcher.publons_profile) : null,
		scopuesProfile: researcher.scopus_profile ? makeScopusProfile(researcher.scopus_profile) : null
	}
}

// Reformat Google Scholar Profile Data
function makeGSProfile(data){
	const citations = JSON.parse(data.by_year)
	return {
		avatar: data.avatar,
		chartData: {
			years: Object.keys(citations),
			citations: Object.values(citations)
		},
		userId: data.gs_user_id,
		citations: data.citations,
		citations5year: data.citations_five_year,
		hIndex: data.h_index,
		hIndex5year: data.citations_five_year,
		i10Index: data.i10_index,
		i10Index5year: data.i10_index_five_year,
		name: data.name,
		organization: data.organization,
		keywords: JSON.parse(data.interests).map(interest => interest[1])
	}
}

// Reformat Publons profile data
function makePublonsProfile(data) {
	const organizations = data.institutions ? JSON.parse(data.institutions) : ['']
	const chartData = data.publication_stats ? JSON.parse(data.publication_stats) : {}
	const keywords = data.researchFields ? JSON.parse(data.researchFields) : []

	let organization = ''
	// Recently data structure was changed by publons api so we should consider this change
	// if "name" exists then this data is old version
	let institution = organizations[0]
	if (institution && !institution.name) {
		// Assign if both organization and role exist. Otherwise check for institution first and
		// if it does not exist check for role if both does not exist '' will be assigned
		organization = (institution.role && institution.institution)
			? `${institution.role} at ${institution.institution}`
			: institution.institution || institution.role
	} else organization = institution.name

	return {
		avatar: data.avatar,
		name: data.publons_user_name,
		chartData: chartData.labels ? {
			years: chartData.labels,
			publications: chartData.series[0].data ,
			citations: chartData.series[1].data
		} : null,
		citations: data.citations,
		hIndex: data.h_index,
		publications: data.publications_count,
		keywords: keywords.map(keyword => keyword.name),
		userId: data.publons_user_id,
		organization
	}
}

// Reformat Scopus profile data
function makeScopusProfile(data) {
	const chart = JSON.parse(data.chart)
	const keywords = JSON.parse(data.subject_areas)
	const chartData = {
		years: [],
		citations: [],
		publications: []
	}

	// i equals years here from start to present
	for (let i = chart.xAxisLow; i <= chart.xAxisHigh; i++) {
		chartData.years.push(i)

		if (chart.docObj){
			// search for year which equals i structure is like [ { Tooltip: '2021 ,1,document', x: 2021, y: 1 } ]
			// Here x equals year and y equals documents published which we are looking for. if no result return set 0
			let findDocYear = (chart.docObj.find(byYear => byYear.x === i ))
			chartData.publications.push(findDocYear ? findDocYear.y : 0)
		}
		if(chart.citeObj){
			// Similar structure with docObj and similar searching for citation by year which equals i
			let findCiteYear = (chart.citeObj.find(byYear => byYear.x === i ))
			chartData.citations.push(findCiteYear ? findCiteYear.y : 0)
		}
	}

	return {
		name: data.full_name,
		citations: data.citations_count,
		citedBy: data.cited_by_count,
		coAuthors: data.co_authors,
		publications: data.documents_count,
		email: data.email,
		hIndex: data.h_index,
		organization: data.institution,
		orcid: data.orcid,
		keywords: keywords.map(keyword => keyword.name),
		chartData
	}
}