/**
 * Created by DreamerKing on 2017/4/25.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import { renderRoutes } from 'react-router-config';

class Inbox extends Component {
    render() {
        let { route } = this.props
        return (
            <div>
                <h2>Inbox</h2>
                <a href="/inbox/about">About</a>
                {renderRoutes(route.routes)}
            </div>
        )
    }
}

export default Inbox;