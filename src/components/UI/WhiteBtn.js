import React, { useContext } from 'react'

function WhiteBtn(props) {


	return (
		<button className="btn btn--white" onClick={props.clickHendler} >
			<span>{props.text}</span>
		</button>
	)
}

export default WhiteBtn
