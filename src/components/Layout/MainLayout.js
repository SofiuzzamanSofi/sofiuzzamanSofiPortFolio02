import React from 'react';
import Footer from '../pages/Footer';
import Header from '../pages/Header';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className=''>
            <div className='max-w-screen-2xl mx-auto bg-slate-100 text-black dark:bg-black dark:text-white'>
                <Header />
                <div className='px-7'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;