import '../../src/styles.css'
import React, { useEffect, useRef } from 'react'
import TextAnitmationFunction from './functions/TextAnimationFunction';

const About = () => {
    const fadeInRefs = useRef([]);

    fadeInRefs.current = [useRef(null), useRef(null),];

    useEffect(() => {
        const refs = fadeInRefs.current
        TextAnitmationFunction(refs)
    }, []);

    return (
        <div className="about">
            <div className="grid-container">
                <div className="grid-item-title-1">
                    Some things
                </div>
                <div className="grid-item-title-2">
                    are worth
                </div>
                <div className="grid-item-title-3">
                    creating.
                </div>
                <div ref={fadeInRefs.current[0]} className="grid-item-about-title fade-in-animation">
                    Who am I?
                </div>
                <div ref={fadeInRefs.current[1]} className="grid-item-about-text fade-in-animation">
                    My name is Angus Dumaresq, a graduate computer science student ready to embark on my professional career. 
                    My enthusiasm for creative thinking and problem-solving has fueled my passion for software development. 
                    Driven by a commitment to excellence, I am a natural communicator and highly punctual, thriving both as a 
                    team player and as an independent achiever. Please take a moment to explore my website, built using Next.js 
                    13 and Tailwind, or connect with me on GitHub and LinkedIn using the links in the top right.
                </div>
            </div>
        </div>
    )
}

export default About;