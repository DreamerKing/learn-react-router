/**
 * Created by DreamerKing on 2017/4/25.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router} from 'react-router'
import { renderRoutes } from 'react-router-config'
import createHistory from 'history/createBrowserHistory'
import routes from './routes';
const history = createHistory()


render((
    <Router history={history}>
        {renderRoutes(routes)}
    </Router>
), document.getElementById('root'))