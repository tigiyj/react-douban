import React from 'react';
import ReactDOM from 'react-dom';
import './public/css/bootstrap.min.css';
import './public/css/index.css';
import * as serviceWorker from './serviceWorker';
import Routers from './Routers';

ReactDOM.render((
    <Routers/>),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
