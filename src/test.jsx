import React from 'react';


const styles = {
  defaultContainer : {
    backgroundColor:"blue",
    position:"sticky",
    width:'100%',
    height:"50px"
  }
}
class test extends React.Component {

	render(){
		return(
			<div className="test">
			<div style={{...styles.defaultContainer}}>
			{this.props.children}
				<h1>hghjhgj</h1>
			</div>
		</div>
	    )

	}
}

export default test;