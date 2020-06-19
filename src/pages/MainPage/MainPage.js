import React, { Children } from 'react'
import WhiteBtn from '../../components/UI/WhiteBtn'
import Window from '../../components/modules/Window'

function MainPage() {
	const fuckYou = (event) => {
		event.preventDefault()
		console.log('fuck you')
	}
	return (
		<div className='main-page'>
			<div className='container'>
				<div className="main-page__window">
					<Window />
				</div>
				{/* <div className='main-page__top-bar'>
					<div className='main-page__search'>
						<input type='text' name='search' id='photos-search' placeholder=' ' />
						<label htmlFor='photos-search'>Type here ...</label>
					</div>
					<WhiteBtn text='Search' clickHendler={fuckYou} />
				</div> */}
			</div>
		</div>
	)
}

export default MainPage
