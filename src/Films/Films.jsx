import React, { Component } from 'react';
import Navbar from "../navbar/Navbar.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../footer/Footer.jsx";

class Films extends Component {
  render() {
    return (
      <div className="Films">
         <Navbar />
        <Header />
        <Footer />      

      </div>
    );
  }
}

export default Films;