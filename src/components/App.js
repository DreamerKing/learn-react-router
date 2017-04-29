/**
 * Created by DreamerKing on 2017/4/25.
 */
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Inbox from './Inbox';
import About from './About';

class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <Route path="/about" component={About}/>
                <Route path="/inbox" component={Inbox}/>
            </div>
        )
    }
}
export default App;