import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from "./pages/main";
import Agendar from "./pages/agendar";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/agendar?medico=:medico" component={() => <Agendar medico={"arthur"}/>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;