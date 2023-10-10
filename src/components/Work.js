import Image from '../components/images/cyclopCharacter.png'

const Work = () => {
    return (
        <div className="work container">
            <div className="flex-wrapper">
                <div className="row">
                    <div className="double-column">
                        <div className="flex-column-text">
                            <p>
                                <h1>Looking a new developer?</h1>
                                <span>
                                    Are you looking for a new, bright and ambitious developer? You have 
                                    come to the right place! I'm seeking an opportunity to work as a 
                                    software developer, ideally in back-end or full-stack development. 
                                    Although, I am open to exploring new skills and opportunities in 
                                    other development areas.<br /><br />

                                    I would love to have a chat! Feel free to contact me on LinkedIn 
                                    or email at angusdq@gmail.com 
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="flex-image-container">
                            <div className="image">
                                <img className="image" src={Image} alt="Testamur"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work