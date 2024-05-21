import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/Home.css'

function Home() {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultCategories = await axios.get('http://localhost:3001/categories');
        const resultProducts = await axios.get('http://localhost:3001/products');
        setCategories(resultCategories.data);
        setFeaturedProducts(resultProducts.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;


  return (
    <div className="home-container">
      <div className="hero-banner">
        <h1>Benvenuto su Game Portal: Il Tuo Negozio di Giochi Definitivo!</h1>
        <p>Scopri le ultime novità e approfitta di sconti imperdibili su giochi per tutte le piattaforme.</p>
        <ul>
          <li>Giochi per PC, console e mobile a <strong>prezzi imbattibili</strong></li>
          <li>Nuove uscite e classici intramontabili <strong>ogni mese</strong></li>
          <li><strong>Offerte esclusive</strong> per i membri con vantaggi unici</li>
          <li>Contribuisci al <strong>bene comune</strong>: il 10% del tuo acquisto va in <strong>beneficenza</strong></li>
          <li><strong>Nessun impegno</strong>: puoi saltare un mese o annullare quando vuoi</li>
        </ul>
        <button className="join-now-button">Unisciti a Game Portal!</button>
        <div className="hero-image">
          <img src="/public/assets/Logo-3.webp" alt="Game Over" />
        </div>
      </div>

      <div className="categories-section">
        <h2>Categorie</h2>
        <div className="categories-container">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <Link to={`/products/${category.id}`}>
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