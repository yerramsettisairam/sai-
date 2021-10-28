import React, { Component } from "react";
import TaskEight from "./TaskEight";

class TaskSeven extends Component {
    state = {
        firstName: 'sai',
        lastName: 'ram',
        place: 'Rjhy',
        employeeDetails: [{ employeeName: 'sairam', age: 22, salary: 20000, id: 1, company: 'x' }, 
        { employeeName: 'siva', age: 22, salary: 22000, id: 2, company: 'y' }]

    }
    render() {
        return (
            <div>
                <TaskEight employeeData={this.state.employeeDetails} />
            </div>
        )
    }
}
export default TaskSeven;