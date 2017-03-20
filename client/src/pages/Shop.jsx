import React from 'react'
import ShopItem from '../component/shop_item.jsx'

class Shop extends React.Component {

  constructor(){
    super()
    this.state = {
      total: 0,
      amount: 0
    }
  }

  buy(item){
    this.setState({
      total: this.state.total + item,
      amount: this.state.amount + 1
    })
  }

  render(){
    return(
      <div className = "shop">
      <ShopItem buyMethod = {this.buy.bind(this)}/>
      <p>{this.state.total}</p>
      <p>You have bought {this.state.amount} items</p> 

      </div>
      )
  }
}

export default Shop;