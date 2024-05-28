import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css'

function Home() {

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };

        const resCategories = await fetch('http://localhost:3001/categories', {
          method: 'GET',
          headers: headers
        });

        const resProducts = await fetch('http://localhost:3001/products', {
          method: 'GET',
          headers: headers
        });

        if (!resCategories.ok || !resProducts.ok) {
          throw new Error('Network response was not ok');
        }

        const dataCategories = await resCategories.json();
        const dataProducts = await resProducts.json();

        const shuffledProducts = dataProducts.sort(() => 0.5 - Math.random());
        const selectedProducts = shuffledProducts.slice(0, 6);


        setFeaturedProducts(selectedProducts);
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
        <div className='brand-container'>
        </div>
        <div className='h1-container'>
          <h1>Benvenuto su Game Portal</h1>
          <p><em>Scopri il nostro catalogo e approfitta di sconti imperdibili su giochi per tutte le piattaforme.</em></p>
        </div>
        <div className='Ul-container'>
          <ul>
            <li>Giochi per PC, console e mobile a <strong className='golden'>prezzi imbattibili</strong ></li>
            <li>Nuove uscite e <em>classici intramontabili</em> <strong className='golden'>ogni mese</strong></li>
            <li><strong className='golden' >Offerte esclusive</strong> per i membri con vantaggi <em>unici</em></li>
            <li>Contribuisci al <strong className='golden'>bene comune</strong>: il <em>10%</em> del tuo acquisto va in <strong className='golden'>beneficenza</strong></li>
            <li><strong className='golden'>Nessun impegno</strong>: puoi saltare un mese o <em>annullare</em> quando vuoi</li>
          </ul>
        </div>
        <a href='http://localhost:3000/register' className="join-now-button"><i className="fas fa-user-plus"></i>Unisciti a Game Portal!</a>
        <div className="hero-image">
          <img src="/" alt="" />
        </div>
      </div>


      {/* ----implementazione futura (categorie)----


  const [categories, setCategories] = useState([]);
  setCategories(dataCategories);
      

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
        </div>*/}

      <div className="featured-products-section">
        <div className='sub-h2'>  <h2 className='sub-h2'>Prodotti in Evidenza</h2>
          <p><em>"Esplora nuovi mondi, affronta sfide epiche. La tua prossima avventura ti attende." </em></p></div>

        <div className="products-container">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card-home">
              <Link to={`/product/${product.id}`}>
                <img className='product-image' src={product.imageUrl} alt={product.name} />
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