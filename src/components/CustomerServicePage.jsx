import React from 'react';
import '../style/CustomerServPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faComments } from '@fortawesome/free-solid-svg-icons';


function CustomerServicePage() {
    return (
        <div className='banner-servCustomer'>
            <div className="customer-service">
                <h1>Servizio Clienti</h1>
                <section className="faq">
                    <h2>Domande Frequenti</h2>
                    <div className="faq-item">
                        <h3><strong>Come posso modificare il mio ordine?</strong></h3>
                        <p>È possibile modificare l'ordine entro <strong>24 ore</strong> dall'acquisto, contattando all'email <strong>supportGPCustomer@email.com</strong> il nostro supporto clienti.</p>
                    </div>
                    <div className="faq-item">
                        <h3><strong>Che tipo di assistenza offrite?</strong></h3>
                        <p>Offriamo assistenza tramite <em>email</em>, <em>telefono</em> e <em>chat dal vivo</em>. I nostri operatori<strong> sono disponibili 24/7 </strong> per rispondere a tutte le tue domande.</p>
                    </div>
                </section>
                <section className="contact">
                    <h2>Contatti</h2>
                    <p>Per qualsiasi domanda o problema, <strong>non esitare a contattarci:</strong></p>
                    <ul>
                        <li><FontAwesomeIcon icon={faEnvelope} /> <strong>Email</strong>: <a href='https://www.ncsc.admin.ch/ncsc/it/home/cyberbedrohungen/fake-support.html'> supportGPcustomer@email.com</a></li>
                        <li><FontAwesomeIcon icon={faPhone} /> <strong>Telefono</strong>: 123-456-7890</li>
                        <li><FontAwesomeIcon icon={faComments} /> <strong>Chat dal Vivo</strong>: Disponibile sul nostro sito dalle 8:00 alle 22:00</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default CustomerServicePage;
