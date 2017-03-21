import React from 'react';
import '../navbar/Navbar.css';
import { Link } from 'react-router';
import {Sticky} from 'react-sticky';


class Bande extends React.Component {

	render(){
		return(
			<Sticky>
			<div className="bande">
				<div className="steps">
					<ul>
						<li><Link to="/">HOME</Link></li>
						<li><Link to="/films">FILMS</Link></li>
						<li><Link to="/songs">BOLLY SONGS</Link></li>
						<li><Link to="/mag">BOLLY MAG</Link></li>
					</ul>
				</div>
			</div>
			</Sticky>
	    )

	}
}

export default Bande;
