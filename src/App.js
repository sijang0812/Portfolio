import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Main from './main.jpg';

class App extends Component {
	render() {
  	return (
	 		<div className="App">
				<Nav />
			  <section className="App-section">
			  	<div className="App-section-bg"></div>
			  	<div className="Ani-fadein">
				  	<br></br><br></br><br></br><br></br><br></br><br></br>
				 		<h1><b>안녕하세요!</b></h1><h2>개발자 장수인입니다</h2>
			 		</div>
			  </section>
	    </div>
	  );
	};
}

export default App;