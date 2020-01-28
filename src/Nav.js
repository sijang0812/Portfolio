import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
	
		return (
			<div className="App-nav">
				<Link to='/' className="App-nav-menu"></Link>
				<ul> 
					
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

export default Nav;	