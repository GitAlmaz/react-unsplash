import { useState, useCallback } from 'react'

const useCtx = () => {
	const [images, setImages] = useState([])
	const [query, setQuery] = useState('')
	const [loading, setLoading] = useState(false)
	const setQueryHook = useCallback(async query => {
		setQuery(query)
	}, [])
	const setImagesHook = useCallback(async images => {
		setImages(images)
	}, [])
	const setLoadingHook = useCallback(async loading => {
		setLoading(loading)
	}, [])

	return { images, query, loading, setQueryHook, setImagesHook, setLoadingHook }
}

export default useCtx
