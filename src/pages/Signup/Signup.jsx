import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
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
        // if (this.props.user) {
        //     return <Redirect to='/dashboard' />
        // }
        return (
            <div>
                <section className='signup form-wrapper'>                
                    <h2 className='content-section'>Sign up.</h2>
                    <form onSubmit={this.handleSubmit} className='user-form'>
                        <div className='form-group'>
                            <label htmlFor='firstName'>Your first name</label>
                            <input id='firstName' type='text' name='firstName' placeholder='Carmen' value={this.state.firstName} onChange={this.handleChange}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lastName'>Your last name</label>
                            <input id='lastName' type='text' name='lastName' placeholder='Caro' value={this.state.lastName} onChange={this.handleChange}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Your email</label>
                            <input id='email' type='email' name='email' placeholder='name@domain.com' value={this.state.email} onChange={this.handleChange}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input id='password' type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}></input>
                        </div>
                        <button type='submit'>Join Community Bot</button>
                    </form>
                </section>
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
