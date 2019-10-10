import React from 'react';
import './styles.css';

const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/" className="navbar-brand">Sistema Agendamento</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

                <li className="nav-item">
                    <a href={/agendar/} className="nav-link">Agendar</a>
                </li>

            </ul>
        </div>

    </nav>
);

export default Navbar;