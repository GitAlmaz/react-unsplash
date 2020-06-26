import React, { Fragment } from 'react'

const CardsPlaceholder = props => {
	const cardsArr = []
	for (let i = 0; i < props.length; i++) {
		cardsArr.push('')
	}
	return (
		<Fragment>
			{' '}
			{cardsArr.map((item, index) => (
				<div className='card-placeholder' key={index} />
			))}{' '}
		</Fragment>
	)
}

export default CardsPlaceholder
