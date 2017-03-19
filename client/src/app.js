import React from 'react'
import Home from './pages/Home.jsx'
import Header from './component/header.jsx'
import Shop from './pages/Shop.jsx'
import Main from './pages/Main.jsx'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends React.Component {
  render() {
    var user = {
      name: "Kasia ",
      age: 25,
      hobbies: ["books", "drawing"]
    }
    return (
      <div>
      <div className = "app-style">
      <Header />
      </div>
      <div className = "app-style">
      <Home name={"Blaise"} age={25} user = {user}>
      <p>A new paragraph</p>
      </Home>
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
