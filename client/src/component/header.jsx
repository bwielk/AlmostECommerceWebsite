import React from "react"

class Header extends React.Component {
  render(){
    return(
      <nav className = "navbar">
        <div className = "nav-container">
          <ul>
            <li><a href = "#">Home</a></li>
            <li><a href = "#">Shop</a></li>
          </ul>
        </div>
      </nav>
      );
  }
}

export default Header;