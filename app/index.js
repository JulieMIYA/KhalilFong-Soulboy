import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, browserHistory, IndexRoute} from 'react-router'

import MainLayout from './components/MainLayout'
import HomeLayout from './components/HomeLayout'
import BioLayout from './components/BioLayout'
import AlbumsLayout from './components/AlbumsLayout'

//import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store'

import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const Root = ()=>{
    return (
      <Provider store ={store} >
        <Router history={ history } >
            <Route path="/" component={ MainLayout } >
                <IndexRoute component={ HomeLayout } />
                <Route path="/albums" component={ AlbumsLayout } ></Route>
                <Route path="/bio" component={ BioLayout } ></Route>
            </Route>
        </Router>
      </Provider>
    );
}

ReactDOM.render(
    <Root/>, document.getElementById('app')
);
