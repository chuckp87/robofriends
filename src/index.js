import React from 'react'; // core of the package that does DOM manipulation
import ReactDOM from 'react-dom'; // react for DOM (websites)
import './index.css'; // allows adding css for individual components
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(
	<App />
	, document.getElementById('root'));
serviceWorker.unregister();

export default App;