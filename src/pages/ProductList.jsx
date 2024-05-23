import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/ProductList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    //rimangono elementi da mescolare finché non uguali a 0
    while (currentIndex !== 0) {

        // qui prendo un elemento rimanente
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // e lo scambio (random) con l'elemento corrente di pos.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const res = await fetch('http://localhost:3001/products', {
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
                const shuffledData = shuffleArray(data); //qui eseguo lo shuffle nell array.
                setProducts(shuffledData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const placeholderImage = "placeholder/image.jpg";

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="home-container-list">
            <div className="hero-banner-list">
                <div className='Plist-title'>
                    <h1>Catalogo Giochi</h1>
                    <p>...dai un occhiata!</p>
                </div>

                <div className="product-list">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <Link to={`/product/${product.id}`}>
                                <img src={product.imageUrl || placeholderImage} alt={product.name} />
                                <h3>{product.name}</h3>
                                <div className="price-and-icon">
                                    <p><i className="fas fa-euro-sign"></i> {product.price}</p>
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="detail-icon" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;
