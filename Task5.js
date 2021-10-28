import React, { Component } from 'react';
import Task6 from './Task6';

class Task5 extends Component {
  state = [{
    employeeName: 'sai', age: 22, id: 1, salary: 20000
  },
  { employeeName: 'ram', age: 23, id: 2, salary: 20000 },
  { employeeName: 'ramu', age: 24, id: 3, salary: 20000 },
  { employeeName: 'siva', age: 25, id: 4, salary: 20000 }
  ]

  /*handleClick = () => {
    this.setState({
      firstName: 'shiva'
    });
  }*/

  render() {
    return (
      <div>
        <task6 Data={this.state} />
      </div>
    )
  }
}
export default Task5;