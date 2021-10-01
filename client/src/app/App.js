import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../views/home';
import Products from '../components/products/products';
import Register from '../views/register';
import Login from '../views/login';
import Category from '../components/category/category';
import IndividualProduct from '../components/individualProduct/individualProduct';

const App = () => {
    return (
        <Router>
            <div className='App'>
                {/* <Nav /> */}
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/login' exact component={Login} />
                    {/* <Route path='/logout' exact component={Logout} /> */}
                    <Route path='/products' exact component={Products} />
                    <Route path='/products/:category' exact component={Category} />
                    <Route path='/products/:category/:product' exact component={IndividualProduct} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;