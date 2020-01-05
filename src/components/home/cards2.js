import React, { Component } from 'react'
import { Row, Column } from "simple-flexbox";
import './header.css'
import check from '../../check.png'
 const cards2 = (props) => {
        return (
            <div>
            <Column flexGrow={1} horizontal="start" vertical="center" style={{maxWidth:props.maxWidth,borderRadius: '4px',padding: '24px 32px 24px 32px'}}>
                <Row horizontal='center' >
                 <span style={{color: props.color, fontWeight: 'bold', fontSize: props.fontSize, lineHeight: props.lineHeight, marginLeft: props.marginLeft, marginTop: props.marginTop}}>{props.title}</span>
                </Row>
                <Row>
                 <span style = {{color: 'slategrey', lineHeight: props.descLineHeight, marginTop: '20px', marginLeft: props.marginLeft,fontSize: props.descFontSize}}>{props.description}</span>
                </Row>
            </Column>
            </div>
        )
    
}

export default cards2
