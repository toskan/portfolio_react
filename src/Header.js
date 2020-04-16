import React from 'react';
import HeaderLeft from './HeaderLeft';
import Menu from './Menu';

class Header extends React.Component {
	render() {
		return (
			<div className="header-div">
				<HeaderLeft />
				<Menu />
			</div>
		);
	}
}

export default Header;
