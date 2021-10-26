import React, {Component} from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Vista1 from './pages/Vista1';
import Vista2 from './pages/Vista2';
import Inicio from './pages/Inicio';

class App extends Component{
    render() {
        return( 
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Inicio}/>
                    <Route exact path='/vista1' component={Vista1}/>
                    <Route exact path='/vista2' component={Vista2}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;