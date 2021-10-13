import React, { useState }  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Home from '../views/home';
import Products from '../components/products/products';
import Register from '../views/register';
import Login from '../views/login';
import Category from '../components/category/category';
import IndividualProduct from '../components/individualProduct/individualProduct';
import Cart from '../components/cart/cart';
import Navigation from '../components/nav/nav';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/app.css';

const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('session') ? true : false);

    const [value, setValue] = useState();

    return (
        <Router>
            <div className='App'>
                <Navigation isLoggedIn={isAuthenticated} />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/products' exact component={Products} />
                    <Route path='/products/:category' exact component={Category} />
                    <Route path='/products/:category/:product' exact component={() => (<IndividualProduct changeValue={setValue} />)} />
                    <Route path='/cart' exact component={() => (<Cart changeValue={setValue} />)} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;