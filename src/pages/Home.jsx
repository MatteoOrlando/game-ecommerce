import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

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
    <div className="home-container">
      <div className="hero-banner">
        <h1>Benvenuto su Game Over: Il Tuo Negozio di Giochi Definitivo!</h1>
        <p>Scopri le ultime novità e approfitta di sconti imperdibili su giochi per tutte le piattaforme.</p>
        <ul>
          <li>Giochi per PC, console e mobile a prezzi imbattibili</li>
          <li>Nuove uscite e classici intramontabili ogni mese</li>
          <li>Offerte esclusive per i membri con vantaggi unici</li>
          <li>Contribuisci al bene comune: il 10% del tuo acquisto va in beneficenza</li>
          <li>Nessun impegno: puoi saltare un mese o annullare quando vuoi</li>
        </ul>
        <button className="join-now-button">Unisciti a Game Over!</button>
        <div className="hero-image">
          <img src="/path/to/your-image.jpg" alt="Game Over" />
        </div>
      </div>

      <div className="categories-section">
        <h2>Categorie</h2>
        <div className="categories-container">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <Link to={`/products/${category.id}`}>
                <div className="category-image-wrapper">
                  <img src={category.image || '/path/to/default-image.jpg'} alt={category.name} />
                </div>
                <div className="category-name">{category.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="featured-products-section">
        <h2>Prodotti in Evidenza</h2>
        <div className="products-container">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">€{product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
