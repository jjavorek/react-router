import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './Home';
import About from './About';


import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
                <div>
                    <App> 
                        <button> Click Me </button>
                    </App>

                    <App> 
                        <h1>something funny</h1>
                    </App>

                </div>
                , document.getElementById('root'));
registerServiceWorker();

/*
ReactDOM.render(<Router history={browserHistory}>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                </Router>, document.getElementById('root'));        */        

