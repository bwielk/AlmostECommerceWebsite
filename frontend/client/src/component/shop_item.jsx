import React from 'react'
import SizeOptions from './size_options.jsx'

class ShopItem extends React.Component{

  onHandleBuy(){
    this.props.buyMethod(this.props.item.price)
    if(this.props.item.stock == 0){
      <p className = "shop">No more items available</p>
    }else{
      this.props.stock - 1
    }
  }

  stockFormat () {
    let output
    if (this.props.item.stock == 0) {
      output = <p className = "shop">No more items available</p>
    } else {
      output = <p>{this.props.item.stock} items left </p>
    }
    return output
  }

  stockFormatButton() {
    let button
    if (this.props.item.stock == 0) {
      button = <p className = "shop">Out of stock</p>
    } else {
      button = <button onClick = {this.onHandleBuy.bind(this)}>BUY</button>
    }
    return button

  }

  render(){
    return(
      <div className = "product">
      <img src = {this.props.item.url} />
      {this.stockFormat()}
      {this.stockFormatButton()}
      </div>
      )
  }

}

export default ShopItem;