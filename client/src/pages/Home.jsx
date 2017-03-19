import React from 'react'

export class Home extends React.Component {
  render(){
    console.log(this.props);
    return(
      <div>
        <p>In a new component</p>
        <h1>Your name is {this.props.name}</h1>
        <h1>Your friend's name is {this.props.user.name} 
        and she is {this.props.user.age}</h1>
        <div>
        <h1>Her hoobbies are : </h1>
        <ul>
          {this.props.user.hobbies.map ((hobby, index) => <li key = {index}>{hobby}</li>)}
        </ul>
        </div>
        <hr/>
        {this.props.children}
      </div>
      );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  user: React.PropTypes.object,
  children: React.PropTypes.isRequired
};

export default Home;