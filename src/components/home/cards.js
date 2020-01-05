import React, { Component } from 'react'
import { Row, Column } from "simple-flexbox";
import './cards.css'
import { Button } from 'semantic-ui-react';
import check from '../../check.png'
import people from '../../people.png'
import bank from '../../bank.png'
const  cards = (props)=> {
// console.log(props.boxShadow)
let boxShadow = ""
        if(props.boxShadow){
            boxShadow = 'none'
        }else{
            boxShadow = '0px 6px 6px  rgba(0, 0, 0, 0.2)'
        }
        console.log(boxShadow)
        return (
            
            <Column flexGrow={1} style={{backgroundColor: props.backgroundColor, borderRadius: '4', cursor: 'pointer', height: '286px', maxWidth: '392px', padding: '24px 32px 24px 32px', marginTop: '30px', marginLeft: '180px', boxShadow: boxShadow}} horizontal="start" vertical="center">
                <Row horizontal='center'>
                    {
                        props.image === 'check' && <img src={check} style={{marginRight: '100px', marginTop: '30px', marginLeft: '30px', width: '70px'}}></img>
                    }
                    {
                        props.image === 'people' && <img src={people} style={{marginRight: '100px', marginTop: '30px', marginLeft: '30px', width: '70px'}}></img>
                    }
                    {
                        props.image === 'bank' && <img src={bank} style={{marginRight: '100px', marginTop: '30px', marginLeft: '30px', width: '70px'}}></img>
                    }
                </Row>
                <Row>
                 <span className="value">{props.title}</span>
                </Row>
                <Row>
                 <span className="title">{props.desc}</span>
                </Row>
            </Column>
            
        )
    
}

export default cards
