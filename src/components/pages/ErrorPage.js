import React from 'react';
import { Link } from 'react-router-dom';
import errorPage from '../assets/errorPage.png';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center min-h-screen mb-[-256px] md:mb-[-157px] bg-slate-50 text-black dark:bg-black dark:text-white'>
            <section className="container flex flex-col items-center justify-center p-5">
                <div className="max-w-md text-center">
                    <div>
                        <img src={errorPage} alt="" />
                    </div>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className=" py-6">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to="/" className="py-4 px-4 md:px-9 rounded-md border-[3px] border-primary hover:bg-primary hover:text-white">Back to homepage</Link>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;