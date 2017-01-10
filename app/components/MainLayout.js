import React from 'react';
import { connect } from 'react-redux'
import BgLayout from './BgLayout'


let MainLayout = ({children, pageId, sectionId }) =>{
    if(pageId == 1 && sectionId > 0 )
      return (
        <div>
            { children }
        </div>
      );
    else if(pageId == 1 && sectionId == 0)
      return (
            <div>
                <BgLayout position = 'left'/>
                { children }
            </div>
      )
    else
      return (
            <div>
              <BgLayout/>
              { children }
            </div>
      )
};

function mapStateToProps(state){
    return {
        pageId: state.pageId,
        sectionId: state.sectionId
    }
}
MainLayout = connect(mapStateToProps)(MainLayout);

export default MainLayout
