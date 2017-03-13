import React, { Component } from 'react';
import Navbar from "../navbar/Navbar.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../footer/Footer.jsx";
//import Bande from "../Bande/Bande.jsx";


class Fidelite extends Component {
  render() {
    return (
      <div className="Fidelite">
      	<Navbar />
        <Header />
         {/*} <Bande />*/}
        <Footer />          

      </div>
    );
  }
}

export default Fidelite;