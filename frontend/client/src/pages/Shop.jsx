import React from 'react'
import ShopItem from '../component/shop_item.jsx'
import {Link} from 'react-router'

class Shop extends React.Component {

  constructor(){
    super()
    this.state = {
      products: [],
      total: 0.0,
      amount: 0
    }
  }

  componentDidMount(){
    const url = 'http://localhost:8000/api/products'
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request.onload = () => {
      if(request.status !== 200) return 
        const products = JSON.parse(request.responseText)
      this.setState({products: products})
    }
    request.send()
  }

  buy(item){
    this.setState({
      total: this.state.total + parseFloat(item),
      amount: this.state.amount + 1
    })
  }

  render(){
    const allProducts = this.state.products.map((product, i) =>
      {return <ShopItem key = {i} item = {product} buyMethod = {this.buy.bind(this)}/>
    })

    return(
      <div className = "shop">
      <Link to = 'shop/payment'>PAY</Link>
      <p>Total to pay:{this.state.total}</p>
      <p>You have bought {this.state.amount} items</p> 
      {allProducts}
      </div>
      )
  }
}

export default Shop;