import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import LoginRegister from './pages/LoginRegister';
import Wishlist from './pages/Wishlist';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={ProductListing} />
                <Route path="/product/:id" component={ProductDetails} />
                <Route path="/cart" component={ShoppingCart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/login" component={LoginRegister} />
                <Route path="/wishlist" component={Wishlist} />
            </Switch>
        </Router>
    );
};

export default App;
