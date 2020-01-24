import React, { Component } from 'react';
import './App.css';
import './Section.css';
import mail from './mail.png';
import github from './github.png';

export default () => (
	<section className="App-section-others">
		<div className="Section-main-div">
			<h6 className="title-font-en">Contact</h6>
			<h className="font-en">
				<img src={mail} className="Contact-img"/>
				&nbsp;&nbsp;&nbsp;&nbsp;sijang0812@gmail.com
			</h>
			<h className="font-en">
				<br></br><br></br>
				<img src={github} className="Contact-img"/>
				&nbsp;&nbsp;&nbsp;https://github.com/sijang0812
			</h>
		</div>
	</section>
)