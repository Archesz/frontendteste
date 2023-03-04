import React from 'react'
import './Button.scss'

function Button(props) {
    return (
        <button className={`btn ${props.styles}`} onClick={props.click}>{props.text}</button>
    )
}

export default Button