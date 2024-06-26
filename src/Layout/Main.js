import React from 'react';
import Header from '../SharedPage/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPage/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;