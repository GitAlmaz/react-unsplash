import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import About from '../pages/About/About'
import Header from '../components/modules/Header'

export default function DefaultLayout() {
	return (
		<main className='default-layout'>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={MainPage} />
					<Route path='/about' component={About} />
				</Switch>
			</Router>
		</main>
	)
}
