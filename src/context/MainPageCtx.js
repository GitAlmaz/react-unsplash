import React, { createContext, useEffect, useState, useContext } from 'react'
import useCtx from '../hooks/ctx.hook'
const Ctx = createContext({
	images: [],
	query: '',
	loading: false,
	setQueryHook: () => {},
	setImagesHook: () => {},
	setLoadingHook: () => {}
})

const MainPageProvider = props => {
	const { images, query, loading, setQueryHook, setImagesHook, setLoadingHook } = useCtx()
	return <Ctx.Provider value={{ images, query, loading, setQueryHook, setImagesHook, setLoadingHook }}>{props.children}</Ctx.Provider>
}

export { MainPageProvider, Ctx }
