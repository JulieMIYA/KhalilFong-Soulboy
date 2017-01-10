import { createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//import root reducers
import rootRuducer from './reducers/index'

import createLogger from 'redux-logger'

const configureStore = () => {
    const defaultState = {
        pageId: 0,
        sectionId: 0
    };
    const middlewares = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }
    const store = createStore(
        rootRuducer,
        defaultState ,
        applyMiddleware(...middlewares) // A store enhancer that applies the given middleware.
    );
    return store;
}

// if(module.hot){
//     module.hot.accept('./reducers/',()=>{
//         const nextRootReducer = require('./reducers/index').default;
//         store.replaceReducer(nextRootReducer);
//     });
// }
export default configureStore;
