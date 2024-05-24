import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './components/CartComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import Navbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import CustomerServicePage from './components/CustomerServicePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  const isAuthenticated = () => {
    const token = sessionStorage.getItem('token');
    console.log('Token:', token);
    return token != null;
  };

  const location = useLocation();
  const isAuthPage =
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/customer-service';

  return (
    <>
      {isAuthPage ? <SecondaryNavbar /> : <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated() ? <Home /> : <Navigate replace to="/login" />
          }
        />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
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
