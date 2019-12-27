import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
		//const cardArray = robots.map((user, i) => {
			//return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />

			// when looping, give each item a unique key
			// without a key, if some cards get deleted, react virtual DOM won't know which one is which
			// and will have to change the entire DOM
			// BONUS: each key should be a value that doesn't change
			// or have each attribute on its own loke
			// return <Card 
			// 			key={i} 
			// 			id={robots[i].id} 
			// 			name={robots[i].name} 
			// 			email={robots[i].email} 
			// 		/>
		//}
		// outside the curley brackets, everything is just JSX .... i.e. <div>
	return (
			<div>	
			{
				robots.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email} 
						/>
					);
				})
			}
			</div>
		);
}
	// return (
	// 		<div>
	// 			{cardArray} // anything inside the curley brackets is javascript
	// 		</div>
	// 	);
//		<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
//		<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
//		<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
//		{cardArray}

export default CardList;