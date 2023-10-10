import '../../src/styles.css'
import Image from '../components/images/Character_2_Standing.png'
import React, { useEffect, useRef } from 'react'
import HighlightFunction from './functions/HighlightFunction'

const Welcome = () => {
  const highlightTextRefs = useRef([]);

  highlightTextRefs.current = [useRef()];

  useEffect(() => {
    const refs = highlightTextRefs.current
    HighlightFunction(refs);
  }, []);

  return (
    <div className="welcome container">
      <div className="flex-wrapper">
        <div className="row">
          <div className="double-column">
            <div className="flex-column-text">
              <p>
                Angus<br />
                Dumaresq<br />
                <span className="highlight" ref={highlightTextRefs.current[0]}>
                  A web portfolio, showing off some of the finest.
                </span>
              </p>
            </div>
          </div>
          <div className="column">
            <div className="flex-image-container">
              <img className="image" src={Image} alt="Standing Character"></img>            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome