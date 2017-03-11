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
						<li><Link to="/">HOME</Link></li>
						<li><Link to="/films">FILMS</Link></li>
						<li><Link to="/cartes">CARTES</Link></li>
						<li><Link to="/fidelite">FIDELITE</Link></li>
						<li><Link to="/songs">BOLLY SONGS</Link></li>
						<li><Link to="/mag">BOLLY MAG</Link></li>
					</ul>
				</div>
				 <input type="text" name="search" placeholder="Search.."/>
			</div>
		</div>
	    )

	}
}

export default Header;
