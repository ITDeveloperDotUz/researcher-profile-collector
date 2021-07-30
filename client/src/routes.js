import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {RegisterPage} from './pages/RegisterPage'
import {ResearcherPage} from "./pages/ResearcherPage"
import {LoginPage} from "./pages/LoginPage"
import {AddProfilePage} from "./pages/AddProfilePage";

export const useRoutes = isLoggedIn => {
	if (isLoggedIn) {
		return (
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/add-profile">
					<AddProfilePage />
				</Route>
				<Route path="/researcher">
					<ResearcherPage />
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
			<Redirect to="/" />
		</Switch>
	)
}