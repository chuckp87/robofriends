import React from 'react'; // core of the package that does DOM manipulation
import ReactDOM from 'react-dom'; // react for DOM (websites)
import './index.css'; // allows adding css for individual components
import App from './App';
//import Hello from './Hello'
import CardList from './CardList'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {robots} from './robots'; // robots is not declared as default so the brackets are required

//ReactDOM.render(<App />, document.getElementById('root'));
// React allows you to pass property values to Hello.js
//ReactDOM.render(<Hello greeting = {'Hello' + 'React Ninja'}/>, document.getElementById('root'));
//ReactDOM.render(<Card />, document.getElementById('root'));
ReactDOM.render( 
	<CardList robots={robots}/>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
