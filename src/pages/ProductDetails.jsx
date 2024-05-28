import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../providers/CartProvider';
import '../style/Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaystation, faXbox, faSteam, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

function ProductDetails() {
    const { id } = useParams();
    const { items, setItems } = useCart();
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
                const newItem = await res.json();
                alert('Product added to cart');
                setItems([...items, newItem]);
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
                <div className='orange-2'>
                    <h1 id='h1-detail'>
                        {product.name}
                        <span id="icon-info">

                            <FontAwesomeIcon id="Ps" icon={faPlaystation} title="PlayStation" />
                            <FontAwesomeIcon icon={faXbox} id='Xbox' title="Xbox" />
                            <FontAwesomeIcon icon={faSteam} id='steam' title="Steam" />
                            <FontAwesomeIcon id="pc" icon={faWindows} title="PC" />

                            <span id='multi'>
                                <FontAwesomeIcon className='pad-multi' icon={faUsers} title="Multiplayer" />
                                <FontAwesomeIcon icon={faUser} title="Singleplayer" /></span>
                        </span>
                    </h1>
                    <div className='card-box'>
                        <img src={product.imageUrl} alt={product.name} />
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className='sub-detail'>
                    <div className='left-column'>
                        <h2 className="product-price">€{product.price}</h2>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            min="1"
                            max="10"
                        />
                        <button onClick={addToCart}>
                            <FontAwesomeIcon icon={faPlus} className='faPlus-2' />
                        </button>
                    </div>
                    <div className="reviews-container">
                        <h3>Reviews</h3>
                        {reviews.map(review => (
                            <div key={review.id} className="review">
                                <h4>{renderStars(review.rating)}</h4>
                                <p>
                                    <i className="fas fa-user-circle"></i> Franco788:"{review.comment}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
