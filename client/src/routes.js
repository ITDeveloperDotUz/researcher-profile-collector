import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {ResearcherPage} from "./pages/ResearcherPage";


export const useRoutes = isAuthenticated => {
	// if (isAuthenticated) {
	// 	return (
	// 		<Switch>
	// 			<Route path="/links" exact>
	// 				<LinksPage />
	// 			</Route>
	// 			<Route path="/create" exact>
	// 				<CreatePage />
	// 			</Route>
	// 			<Route path="/detail/:id">
	// 				<DetailPage />
	// 			</Route>
	// 			<Redirect to="/create" />
	// 		</Switch>
	// 	)
	// }

	return (
		<Switch>
			<Route path="/" exact>
				<HomePage />
			</Route>
			<Route path="/researcher">
				<ResearcherPage />
			</Route>
			<Redirect to="/" />
		</Switch>
	)
}