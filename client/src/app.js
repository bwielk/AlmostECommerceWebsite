import React from 'react'
import Home from './pages/Home.jsx'
import Header from './component/header.jsx'
import Shop from './pages/Shop.jsx'
import Main from './pages/Main.jsx'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div>
      <div className = "app-style">
      <Header />
      </div>
      <div className = "app-style">
      <Home name={"Blaise"} initAge={25}/>
      </div>
      </div>
      )
  }
}

window.onload = () => {
  render(
  <App/>, document.getElementById('app')
  )
}
