import React, { Component } from 'react';

import './App.css';

import { Button, Form, FormGroup, label, Input } from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';
import Navbar from './components/Navbar';

class App extends Component {
	render() {
		// function to opening url
		const openInNewTab = (url) => {
			const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
			if (newWindow) newWindow.opener = null
		}
	
		return (
			
			<Form className="login-form">
				<h1>
					<span className="font-weight-bold">MyAnswers.com</span>
				</h1>
				<h2 className="text-center">Welcome</h2>
				<FormGroup>
					<div>
						<label>Email</label>
					</div>
					<input type="email" placeholder="Email" />
				</FormGroup>
				<br />

				<FormGroup>
					<div>
						<label>Password</label>
					</div>
					<input type="password" placeholder="Password" />
				</FormGroup>
				<br />

				{/* <button className = "btn-lg btn-dark btn-block">Log in </button> */}
				<button type="button"  className="btn btn-secondary">
					Log in
				</button>
				<div className="text-center pt-3">Or continue with your social account</div>
				<FacebookLoginButton onClick={() => openInNewTab('https://www.facebook.com/')} className="mt-3 mb-3" />
				<div className="text-center">
					<a href="/signup">Sign up</a>
					<span className="p-2">|</span>
					<a href="/forgot-password">Forgot Password</a>
				</div>
			</Form>
		);
	}
}

export default App;
