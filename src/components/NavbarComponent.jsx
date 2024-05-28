import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingCart, faInfoCircle, faUserCircle, faSignInAlt, faShoppingBag, faHeadset, faSearch, faBars
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from '../assets/logo gameportal.svg';
import { useCart } from '../providers/CartProvider';

const games = [
    { id: "001", title: "Rocket League" },
    { id: "002", title: "Grand Theft Auto V" },
    { id: "003", title: "Call of Duty: Modern Warfare" },
    { id: "004", title: "The Witcher 3: Wild Hunt" },
    { id: "005", title: "Streets of Rage 4" },
    { id: "006", title: "StarCraft II" },
    { id: "007", title: "Portal 2" },
    { id: "008", title: "Minecraft" },
    { id: "009", title: "Super Mario Bros. 3" },
    { id: "010", title: "Final Fantasy VII" },
    // Aggiungi qui altri giochi con lo stesso schema
];

function findProductIdByTerm(searchTerm) {
    const game = games.find(g => g.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return game ? game.id : null;
}

function NavbarComponent() {
    const { items } = useCart();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const productId = findProductIdByTerm(searchTerm);
        if (productId) {
            navigate(`/product/${productId}`);
        } else {
            alert('Game not found');
        }
    };

    return (
        <div className='fixed-navbar'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} className="navbar-toggler-icon" />
                    </button>
                    <Link className="navbar-brand" to="/">
                        <Logo id='logo-nav' alt="GamePortal Logo" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">
                                    <FontAwesomeIcon icon={faShoppingBag} className="nav-icon" /> <strong> Giochi</strong>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
                                    {items.length > 0 && <span className="cart-badge">{items.length}</span>}
                                    <strong> Carrello</strong>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/customer-service">
                                    <FontAwesomeIcon icon={faHeadset} className="nav-icon" /> Assistenza
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-me">
                                    <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" /> About Me
                                </Link>
                            </li>
                        </ul>
                        <form className="search-form-2" onSubmit={handleSearchSubmit}>
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Cerca"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />

                        </form>
                        <div className="log-pos">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        <FontAwesomeIcon icon={faSignInAlt} className="nav-icon" /> Accedi
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
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

export default NavbarComponent;
