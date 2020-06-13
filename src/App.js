import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Switch, Route, Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Policy from './components/Policy';

function App() {
  return (
	<div className="App">
		<Navbar bg="light" expand="lg">
			<Navbar.Brand to="/">Home</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="/about">About Us</Nav.Link>
				<Nav.Link href="/policy">Policy</Nav.Link>
				<NavDropdown title="Services" id="basic-nav-dropdown">
				<NavDropdown.Item href="/">Action</NavDropdown.Item>
				<NavDropdown.Item href="/">Another action</NavDropdown.Item>
				<NavDropdown.Item href="/">Something</NavDropdown.Item>
				</NavDropdown>
			</Nav>
			</Navbar.Collapse>
		</Navbar>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/about" component={About} />
			<Route path="/policy" component={Policy} />
		</Switch>
	</div>
  );
}

export default App;
