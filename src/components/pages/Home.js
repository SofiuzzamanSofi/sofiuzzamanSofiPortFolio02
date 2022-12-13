import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Intro from './Intro';
import Service from './Service';
import Skills from './Skills';

const Home = () => {
    return (
        <div className=''>
            <Intro />
            <Skills />
            <Service />
            <AboutMe />
            <ContactMe />
        </div>
    );
};

export default Home;