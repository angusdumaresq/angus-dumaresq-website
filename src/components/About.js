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
        <div className="about container">
            <div className="flex-wrapper">
                <div className="row">
                    <div className="double-column">
                        <div className="flex-column-quote">
                            Some things<br />
                            are worth<br />
                            creating.
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="double-column">
                        <div className="flex-column-text">
                            <span>
                                <h1>Who am I?</h1>
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
                    <div className="column"></div>
                </div>
            </div>
        </div>
    )
}

export default About;