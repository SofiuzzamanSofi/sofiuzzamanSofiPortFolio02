import React from 'react';
import About from './About';
import ContactMe from './ContactMe';
import Intro from './Intro';
import Service from './Service';

const Home = () => {
    return (
        <div className=''>
            <Intro />
            <Service />
            <About />
            <ContactMe />
        </div>
    );
};

export default Home;