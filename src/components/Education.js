import '../../src/styles.css'
import Image from '../components/images/Testamur.jpg'
import TextAnitmationFunction from './functions/TextAnimationFunction';
import HighlightFunction from './functions/HighlightFunction'
import React, { useEffect, useRef } from 'react'

const Education = () => {
    const fadeInRefs = useRef([]);
    const highlightTextRefs = useRef([]);

    fadeInRefs.current = [useRef(null), useRef(null), useRef(null),];
    highlightTextRefs.current = [useRef(null), useRef(null), useRef(null),];
  
    useEffect(() => {
        const fadeRefs = fadeInRefs.current;
        const highlightRefs = highlightTextRefs.current

        TextAnitmationFunction(fadeRefs)
        HighlightFunction(highlightRefs)
    }, []);


    return (  
        <div className="education container">
            <div className="flex-wrapper">
                <div className="grid-template">
                    <div className="flex-column-text">
                        <div>
                            <p id="h1">Education</p>
                            <span>
                                I recently completed my studies, earning a&nbsp;
                            </span>
                            <span ref={highlightTextRefs.current[0]}> 
                                bachelor's degree in Computer Science 
                            </span>
                            <span>
                                &nbsp;with majors in&nbsp;
                            </span>           
                            <span ref={highlightTextRefs.current[1]}> 
                                Software Engineering and Cybersecurity from the University of Wollongong. 
                            </span> 
                            <span>
                                &nbsp;My time at university was a transformative journey, both academically and personally. During this period, I forged 
                                lifelong friendships, engaged with talented peers and academics, and gained invaluable life lessons 
                                that broadened my perspective. <br /><br />
                            </span>
                            <span>
                                My educational background has played a pivotal role in driving my&nbsp; 
                            </span>
                            <span ref={highlightTextRefs.current[2]}>
                                passion for software development.
                            </span>
                            <span>
                                &nbsp;I have developed proficiency in a range of areas including algorithms, data structures, database management, 
                                networking, software methodology, version control systems, and cybersecurity principles.
                            </span>
                        </div>
                    </div>     
                    <div className="flex-image-container">
                        <img className="image" src={Image} alt="Testumar"></img>            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education