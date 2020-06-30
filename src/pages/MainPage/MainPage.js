import React, { useReducer, useEffect, useContext, useCallback, useRef, useState } from 'react'
import Images from '../../components/modules/Images'
import { Ctx } from '../../context/MainPageCtx'
import useHttp from '../../hooks/http.hooks'
import useCtx from '../../hooks/ctx.hooks'
const MainPage = () => {
	const { query, setImagesHook } = useContext(Ctx)
	const { searchImages, fetchImages } = useHttp()

	const pageReducer = (state, action) => {
		switch (action.type) {
			case 'ADVANCE_PAGE':
				return { ...state, page: state.page + 1 }
			default:
				return state
		}
	}
	const imgReducer = (state, action) => {
		switch (action.type) {
			case 'STACK_IMAGES':
				return [...state, ...action.data]
			default:
				return state
		}
	}

	const [pager, pagerDispatch] = useReducer(pageReducer, { page: 1 })
	const [newImages, imgDispatch] = useReducer(imgReducer, [])

	const getSearchImages = useCallback(
		async (query, per_page, page) => {
			// setImagesHook([])
			const data = await searchImages(query, per_page, page)
			imgDispatch({ type: 'STACK_IMAGES', data })
		},
		[searchImages]
	)
	const getFetchImages = useCallback(
		async (per_page, page) => {
			const data = await fetchImages(per_page, page)
			imgDispatch({ type: 'STACK_IMAGES', data })
		},
		[fetchImages]
	)

	useEffect(() => {
		query.length ? getSearchImages(query, 24, pager.page) : getFetchImages(24, pager.page)
		
	}, [pager.page])

	useEffect(() => {
		setImagesHook(newImages)
	}, [newImages])

	const bottomBoundaryRef = useRef(null)

	const intObserver = new IntersectionObserver(entry => {
		if (entry[0].intersectionRatio > 0) {
			pagerDispatch({ type: 'ADVANCE_PAGE' })
		}
	})

	const scrollObserver = useCallback(
		node => {
			intObserver.observe(node)
		},
		[pagerDispatch]
	)

	useEffect(() => {
		bottomBoundaryRef.current && scrollObserver(bottomBoundaryRef.current)
	}, [scrollObserver, bottomBoundaryRef])
	return (
		<div className='main-page'>
			<div className='container'>
				<div className='main-page__images'>
					<Images />
				</div>
				<div className='main-page__bottom-line' ref={bottomBoundaryRef}></div>
			</div>
		</div>
	)
}

export default MainPage
