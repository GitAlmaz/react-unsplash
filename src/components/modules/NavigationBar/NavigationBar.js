import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavigationBar extends Component {
	state = {
		isActive: false
	}

	toggleActiveClass = () => {
		this.setState({ isActive: !this.state.isActive })
	}

	render() {
		return (
			<div className={`navigation-bar ${this.state.isActive ? 'active' : ''}`}>
				<div className='navigation-bar__toggle-btn' onClick={this.toggleActiveClass}>
					<img
						src={
							this.state.isActive
								? 'https://image.flaticon.com/icons/svg/966/966467.svg'
								: 'https://image.flaticon.com/icons/svg/967/967657.svg'
						}
						alt=''
					/>
				</div>
				<div className='navigation-bar__menu-list'>
					<ul>
						<li>
							<NavLink exact to='/'>
								{/* <img src='https://image.flaticon.com/icons/svg/967/967652.svg' alt='' /> */}
								<span>Main page</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='/about'>
								{/* <img src='https://image.flaticon.com/icons/svg/967/967667.svg' alt='' /> */}
								<span>Favorites</span>
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
export default NavigationBar
