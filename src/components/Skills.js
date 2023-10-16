import '../../src/App.css'
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
            <div id="h1" style={{"textAlign": 'center'}}>
                Skills
            </div>
            <ul className="flex-container">
                <li className="flex-item-box fade-in-animation" ref={fadeInRefs.current[0]}>
                    <div className="flex-item-content">
                        <div className="image-container">
                            <img className="image" src={springSVG} alt="SpringSVG"></img>
                        </div>
                        <h1>Springboot</h1>
                        <p>
                            With Java being one of my favourite languages, I have excelled in leveraging the power of the 
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
                        <p>
                            Having used React to build some of the javascript functions for this site. I understand the idea and 
                            useOfReactHooks(() =&gt; &#123; <br />
                                console.log("I Love React") <br />
                            &#125;)
                        </p>
                    </div>
                </li>
                <li className="flex-item-box fade-in-animation" ref={fadeInRefs.current[2]}>
                    <div className="flex-item-content">
                        <div className="image-container">
                            <img className="image" src={versionControlSVG} alt="SpringSVG"></img>
                        </div>
                        <h1>Git</h1>
                        <p>
                            Throughout university and personal projects, I have used the Git version control 
                            system and Github to share and collaborate with others. I'm also pretty familiar 
                            with Git Bash too.
                        </p>
                    </div>
                </li>
                <li className="flex-item-box fade-in-animation" ref={fadeInRefs.current[3]}>
                    <div className="flex-item-content">
                        <div className="image-container">
                            <img className="image" src={bookSVG} alt="SpringSVG"></img>
                        </div>
                        <h1>Learning</h1>
                        <p>
                            I love new and cool things! From new frameworks to new design patterns and even a few 
                            funny jokes. A SQL query walks into a bar, walks up to two tables and asks, 
                            "Can I join you?"
                        </p>
                    </div>
                </li>
                <li className="flex-item-box fade-in-animation" ref={fadeInRefs.current[4]}>
                    <div className="flex-item-content">
                        <div className="image-container">
                            <img className="image" src={codingSVG} alt="SpringSVG"></img>
                        </div>
                        <h1>OOP</h1>
                        <p>I have been programming for a while now. And with that, I have developed a solid foundation 
                            in OOP. This has allowed me to learn new languages and skills without having to relearn 
                            everything.
                        </p>
                    </div>
                </li>
                <li className="flex-item-box fade-in-animation" ref={fadeInRefs.current[5]}>
                    <div className="flex-item-content">
                        <div className="image-container">
                                <img className="image" src={fullstackSVG} alt="SpringSVG"></img>
                        </div>
                        <h1>Fullstack</h1>
                        <p>Whilst I'm certainly no expert. I have built CRUD applications that integrate 
                            frontend apps with back-end apps. These connect to a database and perform 
                            operations on it from the frontend.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Skills