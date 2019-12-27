import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component{
	render(){ // Always want a render function that returns something
		return ( // Example of JSX .. React allows you to write javascript-like syntax in a .js file
			// use className instead of class ... class is a reserved keyword in javascript
			// React uses JSX to modify the virtual DOM
			<div className='f1 tc'>
				<h1>Hello World</h1>
				<p>{this.props.greeting}</p>
			</div>
		);
	}
}

export default Hello // export default when we just export one thing