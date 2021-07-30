import React from 'react'
import {Banner} from "../components/Banner";
import {Features} from "../components/Features";
import {TopResearchers} from "../components/TopResearchers";
import {Partners} from "../components/Partners";


export const  HomePage = () => {
	return (
		<div>
			<Banner />
			<Features />
			<TopResearchers avatar={'1.jpg'}/>
			<TopResearchers avatar={'2.jpg'}/>
			<TopResearchers avatar={'3.jpg'}/>
			<TopResearchers avatar={'4.jpg'}/>
			<TopResearchers avatar={'5.jpg'}/>
			<TopResearchers avatar={'6.jpg'}/>
			<TopResearchers avatar={'7.jpg'}/>
			<TopResearchers avatar={'8.jpg'}/>
			<TopResearchers avatar={'9.jpg'}/>
			<TopResearchers avatar={'10.jpg'}/>
			<Partners/>
		</div>
	)
}