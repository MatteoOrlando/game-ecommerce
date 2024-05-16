import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/path/to/your/logo.png" alt="Game Over Logo" style={{ height: '30px' }} />
                    Game Over
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Prodotti</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Carrello</Link>
                        </li>
                    </ul>
                    <form className="d-flex me-auto">
                        <input className="form-control me-2" type="search" placeholder="Cerca giochi" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Cerca</button>
                    </form>
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
        </nav>
    );
}

export default Navbar;
