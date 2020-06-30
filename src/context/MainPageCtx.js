import React, { createContext } from 'react'
import useCtx from '../hooks/ctx.hooks'
const Ctx = createContext({
	images: [],
	query: '',
	loading: false,
	setQueryHook: () => {},
	setImagesHook: () => {},
	setLoadingHook: () => {},
	concatImagesHook: () => {}
})

const MainPageProvider = props => {
	const { images, query, loading, setQueryHook, setImagesHook, setLoadingHook } = useCtx()
	return (
		<Ctx.Provider value={{ images, query, loading, setQueryHook, setImagesHook, setLoadingHook }}>
			{props.children}
		</Ctx.Provider>
	)
}

export { MainPageProvider, Ctx }
