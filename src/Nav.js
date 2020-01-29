import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
	
		return (
			<div className="App-nav">
				<ul> 
					<li>
						<Link to='/Portfolio/contact' className="App-nav-menu">CONTACT</Link>
					</li>
					<li>
						<Link to='/Portfolio/projects' className="App-nav-menu">PROJECTS</Link>
					</li>
					<li>
						<Link to='/Portfolio/about' className="App-nav-menu">ABOUT</Link>
					</li>
					<li>
						<Link to='/Portfolio/' className="App-nav-menu">HOME</Link>
					</li>
				</ul>
			</div>
		);
	
}			

export default Nav;	