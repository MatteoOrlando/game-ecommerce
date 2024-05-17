import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/public/assets/Logo-3.webp" alt="" />

                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"><strong>Prodotti</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register"><strong>Carrello</strong></Link>
                        </li>
                    </ul>
                    <form className="search-form d-flex mx-auto">
                        <input className="form-control me-2" type="search" placeholder="Cerca giochi" aria-label="Search" />
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </form>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Accedi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Registrati</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
