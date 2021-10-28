import React, { Component } from 'react';
import WorkDisplay from './WorkDisplay';

class WorkOne extends Component {
    state = {
        firstName: 'sai',
        lastName:'ram',
        age: 22,
        salary: 20000,
        designation: 'developer'

    }

    render() {
        return (
            <div>
                <WorkDisplay  firstName={this.state.firstName}lastName={this.state.lastName} age={this.state.age} salary={this.state.salary} />
            </div>
        )
    }
}


export default WorkOne;

// task
// add prop-types validation for a object
//create 2 class components and send data(array of object) from to another and display it.
//update particular record in array of object in function based component

// mini assignment /task
// Create an application which will display employee data:
// -Employee Data will have following data set values: empId, Name, age, city, designation.
// -If someone mouseover on empId, console emp Name, age.
// -Include a button that will generate a random integer number.
// -Add Props Validation.
// -Add Hook(if needed).
