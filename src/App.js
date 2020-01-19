import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';

class App extends Component {
	render() {
  	return (
	 		<div className="App">
		  	<header className="App-header">
		      <h1>
		        Suin's Portfolio { '¼öÀÎ' }
		      </h1>
		   	</header>
		   	<Nav />
		   	<section className="App-section">
		   		<h1> section </h1>
		   	</section>
		   	<footer className="App-footer">
		   		<a> fotter </a>
		   	</footer>
	    </div>
	  );
	};
}

export default App;