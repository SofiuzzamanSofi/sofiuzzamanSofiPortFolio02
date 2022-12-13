import React from 'react';
import Footer from '../pages/Footer';
import Header from '../pages/Header';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className='px-7 max-w-screen-2xl mx-auto bg-slate-50 text-black dark:bg-black dark:text-white border-x dark:border-x-gray-800'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;