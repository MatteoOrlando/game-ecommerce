import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/ProductList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function shuffleArray(product) {
    let currentIndex = product.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [product[currentIndex], product[randomIndex]] = [
            product[randomIndex], product[currentIndex]];
    }
    return product;
}

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch('http://localhost:3001/products', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await res.json();
                const shuffledData = shuffleArray(data);
                setProducts(shuffledData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const placeholderImage = "placeholder/image.jpg";

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="home-container-list">
            <div className="hero-banner-list">
                <div className='Plist-title'>
                    <h1>Catalogo Giochi</h1>
                    <p>...dai un occhiata!</p>
                </div>
                <div className="pagination">
                    {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
                        <button key={number + 1} onClick={() => paginate(number + 1)}><em></em>
                            {number + 1}
                        </button>
                    ))}
                </div>
                <div className="product-list">
                    {currentProducts.map(product => (
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
                    ))}<div className="pagination mt-5 ">
                        {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
                            <button key={number + 1} onClick={() => paginate(number + 1)}><em></em>
                                {number + 1}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductList;
