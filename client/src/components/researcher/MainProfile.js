import React from "react";


export const MainProfile = ({profile}) => {
	const links = profile.social_links

	const orcid = profile.orcid ? <span className="block text-base font-bold my-2 px-2 py-1 text-white rounded-2xl mx-2 text-sm bg-green-700">ORCID: {profile.orcid}</span> : null
	const keywords = profile.keywords ? profile.keywords.map((keyword, index) => <span key={index} className="px-2 py-1 my-1 text-white rounded-2xl mx-2 text-sm bg-blue-700">{keyword}</span>) : null
	const socialLinks = links ? Object.keys(links).map(
		(key) => {
			if (!links[key]) return false
			return (
				<a key={key} href={links[key]} target="_blank" rel="noreferrer" aria-label={key} >
					<img width={32} className="m-2" src={require(`../../assets/images/icons/${key}.png`).default} alt=""/>
				</a>
			)
		}
		) : null

	return (
		<div className="animated bg-white dark:bg-gray-800 w-full h mt-28 rounded-t-3xl rounded-b-lg">
			<div className="items-center w-full relative">
				<div className="w-full -mt-16 absolute flex justify-center">
					<div
						className="mx-uto inline-block p-1 rounded-full bg-gradient-to-bl from-yellow-300 via-red-400 to-indigo-600">
						<img className="w-28 h-28 rounded-full "
							 src={profile.avatar} alt=""  />
					</div>
				</div>
			</div>

			<div className="animated text-center pt-16 px-5 pb-5">
				<h2 className="animated text-black dark:text-white text-xl font-bold">{profile.first_name} {profile.last_name}</h2>
				<p className="animated text-black dark:text-white">{profile.organization}</p>
				<p className="animated italic mt-5 text-black dark:text-white">
					{orcid}
					{keywords}
				</p>
			</div>
			<div className="flex p-5 justify-center text-xl">
				{socialLinks}
			</div>
		</div>
	)
}