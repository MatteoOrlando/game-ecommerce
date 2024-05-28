import React from 'react';
import '../style/AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function ChiSonoPage() {
    return (
        <div className="chi-sono-container">
            <h1>About Me</h1>
            <p>Questa pagina sará dedicata per la condivisione del mio percorso professionale, i miei progetti e le competenze acquisite nel tempo...</p>
            <p>...non vedo l'ora di riempirla!</p>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/matteo-orlando-571422299/" className="linkedin-link">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                <a href="https://github.com/MatteoOrlando" className="github-link">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
            </div>
            <div className='Wip'>
            </div>
        </div>
    );
}

export default ChiSonoPage;
