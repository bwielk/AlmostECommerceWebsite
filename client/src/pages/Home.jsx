import React from 'react'

export class Home extends React.Component {

  constructor(props){
    super();
    this.state = {
      age: props.initAge, // the props.initAge == this.state.age 
      counter: 0,
      homeLink: props.initialLinkName
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

  onChangeName(){
    this.props.changeLink(this.state.homeLink)
  }

  onHandleChange(event){
    this.setState({
      homeLink:event.target.value
    })
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
      <button onClick={this.props.greet}>Greet</button>
      <input type = "text" value = {this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
      <button onClick = {this.onChangeName.bind(this)}>Change Header Link</button>
      </div>
      );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number, 
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
};

export default Home;