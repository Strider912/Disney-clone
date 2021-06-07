import React, { useState } from 'react'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Detail from './Detail'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUsername } from './features/User/userSlice'


const App = () => {


  const username = useSelector(selectUsername)

  return (

    <div className="app">
    <Router>
      <Header />
      <Switch>
        { !username ? (
          <Route exact path="/" >  <Login />  </Route>
        ) :   
            <>
            <Route exact path="/home" >
          <Home />
        </Route>
        <Route exact path="/detail/:id" >
          <Detail />
        </Route>     
        </>
        
        }
      </Switch>
    </Router>
    </div>

  )
}

export default App


