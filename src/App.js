import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
	  	<header className="App-header">
	    	<img src={logo} className="App-logo" alt="logo" />
	      <p>
	        Edit <code>src/App.js</code> and save to reload.
	      </p>
	      <a
	      	className="App-link"
	        href="https://www.naver.com"
	        target="_blank"
	        rel="noopener noreferrer"
	      >
	      Please~~~
	   		</a>
	   	</header> //헤더
	   	
	   	<section className="App-section">
	   		<p> section 영역 </p>
	   	</section> //섹션
	   	
    </div> //앱전체
    
  );
}

export default App;
