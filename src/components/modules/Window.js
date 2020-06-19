import React, { Component } from 'react'
import Images from './Images'
import WhiteBtn from '../UI/WhiteBtn'

class Window extends Component {
	state = {
		images: [
			{
				id: 1,
				src: 'https://wallpapershome.ru/images/wallpapers/poligon-2560x1440-4k-hd-3d-fon-241.jpg'
			},
			{
				id: 2,
				src: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'
			},
			{
				id: 3,
				src:
					'https://2.bp.blogspot.com/-hQO4N8fZDu0/XD4zZDt34gI/AAAAAAAAAno/XubT6cXTxboyNKLCls1mhuMZ6IhzWZu4gCKgBGAs/w914-h514-p-k-no-nu/forest-landscape-art-8-4k.jpg'
			}
		]
	}
	render() {
		return (
			<div className='window'>
				<div className='window__top-bar'>
					<div className='window__nav-buttons'>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className='window__search-input'>
						<input type='text' name='search' id='photos-search' placeholder=' ' />
						<label htmlFor='photos-search'>Type here ...</label>
					</div>
					<div className='window__search-button'>Search</div>
				</div>
				<div className='window__content'>
					<WhiteBtn />
					<h2>Вот что мы нашли:</h2>
					<div className='window__images'>
						<Images images={this.state.images} />
					</div>
				</div>
			</div>
		)
	}
}



export default Window
