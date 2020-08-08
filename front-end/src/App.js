import React from 'react';
import Home from './pages/Home';
import SignIn from './pages//SignIn';
import SignUp from './pages//SignUp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
