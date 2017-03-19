import React from 'react'
import Home from './pages/Home.jsx'
import Header from './component/header.jsx'
import Shop from './pages/Shop.jsx'
import Main from './pages/Main.jsx'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      homeLink: "Home"
    };
  }

  onGreet(){
    alert("Hello");
  }

  onChangeLinkName(newName){
    this.setState({
      homeLink: newName
    });
  }

  render() {
    return (
      <div>
      <div className = "app-style">
      <Header homeLink = {this.state.homeLink} />
      </div>
      <div className = "app-style">
      <Home 
      name={"Blaise"} 
      initAge={25} 
      greet = {this.onGreet}
      changeLink = {this.onChangeLinkName.bind(this)}
      initialLinkName = {this.state.homeLink} />

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
