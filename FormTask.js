import React, { Component } from 'react';
import FormTaskOne from './FormTaskOne';
import FormDis from './FormDis';

class FormTask extends Component {
    state = {
        personData: []
    }
    formOne = (props) => {
        console.log(props);
        // spread opeartor
        let personData = [...this.state.personData, props];
        this.setState({
            personData
        })
    }
    render() {
        return (
            <div>
                <p>Form</p>
                <FormTaskOne formOne={this.formOne} />
                <FormDis data={this.state.personData} />
            </div>
        )
    }

}
export default FormTask;