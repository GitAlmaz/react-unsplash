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
							<img src="https://image.flaticon.com/icons/svg/967/967652.svg" alt=""/>
							Main page
						</NavLink>
					</li>
					<li>
						<NavLink to='/about'>
							<img src="https://image.flaticon.com/icons/svg/967/967667.svg" alt=""/>
							About page
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	)
}
