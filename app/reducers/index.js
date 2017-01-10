import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


const pageId = (state = 0, action)=>{
    switch (action.type) {
        case "UPDATE_PAGE" :
            return action.pageId;
        default:
            return state;
    }
}


const sectionId = (state = 0, action)=>{
    switch (action.type) {
        case "UPDATE_PAGE" :
          return 0;
        case "UPDATE_SECTION" :
            return action.sectionId;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    pageId,
    sectionId,
    routing: routerReducer
});
export default rootReducer;
