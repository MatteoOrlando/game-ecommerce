import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import SecondaryNavbar from './components/SecondaryNavbar';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './components/CartComponent';
import CustomerServicePage from './components/CustomerServicePage';
import ChiSonoPage from './pages/ChiSonoPage';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/FooterComponent';

function App() {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    return token != null;
  };

  const location = useLocation();
  const isAuthPage =
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/customer-service' ||
    location.pathname === '/about-me';

  return (
    <>
      {isAuthPage ? <SecondaryNavbar /> : <NavbarComponent />}
      <Routes>
        <Route
          path="/"
          element={isAuthenticated() ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-me" element={<ChiSonoPage />} />
        <Route path="/customer-service" element={<CustomerServicePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
