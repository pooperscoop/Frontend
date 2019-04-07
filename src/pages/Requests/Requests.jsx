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
        const locations = await axios.get('https://poop-scooper.herokuapp.com/loc/city/5ca938d677d0070004db47a0');        
        this.setState ({
            locations: locations.data.city.locations
        });
    };
    async removeCard(cardID) {
        console.log('here:', cardID);
        const card = document.getElementById(cardID);
        card.style.display = 'none';
        card.remove();
        await axios.get(`https://poop-scooper.herokuapp.com/loc/reject/${cardID}`);
        this.forceUpdate();
    }

    async acceptCard(cardID) {
        console.log('here:', cardID);
        const card = document.getElementById(cardID);
        card.style.display = 'none';
        card.remove();
        await axios.get(`https://poop-scooper.herokuapp.com/loc/accept/${cardID}`);
        this.forceUpdate();
    }

    render() {      
        if (!this.props.user) {
            window.location.href = '/signup';
        }
        return (
            <div className='dashboard'>
                <h2>Incoming Requests</h2>
                <div className="cards">
                    {this.state.locations.map((location, index) => {
                            return (
                                <div className='idk-pos' key={location._id}>
                                    <img className='card' id={location._id} src={location.imageURL}></img>
                                    <div className="button-section">
                                        <button onClick={() => this.removeCard(location._id)} className="nope"><i className="fas fa-times"></i></button> 
                                        <button onClick={() => this.acceptCard(location._id)} className="like"><i className="fas fa-check"></i></button>
                                    </div>
                                </div>
                            )
                    })}
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
