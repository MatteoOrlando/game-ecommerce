import React, { useEffect, useState } from 'react';
import '../style/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faEuroSign } from '@fortawesome/free-solid-svg-icons';

function CartComponent() {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Please log in to view your cart');
                return;
            }

            try {
                const res = await fetch('http://localhost:3001/cart', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (res.ok) {
                    const data = await res.json();
                    setItems(data);
                    calculateTotal(data);
                } else {
                    throw new Error('Failed to fetch cart items');
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const calculateTotal = (items) => {
        const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        setTotalPrice(total);
    };

    const handleCheckout = async () => {
        console.log('Procedendo al checkout');

        const token = localStorage.getItem('token');
        if (!token) {
            alert('Please log in to proceed with checkout');
            return;
        }

        const productIds = items.map(item => item.product.id);

        try {
            const res = await fetch('http://localhost:3001/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ productIds, totalPrice })
            });

            if (res.status === 201) {
                alert('Order placed successfully');
            } else {
                throw new Error('Failed to place order');
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            alert('Checkout failed');
        }
    };

    const handleRemoveItem = (productId) => {
        const updatedItems = items.filter(item => item.product.id !== productId);
        setItems(updatedItems);
        calculateTotal(updatedItems);
    };

    const placeholderImage = "placeholder/image.jpg";

    return (
        <div>
            <div className="hero-cart-banner">
                <div className="cart-container">
                    <div className='orange-bg'>
                        <div className="cart-box">
                            <h1><FontAwesomeIcon icon={faShoppingCart} className="icon " /></h1>
                            {items.map(item => (
                                <div key={item.id} className="product-card-two">
                                    <img className='cart-imgCart'
                                        src={item.product.imageUrl || placeholderImage}
                                        alt={item.product.name}
                                        onError={(e) => e.target.src = placeholderImage}
                                    />
                                    <h2 className='cart-detail'>{item.product.name}</h2>
                                    <p className='cart-detail-1'>Quantità: {item.quantity} </p>
                                    <p className='cart-detail-1'>Prezzo: <FontAwesomeIcon icon={faEuroSign} />  {item.product.price}</p>
                                    <button onClick={() => handleRemoveItem(item.product.id)} className="remove-item-button">X</button>
                                </div>
                            ))}
                            <h2 className="cart-total fs-3 ">Totale: <FontAwesomeIcon icon={faEuroSign} /> {totalPrice}</h2>
                            <button className="cart-button" onClick={handleCheckout}>Procedi</button>
                        </div>
                    </div>
                    <div className="gift-purchase">
                        <input type="checkbox" name="gift" />
                        <label htmlFor="gift">Invia come regalo</label>
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
                    <p><strong><em>Devi aver effettuato l'accesso per gli acquisti</em></strong></p>
                    <button className="login-button">Accedi</button>
                    <p>Iscriviti per saperne di più sulle nostre offerte!</p>
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
        </div>
    );
}

export default CartComponent;
