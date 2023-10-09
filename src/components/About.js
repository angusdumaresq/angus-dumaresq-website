import '../../src/styles.css'
import React, { useEffect, useRef } from 'react'
import TextAnitmationFunction from './functions/TextAnimationFunction';
import HighlightFunction from './functions/HighlightFunction'


const About = () => {
    const fadeInRefs = useRef([]);
    const highlightTextRefs = useRef([]);

    fadeInRefs.current = [useRef(null), useRef(null),];
    highlightTextRefs.current = [useRef(null), useRef(null), useRef(null),];
  
    useEffect(() => {
        const fadeRefs = fadeInRefs.current;
        const highlightRefs = highlightTextRefs.current

        TextAnitmationFunction(fadeRefs)
        HighlightFunction(highlightRefs)
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
                    <span>
                        My name is Angus Dumaresq,&nbsp;
                        <span ref={highlightTextRefs.current[0]}>
                            a graduate computer science student
                        </span> 
                        &nbsp;ready to embark on my professional career. 
                        My enthusiasm for creative thinking and problem-solving has fueled my passion for software development.&nbsp;
                        <span ref={highlightTextRefs.current[1]}>
                            Driven by a commitment to excellence
                        </span> 
                        , I am a natural communicator and highly punctual,&nbsp;
                        <span ref={highlightTextRefs.current[2]}>
                            thriving both as a team player and as an independent achiever.
                        </span> 
                        &nbsp;Please take a moment to explore my website, built using React, 
                        or connect with me on GitHub and LinkedIn.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About;