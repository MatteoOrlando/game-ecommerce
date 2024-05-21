import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'

function SecondaryNavbar() {
    return (
        <div className='fixed-navbar'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">Chi siamo</Link>
                            </li> <li className="nav-item">
                                <Link className="nav-link" to="/customer-service">Servizio clienti</Link>
                            </li>
                        </ul>
                        <Link className="navbar-brand" to="/">
                            <img src="" alt="LOGO" style={{ width: '100px', height: '55px' }} />
                        </Link>
                        <div className="log-pos">
                            <ul className="navbar-nav ms-5">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Accedi</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link ms-3 " to="/register">Registrati</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
            </nav >
        </div >
    );
}

export default SecondaryNavbar;
