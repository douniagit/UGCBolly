import React, { Component } from 'react';
import Navbar from "../navbar/Navbar.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../footer/Footer.jsx";


class Song extends Component {
  render() {
    return (
      <div className="Song">
        
        <Navbar />
        <Header />
        <Footer />
        

      </div>
    );
  }
}

export default Song;