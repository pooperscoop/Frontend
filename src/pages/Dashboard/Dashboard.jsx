import React, { Component } from 'react';
import { connect } from "react-redux";
// import { Redirect } from 'react-router';
// import { signup } from '../../redux/actions/index';

class Dashboard extends Component { 
    // constructor(props) {
        // super(props);
        
        // this.state = {
        // };

        // this.handleSubmit = this.handleSubmit.bind(this);
    // };

    // handleChange = (event) => {   
    //     this.setState({ [event.target.id]: event.target.value });     
    // };

    // validateForm() {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // };

    // handleSubmit = e => {
    //     console.log("in handleSubmit");        
    //     e.preventDefault();
    //     this.props.signup(this.state);
    // };

    render() {        
        if (!this.props.user) {
            window.location.href = '/signup';
            // return <Redirect to='/signup' />
        }
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};

// function mapDispatchToProps() {
//     return {
//         signup
//     };
// };

export default connect(mapStateToProps, null)(Dashboard);
