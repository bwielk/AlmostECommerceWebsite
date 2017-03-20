import React from 'react'
import {Link} from 'react-router'
import Home from './Home.jsx'
import Shop from './Shop.jsx'
import Admin from './Admin.jsx'

const Main = ({children}) => (
    <div>
    <h1>Welcome to our shop</h1>
    <ul>
      <li><Link to ='/shop'>SHOP</Link></li>
      <li><Link to ='/home'>Home</Link></li>
    </ul>
    ({children})
    </div>
);

export default Main;