import { useState, useCallback } from 'react'

const useCtx = () => {
	const [images, setImages] = useState([])
	const [query, setQuery] = useState('')
	const setQueryHook = useCallback(async query => {
		setQuery(query)
	}, [])
	const setImagesHook = useCallback(async images => {
		setImages(images)
	}, [])

	return { images, query, setQueryHook, setImagesHook }
}

export default useCtx
