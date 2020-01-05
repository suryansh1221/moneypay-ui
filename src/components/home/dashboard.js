import React, { Component } from 'react'
import cards2 from './cards2'
import Header from './header'
import Cards from './cards'
import Cards2 from './cards2'
import { Row, Column } from "simple-flexbox";
import Button from './button'
import man from '../../man3.png'
import man2 from '../../man2.png'
import check from './check.css'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle as regularCheckCircle} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import card3 from '../../card3.png'
import woman from '../../woman.png'
import money from '../../moneypay.png'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
class dashboard extends Component {
    render() {
        // console.log(<header/>)
        return (
            <Column>
            <Row style={{backgroundColor: '#f7fbfd'}}>
                <Header />
                </Row>
                <Row style={{backgroundColor: '#f7fbfd'}}>
                    <Column>
                        <Cards2 title="Providing Interbank Banking Solutions" 
                        description="MoneyPay is a service to make transfers between banks free of charge.Provides credit & debit cards, deposits, loans and other services worldwide."
                        color='midnightblue'
                        fontSize='80px'
                        marginLeft='150px'
                        marginTop='200px'
                        maxWidth='1000px'
                        lineHeight='120px'
                        descLineHeight='40px'
                        descFontSize='28px'
                        />
                         <Row>
                            <Button backgroundColor='#5c87fd' border='none' color='white' text='Get Started' marginLeft='19%'/>
                            <Button backgroundColor='white' border='solid' color='#5c87fd' text='Download' marginLeft='30px'/>
                        </Row>
                    </Column>
                    <Column>
                        <img src={man} style={{marginTop: '100px', marginRight: 0, marginLeft: '100px'}}></img>
                        <img src={card3} style={{maxWidth: '10px'}}></img>
                    </Column>
                </Row>
                <Column style={{backgroundColor:'#fbfbfb'}}>
                <Row style={{backgroundColor:'#fbfbfb'}}>
                    <Cards2 title="Why Money Pay" 
                        description="its time to make transactions more safe, easy and fast!"
                        color='midnightblue'
                        fontSize='50px'
                        marginLeft='150px'
                        marginTop='100px'
                        maxWidth='1000px'
                        lineHeight='90px'
                        descLineHeight='20px'
                        descFontSize='28px'
                        />
                </Row>
                <Row style={{marginBottom:'100px', backgroundColor:'#fbfbfb'}}>
                    <Cards title="Licensed By OJK & BI" desc="Transactions safely and reliably supervised by OJK and BI" image="check" backgroundColor='white'/>
                    <Cards title="More Than 800,000 users" desc="Many people have trusted with moneypay in transaction activity" image="people" backgroundColor='#fbfbfb' boxShadow='none'/>
                    <Cards title="Free Interbank Transfer" desc="Send money with other banks quick & easy without interbank fees" image="bank"backgroundColor='#fbfbfb' boxShadow='none'/>
                </Row></Column>
                <Row style={{backgroundColor:'#f6fbfd'}}>
                    <Cards2 title="How It Works" 
                        description="Just a few minutes to use MoneyPay for transactions"
                        color='midnightblue'
                        fontSize='50px'
                        marginLeft='150px'
                        marginTop='10px'
                        maxWidth='1000px'
                        lineHeight='90px'
                        descLineHeight='20px'
                        descFontSize='28px'
                        />
                </Row>
                <Row style={{backgroundColor:'#f6fbfd'}}>
                    <Column>
                        <img src={man2} style={{marginTop: '100px', marginRight: 0, marginLeft: '185px', marginTop:'100px'}}></img>
                    </Column>
                    <Column>
                        <Cards2 title="Create an account" 
                            description="Create your MoneyPay account. Its free to signup. Get mores cashback & free interbank transfer"
                            color='midnightblue'
                            fontSize='35px'
                            marginLeft='150px'
                            marginTop='250px'
                            maxWidth='1000px'
                            lineHeight='90px'
                            descLineHeight='29px'
                            descFontSize='20px'
                            />
                            <Row>
                                <ul class="checkmark" marginLeft='200px'>
                                    <li style={{marginLeft: '140px', marginBottom: '20px'}}>
                                        <FontAwesomeIcon icon={faCheckCircle} color='yellowgreen'></FontAwesomeIcon>
                                        <span style={{marginLeft: '10px'}}>Register only using Document ID and Photo Selfie</span><br/>
                                    </li>
                                    <li style={{marginLeft: '140px', marginBottom: '20px'}}>
                                        <FontAwesomeIcon icon={faCheckCircle} color='yellowgreen'></FontAwesomeIcon>
                                        <span style={{marginLeft: '10px'}}>Get 50% Cashback for first transactions</span><br/>
                                    </li>
                                    <li style={{marginLeft: '140px', marginBottom: '20px'}}>
                                        <FontAwesomeIcon icon={faCheckCircle} color='yellowgreen'></FontAwesomeIcon>
                                        <span style={{marginLeft: '10px'}}>50+ Bank Partnerships</span>
                                    </li>
                                </ul>
                            </Row>
                    </Column>
                </Row>
                <Row style={{backgroundColor: 'white'}}>
                    <Column>
                        <Cards2 title="Choose your Bank" 
                                description="More than 20+ local and international MoneyPay Partnerships. Make your transaction more trusted."
                                color='midnightblue'
                                fontSize='35px'
                                marginLeft='150px'
                                marginTop='280px'
                                maxWidth='800px'
                                lineHeight='90px'
                                descLineHeight='29px'
                                descFontSize='20px'
                                />
                    </Column>
                    <Column>
                    <img src={woman} style={{marginTop: '40px', marginRight: 0, marginLeft: '255px'}}></img>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Cards2 title="Our Bank Partners" 
                            description="More than 50+ local and international MoneyPay Partnerships."
                            color='midnightblue'
                            fontSize='50px'
                            marginLeft='150px'
                            marginTop='100px'
                            maxWidth='1000px'
                            lineHeight='90px'
                            descLineHeight='20px'
                            descFontSize='26px'
                            />
                    </Column>
                    <Column style={{marginTop: "110px"}}>
                        <Button backgroundColor='ghostwhite' border='solid' color='#5c87fd' text='Partners' marginLeft='430px' />
                    </Column>
                </Row>
                <Row horizontal='center' vertical='center' style={{backgroundColor: '#162c5b', marginTop: '100px', padding: '100px'}}>
                    <Column style={{marginRight: '128px', marginTop: '100px'}}>
                        <img src={money} ></img>
                    </Column>
                    <Column >
                        <span style={{color: 'white', fontWeight: 'bold', marginTop: '100px', fontSize: '20px', marginLeft: '100px'}}>Product</span>
                        <Row >
                            <a style={{color: 'grey', fontSize: '20px', marginLeft: '100px', marginTop: '30px'}}>Home</a>
                        </Row>
                        <Row >
                            <a style={{color: 'grey', fontSize: '20px', marginLeft: '100px', marginTop: '30px'}}>Features</a>
                        </Row>
                        <Row >
                            <a style={{color: 'grey', fontSize: '20px', marginLeft: '100px', marginTop: '30px'}}>How it works</a>
                        </Row>
                        <Row >
                            <a style={{color: 'grey', fontSize: '20px', marginLeft: '100px', marginTop: '30px'}}>Partnerships</a>
                        </Row>
                    </Column>
                    <Column>
                        <span style={{color: 'white', fontWeight: 'bold', marginTop: '55px', fontSize: '20px', marginLeft: '100px'}}>Support</span>
                        <Row >
                            <a style={{color: 'grey', fontSize: '20px', marginLeft: '100px', marginTop: '30px'}}>Customer Service</a>
                        </Row>
                        <Row >
                            <a style={{color: 'grey', fontSize: '20px', marginLeft: '100px', marginTop: '30px'}}>Help Center</a>
                        </Row>
                        <Row >
                            <a style={{color: 'grey', fontSize: '20px', marginLeft: '100px', marginTop: '30px'}}>Docs</a>
                        </Row>
                    </Column>
                    <Column>
                        <span style={{color: 'white', fontWeight: 'bold', fontSize: '20px', marginLeft: '100px'}}>Downloads</span>
                        <Row >
                            <a style={{color: 'grey', fontSize: '20px', marginLeft: '100px', marginTop: '30px'}}>App Store</a>
                        </Row>
                        <Row >
                            <a style={{color: 'grey', fontSize: '20px', marginLeft: '100px', marginTop: '30px'}}>Google Play</a>
                        </Row>
                    </Column>
                    <Column >
                        <span style={{color: 'white', fontWeight: 'bold', fontSize: '20px', marginLeft: '100px'}}>Legal</span>
                        <Row >
                            <a style={{color: 'grey', fontSize: '20px', marginLeft: '100px', marginTop: '30px'}}>Terms & Conditions</a>
                        </Row>
                        <Row >
                            <a style={{color: 'grey', fontSize: '20px', marginLeft: '100px', marginTop: '30px'}}>Privacy Policy</a>
                        </Row>
                    </Column>
                    <Column style={{marginBottom: '50px'}}>
                        <span style={{color: 'white', fontWeight: 'bold', fontSize: '20px', marginLeft: '100px', marginBottom: '10px'}}>Follow Us</span>
                        <Row  style={{marginLeft: '100px', marginTop: '15px'}}>
                            <FontAwesomeIcon icon={faTwitter} size="2x" color='white'/>
                            <FontAwesomeIcon icon={faInstagram} size="2x" color='white'/>
                            <FontAwesomeIcon icon={faFacebook} size="2x" color='white'/>
                        </Row>
                    </Column>
                </Row>
            </Column>
        )
    }
}

export default dashboard
