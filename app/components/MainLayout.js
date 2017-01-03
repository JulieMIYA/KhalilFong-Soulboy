import React from 'react';
import Figure from './Figure'

const MainLayout = ({children}) =>(
    <div className="app">
        <Figure/>
        {children}
    </div>
);
export default MainLayout
