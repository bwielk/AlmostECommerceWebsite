import React from 'react'
import SizeOptions from './size_options.jsx'

class ShopItem extends React.Component{

  constructor() {
    super();
    this.state = {
      description: "A fab top",
      price: 10,
      stockperSize: {
        S: 3,
        M: 8,
        L: 6,
        XL:3
      },
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c759d534259197.56ca4bc29849e.jpg"
    }
  }

  onHandleBuy(){
    this.props.buyMethod(this.state.price)
    if(this.state.stockperSize.S == 0){
      <p className = "shop">No more items available</p>
    }else{
      this.setState({
        stockperSize:{S: this.state.stockperSize.S - 1}
      })
    }
  }

  stockFormat () {
    let output
    if (this.state.stockperSize.S == 0) {
      output = <p className = "shop">No more items available</p>
    } else {
      output = <p>{this.state.stockperSize.S} items left </p>
    }
    return output
  }

  stockFormatButton() {
    let button
    if (this.state.stockperSize.S == 0) {
      button = <p className = "shop">Out of stock</p>
    } else {
      button = <button onClick = {this.onHandleBuy.bind(this)}>BUY</button>
    }
    return button

  }

  render(){
    return(
      <div className = "product">
      <img src = {this.state.url} />
      {this.stockFormat()}
      <p>{this.state.description}</p>
      <h1>£{this.state.price}</h1>
      {this.stockFormatButton()}
      </div>
      )
  }

}

export default ShopItem;