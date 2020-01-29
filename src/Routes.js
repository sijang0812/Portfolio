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
			<Route exact path='/Portfolio/' component={Home} />
			<Route path='/Portfolio/about' component={About} />
			<Route path='/Portfolio/projects' component={Projects} />
			<Route path='/Portfolio/contact' component={Contact} />
			<Route component={Home} />
		</Switch>
	</Router>
	);
}

export default Routes;