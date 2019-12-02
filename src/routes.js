import React from 'react';
import history from './history';
import {Router, Switch, Route} from 'react-router-dom';
import Main from "./pages/main";
import Agendar from "./pages/agendar";
import Agendamentos from "./pages/agendamentos";
import Saibamais from './pages/saibamais';
import Agservico from './pages/agendarservico';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/agendar" component={Agendar}/>
            <Route path="/agendamentos" component={Agendamentos}/>
            <Route path="/saibamais" component={Saibamais}/>
            <Route path="/agendarservico" component={Agservico}/>
        </Switch>
    </Router>
);

export default Routes;