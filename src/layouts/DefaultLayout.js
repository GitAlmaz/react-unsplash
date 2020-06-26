import React from 'react'
import Header from '../components/modules/Header'
import { MainPageProvider } from '../context/MainPageCtx'

const DefaultLayout = props => (
	<MainPageProvider>
		<main className='default-layout'>
			<Header />
			{props.children}
		</main>
	</MainPageProvider>
)
export default DefaultLayout
