﻿import React, { Component } from 'react';
import './App.css';
import './Section.css';
import mail from './logo/mail.png';
import phone from './logo/phone.png';

function Contacts() {
	return (
	<section className="App-section-others">
		<div className="Section-main-div">
			<h6 className="title-font-en">Contact</h6>
			<h className="font-en">
				<img src={phone} className="Contact-img"/>
				&nbsp;&nbsp;&nbsp;010.9132.0812
			</h>
			<br></br><br></br>
			<h className="font-en">
				<img src={mail} className="Contact-img"/>
				&nbsp;&nbsp;&nbsp;&nbsp;sijang0812@gmail.com
			</h>
		</div>
	</section>
	);
}

export default Contacts;