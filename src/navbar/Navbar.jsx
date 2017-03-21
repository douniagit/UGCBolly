import React from 'react';
import './Navbar.css';
import {Link } from 'react-router';
import UGC from './../../public/UGC.png';
import {Sticky} from 'react-sticky';
import Bande from '../Bande/Bande.jsx';


class Navbar extends React.Component {

	render(){
		return(
			<div className="header">
			<Sticky>
			{/*	<div className="navbar">
						<div className="menu">
							<h2>MON COMPTE </h2>
							<div className="wrapper">
								<input type="text" name="mail" placeholder="Email"/>
								<input type="text" name="psw" placeholder="Mot de passe"/>
								<button>ok</button>
							</div>
							<div className="login">
								<p>Mot de passe oublié?</p>
								<p>Pas de compte? Inscrivez-vous</p>
							</div>
						</div>
				</div>*/}
				<Bande />
			</Sticky>
		</div>
	    )

	}
}

export default Navbar;
