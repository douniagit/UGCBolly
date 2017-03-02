import React from 'react';
import './Navbar.css';
import {Link } from 'react-router';
import UGC from './../../public/UGC.png';

//import logo from "./../../public/b3.png";
class Navbar extends React.Component {

	render(){
		return(
			<div className="header">
				<div className="navbar">
					<div className="logo">
					    <Link href="/" className="logotexte"><img className="logoT" src={UGC} alt="logo"/></Link>
				    </div>
				    
						<div className="menu">
							<h2>MON COMPTE </h2>
							<div className="wrapper">
								<input type="text" name="mail" placeholder="Email"/>
								<input type="text" name="psw" placeholder="Mot de passe"/>
								<button>ok</button>
							</div>
								<p>Mot de passe oublié?</p>
								<p>Pas de compte? Inscrivez-vous</p>
						</div>
						
					
				</div>
		</div>
	    )

	}
}

export default Navbar;
