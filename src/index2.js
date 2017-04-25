/**
 * Created by DreamerKing on 2017/4/25.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import About from './components/About';
import Inbox from './components/Inbox';
import Message from './components/Message';

render((
    <Router>
        <Route path="/" component={App}>
           <Route path="about" component={About}/>
            <Route path="inbox" component={Inbox}>
                <Route path="message/:id" component={Message}/>
            </Route>
        </Route>
    </Router>
), document.getElementById("root"));