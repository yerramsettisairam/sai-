import React, { Component } from 'react';
import Rough from './Rough';
import SweetDisplay from './SweetDisplay';

class Sweet extends Component {
    state = {
        empolyeeData: []
    }
    rough = (props) => {
        console.log(props);
        // spread opeartor
        let empolyeeData = [...this.state.empolyeeData, props];
        this.setState({
            empolyeeData
        })
    }
    render() {
        return (
            <div>
                <p>Form</p>
                <Rough rough={this.rough} />
                <SweetDisplay data={this.state.empolyeeData} />
            </div>
        )
    }

}
export default Sweet;