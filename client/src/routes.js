import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {RegisterPage} from './pages/RegisterPage'
import {SearchPage} from "./pages/SearchPage"
import {LoginPage} from "./pages/LoginPage"
import {ResearcherProfilePage} from "./pages/ResearcherProfilePage";

export const useRoutes = isLoggedIn => {
	if (isLoggedIn) {
		return (
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/search/:searchPhrase?">
					<SearchPage />
				</Route>
				<Route path="/researcher/profile/:id">
					<ResearcherProfilePage />
				</Route>
				<Redirect to="/" />
			</Switch>
		)
	}

	return (
		<Switch>
			<Route path="/" exact>
				<HomePage />
			</Route>
			<Route path="/register">
				<RegisterPage />
			</Route>
			<Route path="/login">
				<LoginPage />
			</Route>
			<Route path="/search/:searchPhrase?">
				<SearchPage />
			</Route>
			<Route path="/researcher/profile/:id">
				<ResearcherProfilePage />
			</Route>
			<Redirect to="/" />
		</Switch>
	)
}