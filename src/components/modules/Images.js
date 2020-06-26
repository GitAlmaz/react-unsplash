import React, { useContext, Fragment, useEffect, useCallback } from 'react'
import ImageCard from './ImageCard'
import { Ctx } from '../../context/MainPageCtx'
import CardsPlaceholder from './CardsPlaceholder/CardsPlaceholder'
import useHttp from '../../hooks/http.hooks'

const Images = () => {
	const { images, query, setImagesHook } = useContext(Ctx)
	const { loading, fetchImages, searchImages } = useHttp()
	const getImages = async () => {
		try {
			const data = await fetchImages(24)
			setImagesHook(data)
		} catch (error) {
			console.error(error)
		}
	}
	const getSearchImages = async () => {
		try {
			const data = await searchImages(query)
			setImagesHook(data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getImages()
	}, [])

	useEffect(() => {
		getSearchImages()
	}, [query])

	return <Fragment>{!loading ? images.map(image => <ImageCard data={image} key={image.id} />) : <CardsPlaceholder length={24} />}</Fragment>
}

export default Images

// export default ({ images }) => (images.length ? images.map((image) => <ImageCard data={image} key={image.id} />) : <h2>Нет картинок</h2>)
