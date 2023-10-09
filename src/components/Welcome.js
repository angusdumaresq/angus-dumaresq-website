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
        <div className="grid-container">
          <div className="grid-item-title-1">
            Angus Dumaresq
          </div>
          <div className="grid-item-text">
            <span>
              <span className="highlight" ref={highlightTextRefs.current[0]}>
                A web portfolio, showing off some of the finest.
              </span>
            </span>
          </div>
          <div className="grid-item-image-container">
                  <img className="image" src={Image} alt="Standing Character"></img>
            </div>
        </div>
      </div>
  )
}

export default Welcome