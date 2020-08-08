import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages//LoginPage';
import RegisterPage from './pages//RegisterPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
