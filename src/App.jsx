import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Signup from './pages/Signup/'
import './styles/styles.scss';

class App extends Component {
	render() {
		return (
			<Router>
				{/* <Route exact path='/' component={Home} /> */}
				{/* <Route exact path='/login' component={Login} /> */}
				<Route exact path='/signup' component={Signup} />
				{/* <Route exact path='/dashboard' component={Dashboard} /> */}
			</Router>
		);
	}
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	// your dispatches go here.
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
