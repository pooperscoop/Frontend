import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
// import { Redirect } from 'react-router';
// import { signup } from '../../redux/actions/index';

class Dashboard extends Component { 
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

    render() {       
        console.log('locations:', this.state.locations);
         
        if (!this.props.user) {
            window.location.href = '/signup';
            // return <Redirect to='/signup' />
        }
        return (
            <div>
                <h2>Admin Dashboard</h2>

                <div className='flex'>
                    <div>
                        <p>14</p>
                        <p>New Requests</p>
                    </div>
                    <div>
                        <p>17</p>
                        <p>Routes Ready</p>
                    </div>
                </div>

                <button className='btn_primary' onClick={() => window.location.href='/requests'}>View Requests</button>
                <button className='btn_primary' onClick={() => window.location.href='/routes'}>Enter Routes</button>

                {/* <h2>Location Coordinates</h2>
                <ul>
                    {this.state.locations.map((location, index) => {
                        return (
                            <li>{location.coordinates.latitude}, {location.coordinates.latitude}</li>
                        )
                    })
                    }
                </ul> */}
                
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
