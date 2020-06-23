import React, { useState, useEffect } from 'react'
import Images from '../../components/modules/Images'
import axios from '../../axios'

function MainPage() {
	const [images, setImages] = useState([])
	const [query, setQuery] = useState('cloud')

	const fetchImages = async (query, per_page = 16) => {
		const res = await axios(`search?query=${query}&per_page=${per_page}`)
		setImages(res.data.photos)
	}

	useEffect(() => {
		fetchImages(query)
	}, [query])

	return (
			<div className='main-page'>
					<div className="container">
						<Images images={images} />
					</div>
			</div>
	)
}

export default MainPage
