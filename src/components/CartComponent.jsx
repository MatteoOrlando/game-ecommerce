import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CartComponent() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            // Supponendo di avere un endpoint per recuperare il carrello
            const res = await axios.get('http://localhost:3001/cart');
            setItems(res.data);
        };

        fetchCartItems();
    }, []);

    const handleCheckout = () => {
        console.log('Procedendo al checkout');
        // Qui implementeresti la logica per il checkout
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {items.map(item => (
                <div key={item.id}>
                    <h2>{item.product.name}</h2>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price per item: €{item.product.price}</p>
                    <p>Total: €{item.quantity * item.product.price}</p>
                </div>
            ))}
            <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    );
}

export default CartComponent;
