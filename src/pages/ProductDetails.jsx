import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style/Details.css'


function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {

                const token = localStorage.getItem('token');

                const res = await fetch(`http://localhost:3001/products/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        const fetchReviews = async () => {
            try {

                const token = localStorage.getItem('token');

                const res = await fetch(`http://localhost:3001/reviews/product/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await res.json();
                setReviews(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
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
            const res = await fetch(`http://localhost:3001/cart`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId: id,
                    quantity
                })
            });

            if (res.ok) {
                const data = await res.json();
                alert('Product added to cart');
            } else {
                throw new Error('Failed to add product to cart');
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
            alert('Failed to add product to cart');
        }
    };
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<i key={i} className="fas fa-star" style={{ color: 'gold' }}></i>);
            } else {
                stars.push(<i key={i} className="far fa-star" style={{ color: 'gold' }}></i>);
            }
        }
        return stars;
    };

    return (
        <div className="product-detail-container">
            <div className='hero-detail'>
                <h1>{product.name}</h1>
                <img src={product.imageUrl} alt={product.name} />
                <p>{product.description}</p>
                <h2 className="product-price">€{product.price}</h2>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                    max="10"
                />
                <button onClick={addToCart}>Add to Cart</button>
                <div className="reviews-container">
                    <h3>Reviews</h3>
                    {reviews.map(review => (
                        <div key={review.id} className="review">
                            <h4>{renderStars(review.rating)}</h4>
                            <p>@Franco688:"{review.comment}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;