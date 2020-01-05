import React, { Component } from 'react'
import { Row, Column } from "simple-flexbox";
import './header.css'
import xseed from '../../xseed.png'
import cards2 from './cards2'
function header()  {
    
        return (
            
            <Row
                vertical="center"
                horizontal="spaced"
                flexGrow={1}>
                <Row flexGrow={1}>
                    <img src={xseed} style={{marginTop: '60px', marginLeft: '50px'}}></img>
                </Row>
                <Row horizontal='center' flexGrow={1}>
                    <a href="#" className="button2">Home</a>
                    <a href="#" className="button2">Features</a>
                    <a href="#" className="button2">How it Works</a>
                    <a href="#" className="button2">Partners</a>
                </Row>
                <Row horizontal='end' flexGrow={1}>
                    <button className="button1">Login</button>
                    <a href="#" className="button">Contact us</a>
                </Row>
            </Row>
            
        );
    
}

export default header
