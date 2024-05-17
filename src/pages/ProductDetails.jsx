import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const res = await axios.get(`http://localhost:3001/products/${id}`);
            setProduct(res.data);
        };

        const fetchReviews = async () => {
            const res = await axios.get(`http://localhost:3001/reviews/product/${id}`);
            setReviews(res.data);
        };

        fetchProductDetails();
        fetchReviews();
    }, [id]);

    const addToCart = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Please log in to add items to your cart');
            return;
        }

        try {
            const res = await axios.post(`http://localhost:3001/cart`, {
                productId: id,
                quantity
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.status === 201) {
                alert('Product added to cart');
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
            alert('Failed to add product to cart');
        }
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <h2>€{product.price}</h2>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                max="10"
            />
            <button onClick={addToCart}>Add to Cart</button>
            <div>
                <h3>Reviews</h3>
                {reviews.map(review => (
                    <div key={review.id}>
                        <h4>{review.rating} Stars</h4>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductDetails;
