import { useState, useCallback } from 'react'
import _axios from '../axios'

const useHttp = () => {
	const [loading, setLoading] = useState(false)
	const fetchImages = useCallback(async (per_page = 24, page = 1) => {
		setLoading(true)
		try {
			const res = await _axios(`photos?per_page=${per_page}&page=${page}`)
			if (!res.status === 200) {
				throw new Error(res.statusText || 'Что-то пошло не так')
			}
			setLoading(false)
			return res.data
		} catch (error) {
			console.error(error)
		}
	}, [])
	const searchImages = useCallback(async (query ,per_page = 24, page = 1) => {
		setLoading(true)
		try {
			const res = await _axios(`search/photos?query=${query}&per_page=${per_page}&page=${page}`)
			if (!res.status === 200) {
				throw new Error(res.statusText || 'Что-то пошло не так')
			}
			setLoading(false)
			return res.data.results
		} catch (error) {
			console.error(error)
		}
	}, [])

	return { loading, fetchImages, searchImages }
}
export default useHttp
