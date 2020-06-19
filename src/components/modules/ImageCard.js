import React from 'react'

export default ({data}) => {
	return (
		<div className="image-card">
			<img src={data.src} alt=""/>
		</div>
	)
}