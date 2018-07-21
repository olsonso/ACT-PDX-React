import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/style.css';
import registerServiceWorker from './registerServiceWorker';

//(app) is a class not instance
//React.render(App);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
