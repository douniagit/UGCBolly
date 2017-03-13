import React, { Component } from 'react';
import Container from "./Container/_Container.jsx";
import {StickyContainer} from 'react-sticky';
import Navbar from "./navbar/Navbar.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import Bande from "./Bande/Bande.jsx";
// import Test from "./test.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
      <StickyContainer>
      	<Navbar />
        <Header/>
        <Bande/>
        <Container/>
        <Footer/>
      </StickyContainer>
      </div>
    );
  }
}

export default App;
