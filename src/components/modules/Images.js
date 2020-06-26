import React, { useContext, Fragment, useEffect } from 'react'
import ImageCard from './ImageCard'
import { Ctx } from '../../context/MainPageCtx'
import useHttp from '../../hooks/http.hooks'
import Loader from './Loader/Loader'

const Images = () => {
	const { images, query, setImagesHook } = useContext(Ctx)
	const { fetchImages, searchImages } = useHttp()
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

	return <Fragment>{images.length ? images.map(image => <ImageCard data={image} key={image.id} />) : <Loader />}</Fragment>
}

export default Images
