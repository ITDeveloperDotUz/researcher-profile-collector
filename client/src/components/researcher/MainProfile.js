import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaTwitter} from "react-icons/fa";
import React from "react";


export const MainProfile = ({profile}) => {

	const orcid = profile.orcid ? <span className="block text-base font-bold my-2 px-2 py-1 bg-green-300 rounded-2xl mx-2 text-sm dark:bg-green-700">ORCID: {profile.orcid}</span> : null
	const keywords = profile.keywords ? profile.keywords.map((keyword, index) => <span key={index} className="px-2 py-1 my-1 bg-blue-300 rounded-2xl mx-2 text-sm dark:bg-blue-700">{keyword}</span>) : null
	return (
		<div className="animated bg-white dark:bg-gray-800 w-full h mt-28 rounded-t-3xl">
			<div className="items-center w-full relative">
				<div className="w-full -mt-16 absolute flex justify-center">
					<div
						className="mx-uto inline-block p-1 rounded-full bg-gradient-to-bl from-yellow-300 via-red-400 to-indigo-600">
						<img className="w-28 h-28 rounded-full "
							 src={profile.avatar} alt="" />
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
				<a href="https://www.facebook.com/aaliboyev" target="_blank" rel="noreferrer" className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Facebook">
					<FaFacebook/>
				</a>
				<a href="https://github.com/ITDeveloperDotUz" target="_blank" rel="noreferrer" className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
					<FaGithub />
				</a>
				<a href="https://t.me/aaliboyev" target="_blank" rel="noreferrer" className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
					<FaTelegram />
				</a>
				<a href="https://www.linkedin.com/in/abror-aliboyev-9a6ab7123/" rel="noreferrer" target="_blank" className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
					<FaLinkedin />
				</a>
				<a href="https://twitter.com/AbrorAliboyev" target="_blank" rel="noreferrer" className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
					<FaTwitter />
				</a>
				<a href="https://instagram.com/aaliboyev" target="_blank" rel="noreferrer" className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
					<FaInstagram />
				</a>
			</div>
		</div>
	)
}