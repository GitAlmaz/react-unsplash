import React, { createContext, useEffect, useState, useContext } from 'react'
import useHttp from '../hooks/http.hooks'
import useCtx from '../hooks/ctx.hook'
const Ctx = createContext({
	images: [],
	query: '',
	setQueryHook: () => {},
	setImagesHook: () => {}
})

const MainPageProvider = props => {
	const { images, query, setQueryHook, setImagesHook } = useCtx()
	return <Ctx.Provider value={{ images, query, setQueryHook, setImagesHook }}>{props.children}</Ctx.Provider>
}

export { MainPageProvider, Ctx }
