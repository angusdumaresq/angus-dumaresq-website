import '../../src/styles.css'
import React, { useEffect, useRef } from 'react'
import TextAnitmationFunction from './functions/TextAnimationFunction';
import springSVG from '../components/images/springSVG.svg';
import reactSVG from '../components/images/reactSVG.svg';
import versionControlSVG from '../components/images/versionControlSVG.svg';
import bookSVG from '../components/images/bookSVG.svg';
import codingSVG from '../components/images/codingSVG.svg';
import fullstackSVG from '../components/images/fullstackSVG.svg';


const Skills = () => {
    const fadeInRefs = useRef([]);

    fadeInRefs.current = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),];

    useEffect(() => {
        const refs = fadeInRefs.current
        TextAnitmationFunction(refs)
    }, []);

    return (
        <div className="skills container">
            <h1 style={{"textAlign": 'center'}}>
                Skills
            </h1>
            <ul className="flex-container">
                <li className="flex-item-box fade-in-animation" ref={fadeInRefs.current[0]}>
                    <div className="flex-item-content">
                        <div className="image-container">
                            <img className="image" src={springSVG} alt="SpringSVG"></img>
                        </div>
                        <h1>Springboot</h1>
                        <p>With Java being one of my favourite languages, I have excelled in leveraging the power of the 
                            Spring framework with experience in using modules like Spring MVC and Spring Security.
                        </p>
                    </div>
                </li>
                <li className="flex-item-box fade-in-animation" ref={fadeInRefs.current[1]}>
                    <div className="flex-item-content">
                        <div className="image-container">
                            <img className="image" src={reactSVG} alt="SpringSVG"></img>
                        </div>
                        <h1>React</h1>
                        <p>With Java being one of my favourite languages, I have excelled in leveraging the power of the 
                            Spring framework with experience in using modules like Spring MVC and Spring Security.
                        </p>
                    </div>
                </li>
                <li className="flex-item-box fade-in-animation" ref={fadeInRefs.current[2]}>
                    <div className="flex-item-content">
                        <div className="image-container">
                            <img className="image" src={versionControlSVG} alt="SpringSVG"></img>
                        </div>
                        <h1>Version Control</h1>
                        <p>With Java being one of my favourite languages, I have excelled in leveraging the power of the 
                            Spring framework with experience in using modules like Spring MVC and Spring Security.
                        </p>
                    </div>
                </li>
                <li className="flex-item-box fade-in-animation" ref={fadeInRefs.current[3]}>
                    <div className="flex-item-content">
                        <div className="image-container">
                            <img className="image" src={bookSVG} alt="SpringSVG"></img>
                        </div>
                        <h1>Quick Learner</h1>
                        <p>With Java being one of my favourite languages, I have excelled in leveraging the power of the 
                            Spring framework with experience in using modules like Spring MVC and Spring Security.
                        </p>
                    </div>
                </li>
                <li className="flex-item-box fade-in-animation" ref={fadeInRefs.current[4]}>
                    <div className="flex-item-content">
                        <div className="image-container">
                            <img className="image" src={codingSVG} alt="SpringSVG"></img>
                        </div>
                        <h1>OOP</h1>
                        <p>With Java being one of my favourite languages, I have excelled in leveraging the power of the 
                            Spring framework with experience in using modules like Spring MVC and Spring Security.
                        </p>
                    </div>
                </li>
                <li className="flex-item-box fade-in-animation" ref={fadeInRefs.current[5]}>
                    <div className="flex-item-content">
                        <div className="image-container">
                                <img className="image" src={fullstackSVG} alt="SpringSVG"></img>
                        </div>
                        <h1>Fullstack</h1>
                        <p>With Java being one of my favourite languages, I have excelled in leveraging the power of the 
                            Spring framework with experience in using modules like Spring MVC and Spring Security.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Skills