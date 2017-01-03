import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import MainLayout from './MainLayout'
import Home from './Home'
import Bio from './Bio'
import Albums from './Albums'

const Root = ()=>(
    <Router history={browserHistory} >
        <Route path="/" component={ MainLayout } >
            <IndexRoute component={ Home } />
            <Route path="/bio" component={ Bio }></Route>
            <Route path="/albums" component={ Albums }></Route>
        </Route>
    </Router>
);
export default Root;