import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <button onClick={props.callApi}>Get Joke</button>
    )
}

export default Button