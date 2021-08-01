import React from "react";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaTwitter} from "react-icons/fa";

export const Footer = () => {
	return (
		<footer className="">
			<div className="container px-6 py-8 mx-auto">
				<hr className="my-10 dark:border-gray-500" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<p className="text-sm text-gray-400">© Copyright 2021. Created by Abror Aliboyev</p>
					<div className="flex mt-3 -mx-2 sm:mt-0">
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
			</div>
		</footer>
	)
}



