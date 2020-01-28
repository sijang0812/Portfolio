import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from './Nav.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Home from './Home.js';

function Routes() {
	return (
	<Router>
		<Nav />
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
			<Route path='/projects' component={Projects} />
			<Route path='/contact' component={Contact} />
			<Route component={Home} />
		</Switch>
	</Router>
	);
}

export default Routes;