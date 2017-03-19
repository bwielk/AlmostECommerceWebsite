import React from 'react'

export class Home extends React.Component {

  constructor(props){
    super();
    this.state = {
      age: props.initAge,
      counter: 0
    };
  }

  onMakeOlder(){
    if(this.state.age > 50){
      this.setState({
        age: 0,
        counter: this.state.counter + 1
      });
    }else{
      this.setState({
        age: this.state.age + 3,
        counter: this.state.counter + 1
      });
    }
  }

  render(){
    console.log(this.props);
    return(
      <div>
      <p>In a new component</p>
      <h1>Your name is {this.props.name} and your age is {this.state.age}</h1>
      <h1>You have clicked {this.state.counter} times</h1>
      <hr/>
      <button onClick = {this.onMakeOlder.bind(this)}>Make me older!</button>
      </div>
      );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number
};

export default Home;