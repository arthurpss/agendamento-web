import React from 'react';
import history from './history';
import {Router, Switch, Route} from 'react-router-dom';
import Main from "./pages/main";
import Agendar from "./pages/agendar";
import Agendamentos from "./pages/agendamentos";

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/agendar" component={Agendar}/>
            <Route path="/agendamentos" component={Agendamentos}/>
        </Switch>
    </Router>
);

export default Routes;