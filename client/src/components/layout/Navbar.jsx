import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<div className="navbar-fixed">
		<nav className="z-depth-0">
			<div className="nav-wrapper white">
				<Link to="/">
					Work
				</Link>
				<Link to="/about">
					About
				</Link>
				<Link to="/login">
					[Log In]
				</Link>
			</div>
		</nav>
	</div>
);

export default Navbar;
