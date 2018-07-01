import React from 'react';
import ReactDOM from 'react-dom';
//app style
import './css/index.css';
//app
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
