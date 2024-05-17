import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className='fixed-navbar'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="/public/assets/Logo-3.webp" alt="LOGO" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/products"><strong>Prodotti</strong></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart"><strong>Carrello</strong></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/customer-service">Servizio clienti</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">Chi siamo</Link>
                            </li>
                        </ul>
                        <form className="search-form">
                            <input className="form-control" type="search" placeholder="Cerca" aria-label="Search" />
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        </form>
                        <div className="log-pos">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Accedi</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Registrati</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
