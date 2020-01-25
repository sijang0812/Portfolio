import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<div className="App-nav">
				
				<ul> 
					<li>
						<Link to='/contact' className="App-nav-menu">CONTACT</Link>
					</li>
					<li>
						<Link to='/projects' className="App-nav-menu">PROJECTS</Link>
					</li>
					<li>
						<Link to='/about' className="App-nav-menu">ABOUT</Link>
					</li>
					<li>
						<Link to='/' className="App-nav-menu">HOME</Link>
					</li>
				</ul>
			</div>
		);
	}
}			

export default Nav;	