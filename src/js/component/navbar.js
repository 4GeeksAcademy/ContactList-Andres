import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/" className="navbar-brand mb-0 h1">Contact Manager</Link>
				<div className="ml-auto">
					<Link to="/ContactForm">
						<button className="btn btn-primary">Add New Contact</button>
					</Link>
					<Link to="/ContactList" className="ml-2">
						<button className="btn btn-secondary">Contact List</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

