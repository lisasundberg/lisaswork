import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import About from './containers/About';

import Header from './components/Header';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Header />
				<Route exact path="/" component={Landing} />
				<Route exact path="/about" component={About} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
			</div>
		</Router>
	);
}

export default App;
