import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultCategories = await axios('http://localhost:3001/categories');
      const resultProducts = await axios('http://localhost:3001/products');
      setCategories(resultCategories.data);
      setFeaturedProducts(resultProducts.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Game Over...Vivi l'avventura. Vai oltre.</h1>

      <div className="categories">
        <h2>Categorie</h2>
        {categories.map((category) => (
          <div key={category.id}>
            <Link to={`/products/${category.id}`}>{category.name}</Link>
          </div>
        ))}
      </div>
      <div className="featured-products">
        <h2>Prodotti in Evidenza</h2>
        {featuredProducts.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '200px', height: '100px' }}
              />
              <p>{product.name}</p>
            </Link>
            <p>Prezzo: €{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
