/**
 * Created by DreamerKing on 2017/4/29.
 */
import App from '../components/App'
import Home from '../components/Home'
import Inbox from '../components/Inbox'
import About from '../components/About'

const routes = [
    { component: App,
        routes: [
            { path: '/',
                exact: true,
                component: Home
            },
            { path: '/inbox/:id',
                component: Inbox,
                routes: [
                    { path: '/inbox/:message/about',
                        component: About
                    }
                ]
            }
        ]
    }
]

export default routes;