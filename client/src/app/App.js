import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Nav />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/logout' exact component={Logout} />
                    <Route path='/products' exact component={Products} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;