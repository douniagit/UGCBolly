import React from 'react';
import './Footer.css';


class Footer extends React.Component {

	render(){
		return(
			<div className="footer">

				<div className="infog">
				    <p> Adresse
				    </p>
				</div>				
				<div className="CGA">
					<ul>
						<li>Groupe UGC</li>
						<li>Studio UGC</li>
						<li>Cartes et Fidelité</li>
						<li>Conditions générales</li>
						<li>Mentions légales - Cookies</li>
						<li>Charte des Spectateurs</li>
						<li>Aide</li>
						<li>Contact</li>
					</ul>
				</div>	
			</div>

	    )

	}
}

export default Footer;
