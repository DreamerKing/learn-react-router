/**
 * Created by DreamerKing on 2017/4/25.
 */
import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

class App extends Component {
    render() {
        let {route} = this.props;
        return (
            <div>
                <h1>App</h1>
                {renderRoutes(route.routes)}
            </div>
        )
    }
}
export default App;