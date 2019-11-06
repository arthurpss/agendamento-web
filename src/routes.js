import React from 'react';
import history from './history';
import {Router, Switch, Route} from 'react-router-dom';
import Main from "./pages/main";
import Agendar from "./pages/agendar";

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/agendar" component={Agendar}/>
        </Switch>
    </Router>
);

export default Routes;