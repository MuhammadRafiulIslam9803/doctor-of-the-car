import React from 'react';
import Baner from '../HomeInside/Baner';
import Services from '../HomeInside/Services/Services';
import About from '../HomeInside/About/About';

const MainHome = () => {
    return (
        <div>
            <Baner></Baner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default MainHome;