import React from 'react'
import ImageCard from './ImageCard'

export default ({ images }) => (images.length ? images.map((image) => <ImageCard data={image} key={image.id} />) : <h2>Нет картинок</h2>)
