import React, { Component } from 'react';

class FormTaskOne extends Component {
    state = {
        username: '',
        password: '',
        emailid: ''
    }

    handleChange = (e) => {
        console.log(e.target.id);//

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.formOne(this.state);
        this.setState({
            username: '',
            password: '',
            emailid: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>User Name : </label>
                    <input type="text" onChange={this.handleChange} value={this.state.username} id="username" placeholder="Enter user name" />
                    
                    <label>Age</label>
                    <input
                        type="text" onChange={this.handleChange} value={this.state.age} id="age" placeholder="Enter Age" />
                    <p>{this.state.error.ageError}</p>
                   
                    <label>password : </label>
                    <input type="password" onChange={this.handleChange} value={this.state.password} id="password" placeholder="Enter password" />
                    
                    <label>email id : </label>
                    <input type="email" onChange={this.handleChange} value={this.state.emailid} id="emailid" placeholder="Enter emailid" />
                    
                    <p>{this.state.errorSubmit}</p>
                    <button value="submit">Sign Up</button>
                </form>
            </div>
        )
    }

}
export default FormTaskOne;