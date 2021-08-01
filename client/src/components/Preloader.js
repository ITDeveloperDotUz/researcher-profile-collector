import React from 'react'
import preloader from '../assets/images/preloader.svg'
export const Preloader = () => {
	return (
		<div className="w-full flex justify-center">
			<img src={preloader} alt="Loading..." />
		</div>
	)
}