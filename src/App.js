import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Switch, Route, Link} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Policy from './components/Policy';

function App() {
  return (
	<div className="App">
		<Navbar/>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/about" component={About} />
			<Route path="/policy" component={Policy} />
		</Switch>
		<Footer />
	</div>
  );
}

export default App;
