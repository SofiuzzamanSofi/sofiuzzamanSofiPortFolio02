import React from 'react';
import About from './About';
import Intro from './Intro';
import Service from './Service';

const Home = () => {
    return (
        <div className=''>
            <Intro />
            <Service />
            <About />
        </div>
    );
};

export default Home;