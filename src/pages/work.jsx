import React from 'react';
import Hero from '../components/hero/Hero';
import Portfolio from '../components/portfolio/Portfolio';

const Work = () => {
    return (
        <div>
            <Hero heading="My Work" message="This is some of my recent work traveling the world." />
            <Portfolio />
        </div>
    );
}

export default Work;
