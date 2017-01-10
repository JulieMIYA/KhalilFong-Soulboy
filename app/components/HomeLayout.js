import React from 'react';
import { changePath } from '../actions/actionsCreator'
import { connect } from 'react-redux'
import { Link } from 'react-router';

let HomeLayout = ({changePath}) => (
    <div className="homeLy">
        <a className="link-right" onClick ={()=>changePath('albums')}>
            Albums
        </a>
        <h2 className='title'>Soulboy</h2>
        <a className="link-left" onClick ={()=>changePath('bio')}>
            Bio
        </a>
    </div>
);

HomeLayout = connect(null, { changePath })(HomeLayout);

export default HomeLayout;
