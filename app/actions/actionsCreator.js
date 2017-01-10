import { browserHistory } from 'react-router'

export const changePath = (myPath) => {
    return (dispatch) => {
        if(myPath=='albums')
          dispatch(updatePage(2));
        else if(myPath =='bio')
          dispatch(updatePage(1));
        browserHistory.push(myPath);
    }
};

//update page id
export const updatePage = (pageId)=>{
    return {
        type: "UPDATE_PAGE",
        pageId
    }
}

//update section id
export const updateSection = (sectionId)=>{
    return {
        type: "UPDATE_SECTION",
        sectionId
    }
}
