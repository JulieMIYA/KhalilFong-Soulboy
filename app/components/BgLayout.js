import React from 'react';

const BgLayout = ({position})=>{
    const src = require('../assets/khalil.png');
    const imgPosition = (position=='left')?' left':'';
    const cn = 'bgLy'+ imgPosition;
    return (
        <div className= {cn} >
            <img src={src} alt="Khalil Fong"/>
        </div>

    )
};

export default BgLayout;
