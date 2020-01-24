import React, { Component } from 'react';
import './App.css';
import './Section.css';

import react from './logo/react.png';
import css3 from './logo/css3.png';
import html5 from './logo/html5.png';
import javascript from './logo/javascript.png';
import github from './logo/github.png';

export default () => (
	<section className="App-section-others">
		<div className="Section-main-div">
			<h6 className="title-font-en">About Me</h6>
			
			<h4 className="title-font-ko">Name</h4>
			<h className="font-ko">장수인</h>
			
			<br></br><br></br><br></br><br></br>
			<h4 className="title-font-ko">Education</h4>
			<h className="font-ko">서울여자대학교 정보보호학과 전공</h>
			
			<br></br><br></br><br></br><br></br>
			<h4 className="title-font-ko">Skill</h4>
			<div className="skill-div">
				<img src={react} className="About-img"/><br></br>
				<h className="font-ko">React</h>
			</div>
			<div className="skill-div">
				<img src={css3} className="About-img"/><br></br>
				<h className="font-ko">css3</h>
			</div>
		</div>
	</section>
)