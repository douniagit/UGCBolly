import React from 'react';
import "./grid2.css";
import {Sticky} from 'react-sticky';

class Grid2 extends React.Component {
  render() {
    return (
      <div className="Grid2">
      	<Sticky>
          <img src="./offre_generique_UGCPlus.gif" alt="ugc"/>
          <img src="./ugcReseau.png" alt="rezo"/> 
        </Sticky>
      </div>
    );
  }
}

export default Grid2;