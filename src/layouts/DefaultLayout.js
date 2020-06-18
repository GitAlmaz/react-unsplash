import React from 'react'
import NavigationBar from '../components/modules/NavigationBar/NavigationBar'
import { Switch, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import About from '../pages/About/About'

export default function DefaultLayout() {
	return (
		<main className='default-layout'>
			<NavigationBar />
			<Switch>
				<Route exact path='/' component={MainPage} />
				<Route path='/about' component={About} />
			</Switch>
		</main>
	)
}
