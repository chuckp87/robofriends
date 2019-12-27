import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

// In React, STATE, is an object that describes the application
// PROPS are things that come from STATE
// const state = {
// 	robots: robots,
// 	searchField: ''
// }

// const App = () => {
// 	return (
// 		<div className='tc'>
// 			<h1>RoboFriends</h1>
// 			<SearchBox />
// 			<CardList robots={robots}/>
// 		</div>
// 	);
// }

// Components that have such things as state and life-cycle hooks are called 'CONTAINERS'
// We can't user a pure function with them because technically they aren't pure; they have state, etc.
// CONTAINERS pass down state to components.

// REACT lifecycle hooks
// MOUNTING -- The start of the App -- component gets mounted into the document with the id of 'root'
// checks for the presence of the following in order
// 
// 	constructor()
// 	componentWillMount()
//  render()
//	componentDidMount()
// 
// UPDATING -- when a component changes
//	componentWillReceiveProps()
//	shouldComponentUpdate()
//	componentWillUpdate()
//	render()
//	componentDidUpdate()
//
// UNMOUNTING -- when a component is removed from a page
//	componentWillUnmount()
//

// Component class always calls render function that returns something.
// super() always has to be called before 'this' can be referenced
// This is a SMART component because it has 'state'
// SMART components have the class syntax below
class App extends Component {
		// 	this.state = {
		// 	robots: robots,
		// 	searchfield: ''
		// }

// robots start with an empty array until it is filled
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}

		console.log('constructor');
	}

	componentDidMount() {
		// fetch is a method on the Window object
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
		//this.setState({robots: robots});
		console.log('componentDidMount');
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value}); // Use setState to change a state value
	}

	render() {
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter( robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		console.log('render'); 
		// Everytime state changes, render gets called .. virtual DOM notices the change and re-renders the page

		return !robots.length ?

			<h1>Loading</h1>

		: (
			<div className='tc'>
				<h1 className='f2'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>	
					</ErrorBoundry>
				</Scroll>
			</div>
		  );

	}
}

export default App;