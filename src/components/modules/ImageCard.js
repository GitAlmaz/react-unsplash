import React, { useEffect, useState, useCallback } from 'react'
import CardsPlaceholder from './CardsPlaceholder/CardsPlaceholder'

export default ({ data }) => {
	const [loading, setLoading] = useState(true)
	const checkLoadImage = useCallback(() => {
		const img = new Image()
		img.src = data.urls.small
		img.onload = () => {
			setLoading(false)
		}
	}, [])
	
	
	useEffect(() => {
		checkLoadImage()
	}, [])

	return !loading ? (
		<div className='image-card'>
			<img className='image-card__back' src={data.urls.small} alt='' />
			<span className='image-card__blur'></span>
		</div>
	) : (
		<CardsPlaceholder length={1} />
	)
}
