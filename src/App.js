import React, { Component } from 'react';
import Container from "./Container/_Container.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./footer/Footer.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container/>
        <Footer/>

      </div>
    );
  }
}

export default App;
