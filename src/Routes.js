import React from 'react';
import { Router, Route} from 'react-router';
import App from './App.js';
import Films from './Films/Films.jsx';
import Fidelite from './Fidelite/Fidelite.jsx';
import Song from './Song/Song.jsx';
import Mag from './Mag/Mag.jsx';
import Cartes from './Cartes/Cartes.jsx';


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/films" component={Films}/>
    <Route path="/fidelites" component={Fidelite}/>
    <Route path="/songs" component={Song}/>
    <Route path="/mag" component={Mag}/>
    <Route path="/cartes" component={Cartes}/>
  </Router>
);


export default Routes;
