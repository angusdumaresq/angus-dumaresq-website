import Image from '../components/images/cyclopCharacter.png'
import React, { useEffect, useRef } from 'react';
import HighlightFunction from './functions/HighlightFunction';

const Work = () => {
    const highlightTextRefs = useRef([]);
    highlightTextRefs.current = [useRef(null), useRef(null), useRef(null),];
  
    useEffect(() => {
        const highlightRefs = highlightTextRefs.current
        HighlightFunction(highlightRefs)
    }, []);

    return (
        <div className="work container">
            <div className="flex-wrapper">
                <div className="grid-template">
                    <div className="flex-column-text">
                        <p>
                            <h1>Looking for a new developer?</h1>
                            <span>
                                <span>
                                    Are you looking for a&nbsp; 
                                </span>
                                <span ref={highlightTextRefs.current[0]}>
                                    new, bright and ambitious developer?
                                </span>
                                <span>
                                &nbsp;You have come to the right place! I'm seeking an opportunity to&nbsp;
                                </span>
                                <span ref={highlightTextRefs.current[1]}>
                                    work as a software developer
                                </span>
                                <span>
                                    , ideally in back-end or full-stack development. Although,&nbsp;
                                </span>
                                <span ref={highlightTextRefs.current[2]}>
                                    I am open to exploring new skills and opportunities 
                                </span>
                                <span>
                                    &nbsp;in other development areas.<br /><br />

                                    I would love to have a chat! Feel free to contact me on LinkedIn 
                                    or email at angusdq@gmail.com 
                                </span>
                            </span>
                        </p>
                    </div>
                    <div className="flex-image-container">
                        <div className="image">
                            <img className="image" src={Image} alt="Testamur"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work