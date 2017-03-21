import React from 'react';
import '../navbar/Navbar.css';
import {Link } from 'react-router';
import UGC from './../../public/UGC.png';

class Header extends React.Component {

	render(){
		return(
			<div className="header">
				<div className="back">
					<div className="infoPratique">
						<div className="logo">
						    <Link href="/" className="logotexte"><img className="logoT" src={UGC} alt="logo"/></Link>
					    </div>
				 
						<h1> L UNIQUE UGC DE MUMBAI</h1>
					</div>
				</div>
		</div>
	    )

	}
}

export default Header;
