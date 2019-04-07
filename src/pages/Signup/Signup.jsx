import React, { Component } from 'react';
import { connect } from "react-redux";
// import { Redirect } from 'react-router';
import { signup } from '../../redux/actions/index';

class Signup extends Component { 
    constructor(props) {
        super(props);
        
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = (event) => {   
        this.setState({ [event.target.id]: event.target.value });     
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    };

    handleSubmit = e => {
        console.log("in handleSubmit");        
        e.preventDefault();
        this.props.signup(this.state);
    };

    render() {        
        if (this.props.user) {
            window.location.href = '/dashboard';
        //     return <Redirect to='/dashboard' />
        }
        return (
            <div className='signup form-wrapper'>                
                <h2 className='h2_primary'>Sign up.</h2>
                <form onSubmit={this.handleSubmit} className='user-form'>
                    <div className='form-group'>
                        <input id='firstName' type='text' name='firstName' placeholder='First name' value={this.state.firstName} onChange={this.handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <input id='lastName' type='text' name='lastName' placeholder='Last name' value={this.state.lastName} onChange={this.handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <input id='email' type='email' name='email' placeholder='name@domain.com' value={this.state.email} onChange={this.handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <input id='password' type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                    <button type='submit'>Signup</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};

function mapDispatchToProps() {
    return {
        signup
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Signup);
