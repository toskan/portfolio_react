import React from 'react';
import './Reset.css';
import './App.css';
import Header from './Header';
import Router from './Router';

class App extends React.Component {
	render() {
		return (
			<div className="main">
				<Header />
				<Router />
			</div>
		);
	}
}

export default App;
