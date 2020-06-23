import React, { createContext, Children } from 'react'

const Context = createContext({
	loadedImages: [],
	createdImages: []
})

function MainPageContext() {
	return (
		<Context.Provider>
			<Children>

			</Children>
		</Context.Provider>
	)
}

export default MainPageContext
