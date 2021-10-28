import React, { Component } from 'react';
import Task4 from './Task4';

class Task3 extends Component {
  state = {
    firstName: 'sai',
    age: 20,
    salary:22000,
    id:1919,
    designation: 'ui developer'
}

  handleClick = () => {
    this.setState({
      firstName: 'shiva'
    });
  }

  render() {
    return (
      <div>
        {this.state.age}
        {this.state.id}
        {this.state.firstName}
        <button onClick={this.handleClick}>Update</button>
        <Task4 />
      </div>
    )
  }
}
export default Task3;