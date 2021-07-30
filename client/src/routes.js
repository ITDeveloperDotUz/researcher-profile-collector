import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {RegisterPage} from './pages/RegisterPage'
import {ResearcherPage} from "./pages/ResearcherPage"
import {LoginPage} from "./pages/LoginPage"

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
			<Route path="/register">
				<RegisterPage />
			</Route>
			<Route path="/login">
				<LoginPage />
			</Route>
			<Redirect to="/" />
		</Switch>
	)
}