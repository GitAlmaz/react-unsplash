import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Ctx } from '../../context/MainPageCtx'

function Header() {
	const [inputVal, setInputVal] = useState('')
	const { setQueryHook } = useContext(Ctx)
	const submitHandler = e => {
		e.preventDefault()
		setQueryHook(inputVal)
	}

	return (
		<header className='header header--main'>
			<div className='container'>
				<div className='header__top-bar'>
					<div className='header__logo'>
						<img src='https://image.flaticon.com/icons/png/512/2111/2111425.png' alt='' />
					</div>
					<form className='header__search' onSubmit={submitHandler}>
						<input
							type='text'
							name='main-search'
							id='main-search'
							autoComplete='off'
							placeholder=' '
							onInput={e => {
								setInputVal(e.target.value)
							}}
						/>
						<label htmlFor='main-search'>Search</label>
					</form>
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
			</div>
		</header>
	)
}

export default Header
