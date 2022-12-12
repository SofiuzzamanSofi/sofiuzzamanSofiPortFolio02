import React from 'react';
import Footer from '../pages/Footer';
import Header from '../pages/Header';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;