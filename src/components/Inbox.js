/**
 * Created by DreamerKing on 2017/4/25.
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Message from './Message';

class Inbox extends Component {
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                <Route path="/inbox/:id" component={Message}/>
            </div>
        )
    }
}

export default Inbox;