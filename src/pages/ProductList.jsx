import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/ProductList.css';

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
                setProducts(data);
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
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image || placeholderImage} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>€{product.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
