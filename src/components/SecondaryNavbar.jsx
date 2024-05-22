import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faInfoCircle, faUserCircle, faSignInAlt, faShoppingBag, faHeadset, } from '@fortawesome/free-solid-svg-icons';

function SecondaryNavbar() {
    return (
        <div className='fixed-navbar-two'>
            <nav className="navbar-two navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item-two">
                                <Link className="nav-link" to="/products">
                                    <FontAwesomeIcon icon={faShoppingBag} className="nav-icon" /> <strong>Giochi</strong>
                                </Link>
                            </li>
                            <li className="nav-item-two">
                                <Link className="nav-link" to="/cart">
                                    <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" /> <strong>Carrello</strong>
                                </Link>
                            </li>
                            <li className="nav-item-two">
                                <Link className="nav-link" to="/customer-service">
                                    <FontAwesomeIcon icon={faHeadset} className="nav-icon" /> Servizio clienti
                                </Link>
                            </li>
                            <li className="nav-item-two">
                                <Link className="nav-link" to="/about-us">
                                    <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" /> Chi siamo
                                </Link>
                            </li>
                        </ul>
                        <Link className="navbar-brand-two" to="/">
                            <img src="/public/assets/fe010635-0dff-4975-8a59-7a55b44ca422.webp" alt="LOGO" className='logo-img' />
                        </Link>
                        <div className="log-pos">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link-2" to="/login">
                                        <FontAwesomeIcon icon={faSignInAlt} className="nav-icon" /> Accedi
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link-2" to="/register">
                                        <FontAwesomeIcon icon={faUserCircle} className="nav-icon" /> Registrati
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default SecondaryNavbar;
