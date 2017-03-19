import React from 'react'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Main from './pages/Main.jsx'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div className = "app-style">
        <h1> Lorem Ipsum</h1>
      </div>
      )
  }
}

window.onload = () => {
  render(
  <App/>
  // render(
  //   <Router history = {hashHistory}>
  //     <Route path ="/" component={Main}>
  //       <IndexRoute component = {Home}></IndexRoute>
  //       <Route path = "shop" component = {Shop}></Route>
  //       <Route path = "home" component = {Home}></Route>
  //     </Route> 
  //   </Router>
  ,
  document.getElementById('app')
  )
}
