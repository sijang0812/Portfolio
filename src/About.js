import React, { Component, useRef, useEffect } from 'react';
import './App.css';
import './Section.css';

import react from './logo/react.png';
import css3 from './logo/css3.png';
import html5 from './logo/html5.png';
import javascript from './logo/javascript.png';
import github from './logo/github.png';

import jjava from './logo/jjava.png';
import c from './logo/c.png';
import linux from './logo/linux.png';
import android from './logo/android.png';
import oracle from './logo/oracle.png';
	
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
			<h4 className="title-font-ko">Skills</h4>
			<div className="skill-div">
				<img src={jjava} className="About-img"/><br></br>
				<h className="font-ko">Java</h>
			</div>
			<div className="skill-div">
				<img src={android} className="About-img"/><br></br>
				<h className="font-ko">Android Studio</h>
			</div>
			<div className="skill-div">
				<img src={oracle} className="About-img"/><br></br>
				<h className="font-ko">Oracle</h>
			</div>
			<div className="skill-div">
				<img src={javascript} className="About-img"/><br></br>
				<h className="font-ko">JavaScript</h>
			</div>
			<div className="skill-div">
				<img src={html5} className="About-img"/><br></br>
				<h className="font-ko">HTML5</h>
			</div>
			<div className="skill-div">
				<img src={css3} className="About-img"/><br></br>
				<h className="font-ko">CSS3</h>
			</div>
			<div className="skill-div">
				<img src={react} className="About-img"/><br></br>
				<h className="font-ko">React</h>
			</div>
			<div className="skill-div">
				<img src={github} className="About-img"/><br></br>
				<h className="font-ko">GitHub</h>
			</div>
			<div className="skill-div">
				<img src={linux} className="About-img"/><br></br>
				<h className="font-ko">Linux</h>
			</div>
			<div className="skill-div">
				<img src={c} className="About-img"/><br></br>
				<h className="font-ko">C</h>
			</div>
			
		</div>
	</section>
)