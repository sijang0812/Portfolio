﻿import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Routes from './Routes.js';
import Main from './main.jpg';

class App extends Component {
	render() {
  	return (
	 		<div className="App">
			  <section className="App-section">
			  	<div className="App-section-bg"></div>
			  	<div className="Ani-fadein"></div>
				  <Routes />
			  </section>
	    </div>
	  );
	};
}

export default App;