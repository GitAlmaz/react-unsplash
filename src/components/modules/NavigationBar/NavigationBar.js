import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {
	return (
		<div className='navigation-bar'>
			<div className='navigation-bar__user'>
				<img src='https://image.flaticon.com/icons/svg/2919/2919600.svg' alt='' />
				<p>Username</p>
			</div>
			<div className='navigation-bar__menu'>
				<ul>
					<li>
						<NavLink exact to='/'>
							Main page
						</NavLink>
					</li>
					<li>
						<NavLink to='/about'>About page</NavLink>
					</li>
				</ul>
			</div>
		</div>
	)
}
