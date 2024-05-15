import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" component={ProductList} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
