import React from 'react';

// new REACT thing called 'children' ... every component has a 'children' attribute

const Scroll = (props) => {
	 return (
	 	<div style={{ overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
	 		{props.children}
	 	</div>
	 );
};

export default Scroll;