import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
	return (
		<div className="hamburger">
			<h2 className="menu">menu</h2>
			<ul className="menu-list" id="shrunken-bar-menu">
				<li className="menu-list-item">
					<Link to="/">home&nbsp;&nbsp;</Link>
				</li>
				<li className="menu-list-item">
					<Link to="/work">work&nbsp;&nbsp;</Link>
				</li>
				<li className="menu-list-item">
					<Link to="/contact">contact</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
