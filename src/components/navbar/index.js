import React from 'react';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-brand">Navbar</button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <button className="nav-link">Home <span className="sr-only">(current)</span></button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Features</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Pricing</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link disabled" tabIndex="-1" aria-disabled="true">Disabled</button>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;