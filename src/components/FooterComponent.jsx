import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle, faUserCircle, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-col">
                        <h4><strong>Game Portal®</strong></h4>
                        <ul>
                            <li><Link to="/about-me"><FontAwesomeIcon icon={faUserCircle} /> About Me</Link></li>
                            <li><Link to="/contact"><FontAwesomeIcon icon={faPhone} /> Contatti</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4><strong>Aiuto</strong></h4>
                        <ul>
                            <li><Link to="/faq"><FontAwesomeIcon icon={faQuestionCircle} /> FAQ</Link></li>
                            <li><Link to="/customer-service"><FontAwesomeIcon icon={faLock} /> Supporto Cliente</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4><strong>Legal</strong></h4>
                        <ul>
                            <li><Link to="/privacy"><i class="fas fa-user-secret"></i>Politica Privacy</Link></li>
                            <li><Link to="/terms"><i class="fas fa-stream"></i>Termini d'uso</Link></li>
                        </ul>
                    </div>
                    <div className="footer-social-col">
                        <h4><strong>Seguimi</strong></h4>
                        <ul className="footer-socials">
                            <li><a href="http://facebook.com"><FontAwesomeIcon icon={faFacebookF} className='faFacebookF-foot' /> Facebook</a></li>

                            <li><a href="http://instagram.com"><FontAwesomeIcon icon={faInstagram} className='faInstagram' /> Instagram</a></li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=Epqhcq0DCTs">
                                    <FontAwesomeIcon icon={faYoutube} className='faYoutube' /> YouTube
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <em> <strong>&copy; 2023-{new Date().getFullYear()} </strong>GAME PORTAL Tutti i diritti riservati. GAME PORTAL è un marchio registrato di GAME PORTAL.
                    <p>L'utilizzo di questo sito è soggetto ai termini di utilizzo e alla politica sulla privacy. GAME PORTAL sono marchi registrati di GAME PORTAL Inc. e <strong>non possono </strong> essere utilizzati da terzi <strong>senza autorizzazione</strong> scritta espressa.</p></em>
                <p className='mt-2 mat'>Questo sito é stato realizzato da <strong>O. M.</strong></p>
            </div>

        </footer>
    );
}

export default Footer;
