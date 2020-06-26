import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import About from '../pages/About/About'
import DefaultLayout from '../layouts/DefaultLayout'
import EmptyLayout from '../layouts/EmptyLayout'
import AuthPage from '../pages/Auth/AuthPage'

const useRoutes = isAuthenticated => {
	if (isAuthenticated) {
		return (
			<Switch>
				<Switch>
					<Route exact path='/'>
						<DefaultLayout>
							<MainPage />
						</DefaultLayout>
					</Route>
					<Route exact path='/about'>
						<DefaultLayout>
							<About />
						</DefaultLayout>
					</Route>
					<Redirect to='/' />
				</Switch>
			</Switch>
		)
	} else {
		return (
			<Switch>
				<Route path='/auth'>
					<EmptyLayout>
						<AuthPage />
					</EmptyLayout>
				</Route>
				<Redirect to='/' />
			</Switch>
		)
	}
}
export { useRoutes }
