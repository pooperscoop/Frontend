import React, { Component } from 'react';
import { connect } from "react-redux";
import avatar from '../../images/needles.jpg';
import axios from 'axios';

// import { Redirect } from 'react-router';
// import { signup } from '../../redux/actions/index';

class Requests extends Component { 
    constructor(props) {
        super(props);
        
        this.state = {
            locations: []
        };


    };

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

    async componentDidMount() {
        console.log('here');
        
        const locations = await axios.get('https://poop-scooper.herokuapp.com/loc/city/5ca938d677d0070004db47a0');
        console.log('got locations:', locations.data.city.locations);
        
        this.setState ({
            locations: locations.data.city.locations
        })
        // console.log('locations:', this.state.locations);
    }
    // async removeCard(cardID) {
    //     const card = document.getElementById(cardID);
    //     card.style.display = 'none';
    //     const cards = document.getElementsByClassName('cards');
    //     card.remove();
    //     // card.parentNode.removeChild(card);
    //     await axios.delete('/loc/5ca938d677d0070004db47a0/:cardID');
    //     this.forceUpdate()
    // }

    render() {      
        console.log('locations:', this.state.locations);
          
        if (!this.props.user) {
            window.location.href = '/signup';
        }
        return (
            <div className='dashboard'>
                <h2>Incoming Requests</h2>
                <div className="cards">
                    <img className='card' src={avatar}></img>
                    <img className='card card-two' id='card-two' src={avatar}></img>
                    <div className="button-section">
                        <button className="nope"><i className="fas fa-times"></i></button> 
                        <button className="like"><i className="fas fa-check"></i></button>
                        {/* on btn click change the fade unique element off the page and dete the node from the DOM*/}
                    </div>
                </div>
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

export default connect(mapStateToProps, null)(Requests);
