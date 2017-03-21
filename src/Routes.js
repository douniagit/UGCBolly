import React from 'react';
import { Router, Route} from 'react-router';
import App from './App.js';
import Films from './Films/Films.jsx';
import Song from './Song/Song.jsx';
import Mag from './Mag/Mag.jsx';



const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/films" component={Films}/>
    <Route path="/songs" component={Song}/>
    <Route path="/mag" component={Mag}/>
  </Router>
);


export default Routes;
