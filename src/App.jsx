import React, { Component } from "react";
import { Route } from "react-router-dom";
import Signup from './pages/Signup/';
import Dashboard from './pages/Dashboard/';
import Requests from './pages/Requests/';

import './styles/styles.scss';

class App extends Component {
	render() {
		return (
			<div>
				{/* <Route exact path='/' component={Home} /> */}
				{/* <Route exact path='/login' component={Login} /> */}
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/requests' component={Requests} />
			</div>
		);
	}
}

export default App;
