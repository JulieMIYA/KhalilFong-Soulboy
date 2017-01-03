import React from 'react';

const Figure = ()=>{
    const src = require('../assets/khalil.png');
    return (
        <div className="bg-container">
            <img src={src} alt="Khalil Fong"/>
        </div>

    )
};

export default Figure;