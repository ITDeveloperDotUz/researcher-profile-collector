import React from 'react'
import gsLogo from '../assets/images/brands/google-scholar.png'
import publonsLogo from '../assets/images/brands/publons.png'
import orcidLogo from '../assets/images/brands/orcid.png'
import clarivateLogo from '../assets/images/brands/clarivate.jpg'
import scopusLogo from '../assets/images/brands/scopus.jpg'



export const Partners = () => {

	return (

		<section className="mx-auto">
			<div className="container px-5 mx-auto lg:py-20">
				<div className="flex flex-col w-full mb-12 text-center">
					<h2 className="dark:text-white mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font"> The
						world's best teams use Wickedtemplates to state theire presence.
					</h2>
				</div>
				<div className="grid grid-cols-3 gap-4 text-center lg:grid-cols-5">
					<div className="flex items-center justify-center ">
						<img
							src={publonsLogo}
							alt="Todoist Logo" className="block object-contain h-20" />
					</div>
					<div className="flex items-center justify-center ">
						<img
							src={scopusLogo}
							alt="Slack Logo" className="block object-contain h-20" />
					</div>
					<div className="flex items-center justify-center ">
						<img
							src={orcidLogo}
							alt="Typeform Logo" className="block object-contain h-20" />
					</div>
					<div className="flex items-center justify-center ">
						<img
							src={clarivateLogo}
							alt="Algolia Logo" className="block object-contain h-20" />
					</div>
					<div className="flex items-center justify-center ">
						<img
							src={gsLogo}
							alt="Postcss Logo" className="block object-contain h-20" />
					</div>
				</div>
			</div>
		</section>
	)
}