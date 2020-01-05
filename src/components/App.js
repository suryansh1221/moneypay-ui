import React from 'react'
import SongList from './SongList'
import { Container } from 'semantic-ui-react'
import  SignIn from './auth/SignIn'
import header from './home/header'
import cards from './home/cards'
import cards2 from './home/cards2'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import dashboard from './home/dashboard'

const App = () => {
    return (
    
    <BrowserRouter>
        
            <Route path='/sign-in' exact component={SignIn} />
            <Route path='/header' exact component={header}/>
            <Route path='/cards' exact component={cards}/>
            <Route path='/cards2' exact component={cards2}/>
            <Route path='/dashboard' exact component={dashboard}/>
    </BrowserRouter>
    
    )
}

export default App