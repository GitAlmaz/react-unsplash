import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/main.scss'
import { useRoutes } from './routes/routes'

function App() {
	const routes = useRoutes(true)
	return (
		<Router>
			<div className='App'>{routes}</div>
		</Router>
	)
}

export default App
