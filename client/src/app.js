import React from 'react'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Main from './pages/Main.jsx'
import Admin from './pages/Admin.jsx'

window.onload = () => {
  render(
    <Router history={hashHistory}>
        <Route path ='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path ='home' component = {Home} />
            <Route path ='shop' component = {Shop} />
            <Route path ='admin123' component = {Admin} />
        </Route>
    </Router>, 
    document.getElementById('app')
    )
}
