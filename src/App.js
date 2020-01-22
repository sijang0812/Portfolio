import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Routes from './Routes.js';
import Main from './main.jpg';

class App extends Component {
	render() {
  	return (
	 		<div className="App">
	 			<Routes />
			</div>
	  );
	};	
}

export default App;