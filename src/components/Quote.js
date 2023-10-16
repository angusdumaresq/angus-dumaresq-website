import '../../src/App.css'
import React, { useState, useEffect } from "react";

const Quote = () => {

    const wordsArr = [" definitely ", " absolutely ", " just ", " certainly ", " for sure "]

    const [word, setWord] = useState(wordsArr[0])

    useEffect(() => {
        const interval = setInterval(() => {
            setWord((prevWord) => {
                const index = wordsArr.indexOf(prevWord)
                const nextIndex = (index + 1) % wordsArr.length
                return wordsArr[nextIndex]
            })
        }, 2000)

        return () => clearInterval(interval)
    })

    return (
        <div className="quote container">
            <div className="flex-wrapper">
                <div className="grid-template">
                    <div className="flex-column-quote">
                        <p>
                            <span>
                                Some things<br />
                                are 
                            </span>
                            <span style={{ color: "#FFA500" }}>{word}</span>
                            <span>
                                worth<br /> 
                                creating.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote