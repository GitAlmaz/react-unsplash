import React, { useContext } from 'react'
import Context from '../../context/MainPageContext'


export default ({ data }) => {

	const val = useContext(Context)
	console.log(val);
	
	return (
		<div className='image-card'>
			<img className='image-card__back' src={data.src.medium} alt='' />
			<span className='image-card__blur'></span>
		</div>
	)
}
