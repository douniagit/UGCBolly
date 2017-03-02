import React from 'react';
import '../navbar/Navbar.css';
import { Link } from 'react-router';


class Header extends React.Component {

	render(){
		return(
			<div className="header">
				<div className="back">
					<div className="infoPratique">
						<h1> L UNIQUE UGC DE MUMBAI</h1>
					</div>
				</div>
			<div className="bande">
				<div className="steps">
					<ul>
						<li>FILMS</li>
						<li>CARTES</li>
						<li>FIDELITE</li>
						<li>BOLLY SONGS</li>
						<li>BOLLY MAG</li>
					</ul>
				</div>
				 <input type="text" name="search" placeholder="Search.."/>
			</div>
		</div>
	    )

	}
}

export default Header;
