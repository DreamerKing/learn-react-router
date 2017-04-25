/**
 * Created by DreamerKing on 2017/4/25.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about"/>About</li>
                    <li><Link to="/inbox"/>Inbox</li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
export default App;