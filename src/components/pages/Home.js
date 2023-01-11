import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <>
            <Intro />
            <Skills />
            <Projects />
            <AboutMe />
            <ContactMe />
        </>
    );
};

export default Home;