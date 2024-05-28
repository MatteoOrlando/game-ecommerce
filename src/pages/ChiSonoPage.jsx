import React from 'react';
import '../style/ChiSono.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function ChiSonoPage() {
    return (
        <div className="chi-sono-container">
            <h1>Chi Sono</h1>
            <p>Questa pagina sará dedicata a condividere il mio percorso professionale, i miei progetti e le competenze acquisite nel tempo...</p>
            <p>...e non vedo l'ora di riempirla!</p>
            <div className="social-links">
                <a href="http://linkedin.com/in/yourprofile" className="linkedin-link">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                <a href="http://github.com/yourusername" className="github-link">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
            </div>
        </div>
    );
}

export default ChiSonoPage;
