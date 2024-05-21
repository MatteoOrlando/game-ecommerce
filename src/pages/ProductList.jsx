import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ProductList.css';

function ProductList({ products }) {
    // URL dell'immagine placeholder che verrà usata se il prodotto non ha un'immagine specifica
    const placeholderImage = "placeholder/image.jpg"; // Cambia con il percorso della tua immagine placeholder

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
