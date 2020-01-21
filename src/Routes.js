﻿import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './Nav.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

export default() => (
	<Router>
		<Nav />
		<Route path='/about' component={About} />
		<Route path='/projects' component={Projects} />
		<Route path='/contact' component={Contact} />
	</Router>
)