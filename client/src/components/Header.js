import React from "react";
import {NavLink} from 'react-router-dom'
import useDarkMode from "../hooks/useDarkMode";
import {FaSun, FaMoon} from 'react-icons/fa'


export const Header = () => {
	// const history = useHistory()
	const [colorTheme, setTheme] = useDarkMode()
	return (
		<div className="w-full items-center border-b bg-white dark:bg-gray-800 animated">
			<div
				className="container mx-auto transform ">
				<div className="flex flex-col flex-wrap p-3 mx-auto md:items-center md:flex-row">
					<nav className="flex flex-wrap items-center justify-start text-base ">
						<ul className="items-center inline-block list-none lg:inline-flex dark:text-white">

							<li>
								<NavLink to="/researcher"
								   className="px-4 py-1 mr-1 text-base animated transform rounded-md focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-gray-200 dark:hover:bg-gray-700">Researchers</NavLink>
							</li>
						</ul>
					</nav>
					<NavLink to="/" className="justify-center focus:outline-none md:ml-auto md:mr-auto">
						<div className="inline-flex items-center">
							<div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
							</div>
							<h2 className="block p-2 text-xl font-medium tracking-tighter text-black dark:text-white animated transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> Researchers </h2>
						</div>
					</NavLink>
					<div >
						<button onClick={() => setTheme(colorTheme)}
								className="px-3 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md lg:ml-auto focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700 ">
							{colorTheme === 'light' ? <FaSun /> : <FaMoon />}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}