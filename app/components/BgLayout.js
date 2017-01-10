import React from 'react';
import classNames  from 'classnames'

const BgLayout = ({position})=>{
    const src = require('../assets/khalil.png');

    var imgClass=  classNames({
      'bgLy': true,
      'left': (position == 'left')
    });
    return (
        <div className= {imgClass} >
            <img src={src} alt="Khalil Fong"/>
        </div>

    )
};

export default BgLayout;
