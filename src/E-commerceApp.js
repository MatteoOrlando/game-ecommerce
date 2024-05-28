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
import { CartProvider } from './providers/CartProvider';
import CustomerServicePage from './components/CustomerServicePage';
import AboutMe from './pages/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './components/FooterComponent';

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
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/customer-service" element={<CustomerServicePage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  );
}
