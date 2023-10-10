import '../../src/styles.css'
import React, { useEffect, useState, useRef } from 'react'
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







    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
      // Add event listener to check window size and update state
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <div className="about container">
            <div className="flex-wrapper">
                <div className="row">
                    <div className="double-column">
                        <div className="flex-column-text">
                            <p>
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
                            </p>
                        </div>
                    </div>
                    {!isSmallScreen && <div className="column"></div>}
                </div>
            </div>
        </div>
    )
}

export default About;