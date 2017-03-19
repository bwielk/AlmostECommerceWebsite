import React from 'react'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Main from './pages/Main.jsx'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends React.Component {
  
}

window.onload = () => {
  render(
  <h1>App runs!</h1>
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
