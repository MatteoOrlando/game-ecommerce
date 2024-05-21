import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faEuroSign } from '@fortawesome/free-solid-svg-icons';

function CartComponent() {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            const token = sessionStorage.getItem('token');
            if (!token) {
                alert('Please log in to view your cart');
                return;
            }

            const res = await axios.get('http://localhost:3001/cart', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setItems(res.data);
            calculateTotal(res.data);
        };

        fetchCartItems();
    }, []);

    const calculateTotal = (items) => {
        const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        setTotalPrice(total);
    };

    const handleCheckout = async () => {
        console.log('Procedendo al checkout');

        const token = sessionStorage.getItem('token');
        if (!token) {
            alert('Please log in to proceed with checkout');
            return;
        }

        const productIds = items.map(item => item.product.id);

        try {
            const res = await fetch.post('http://localhost:3001/orders', {
                productIds,
                totalPrice
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.status === 201) {
                alert('Order placed successfully');

            }
        } catch (error) {
            console.error('Error during checkout:', error);
            alert('Checkout failed');
        }
    };

    return (
        <div>

            <div className="hero-cart-banner">
                <div className="cart-container">
                    <div className='orange-bg'>
                        <div className="cart-box">
                            <h1><FontAwesomeIcon icon={faShoppingCart} className="icon  " /></h1>
                            {items.map(item => (
                                <div key={item.id} className="cart-item">
                                    <h2>{item.product.name}</h2>
                                    <p>Quantità: {item.quantity} </p>
                                    <p>Prezzo: <FontAwesomeIcon icon={faEuroSign} /> {item.product.price}</p>
                                    <p>Totale: <FontAwesomeIcon icon={faEuroSign} /> {item.quantity * item.product.price}</p>
                                </div>
                            ))}
                            <h2 className="cart-total fs-4 ">Totale: <FontAwesomeIcon icon={faEuroSign} /> {totalPrice}</h2>
                            <button className="cart-button" onClick={handleCheckout}>Procedi</button>

                        </div>

                    </div>
                    <div className="gift-purchase">
                        <input type="checkbox" name="gift" />
                        <label htmlFor="gift">Invia come regalo.</label>
                    </div>

                </div>

                <div className="payment-methods">
                    <div className='payment-header'>
                        <span className="payment-icons">
                            <i className="fa-brands fa-paypal"></i>
                            <i className="fa-brands fa-cc-mastercard"></i>
                            <i className="fa-brands fa-cc-visa"></i>
                            <i className="fa-brands fa-cc-amex"></i>
                            <i className="fa-brands fa-cc-discover"></i>
                        </span>
                    </div>
                    <button className="payment-button card ">Paga con carta</button>
                    <i className="fa fa-credit-card" aria-hidden="true"></i>
                    <button className="payment-button paypal">Paga con Paypal</button>
                    <i className="fa fa-credit-card" aria-hidden="true"></i>
                    <div className="promotion">
                        <h5>Vuoi <strong>risparmiare?</strong> Puoi su <strong><em>GAME PORTAL</em></strong></h5>
                        <p>"Riceverai un coupon di 50 € di sconto sul tuo primo mese al momento del checkout!"</p>
                        <div className="call-to-action">
                            <p><em>Cosa aspetti?</em></p>
                            <hr className='one' /><i class="far fa-hand-point-up"></i>
                            <hr className='two' />
                            <button className="subscribe-button">ABBONATI</button>
                        </div>
                    </div>
                </div>
                <div className="account-access">
                    <p>Devi aver effettuato l'accesso per acquistare</p>
                    <button className="login-button">Accedi</button>
                    <p>Iscriviti per saperne di più sulle offerte!</p>
                </div>
                <div className='white'>
                    <div className="newsletter-section">
                        <h2>Iscriviti alla nostra newsletter!</h2>
                        <p><em>"Iscrivendoti, accetti i Termini di servizio e l'Informativa sulla privacy. È possibile annullare l'iscrizione alla newsletter in qualsiasi momento."</em></p>
                        <form>
                            <input type="email" placeholder="Inserisci la tua email" />
                            <button type="submit">Iscriviti</button>
                        </form>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default CartComponent;
