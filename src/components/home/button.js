import React, { Component } from 'react'

const button = (props) => {
        return (
            <a href="#" style={{padding: '20px 40px',cursor: 'pointer', fontFamily: 'lato', borderRadius: '5px', display: 'inline-block', fontWeight: 'bold', backgroundColor: props.backgroundColor, border: props.border, color: props.color, fontSize: '20px', width: '200px', marginLeft: props.marginLeft, marginTop: '30px', height: '60px'}}>{props.text}</a>
        )
}

export default button
