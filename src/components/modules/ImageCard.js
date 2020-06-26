import React from 'react'

export default ({ data }) => (
	<div className='image-card'>
		<img className='image-card__back' src={data.urls.small} alt='' />
		<span className='image-card__blur'></span>
	</div>
)
