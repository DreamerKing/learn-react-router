/**
 * Created by DreamerKing on 2017/4/25.
 */
import React from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import App from './components/App';
import Inbox from './components/Inbox';


render((
    <Router>
        <Switch>
            <Route path="/" component={App}/>
            <Route path="/inbox" component={Inbox}/>
        </Switch>
    </Router>
), document.getElementById('root'))