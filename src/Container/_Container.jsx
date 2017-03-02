import React from 'react';
import Grid from './../Grid/Grid.jsx';
import Grid2 from './../Grid2/Grid2.jsx';
import Grid3 from './../Grid3/Grid3.jsx';


const styles = {
  defaultContainer : {
    display:"flex",
    justifyContent:"flex-end",
    border:"2px solid red",
    margin: 'auto',
    width:'80%'
  }
}

export default class Container extends React.Component {

  render() {

    return (
      <div className='row' style={this.props.backgroundStyle}>

        <div
          className='col-xs-12 col-sm-12 col-md-12 col-lg-12'
          style={{ ...styles.defaultContainer, ...this.props.containerStyle }}>
          {this.props.children}
        <Grid />
        <Grid2 />
        <Grid3 />
        </div>
        
      </div>
    );
  }
}