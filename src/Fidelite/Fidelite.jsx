import React, { Component } from 'react';
import Navbar from "../navbar/Navbar.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../footer/Footer.jsx";

class Fidelite extends Component {
  render() {
    return (
      <div className="Fidelite">
      	<Navbar />
        <Header />
        <Footer />          

      </div>
    );
  }
}

export default Fidelite;