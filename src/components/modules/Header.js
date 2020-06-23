import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
	return (
		<header className='header header--main'>
			<div className='container'>
				<div className='header__top-bar'>
					<div className='header__logo'>
						<img src='https://image.flaticon.com/icons/png/512/2111/2111425.png' alt='' />
					</div>
					<div className='header__navigation'>
						<ul>
							<li>
								<NavLink exact to='/'>
									Main page
								</NavLink>
							</li>
							<li>
								<NavLink to='/about'>Favorites</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className='header__search'>
					<input type="text" name="main-search" id="main-search"/>
					<label htmlFor="main-search">Search</label>
				</div>
			</div>
		</header>
	)
}

export default Header
