import Image from '../components/images/cyclopCharacter.png'

const Work = () => {
    return (
        <div className="work container">
            <div className="title">
                I'm on the search for employment!
            </div>
            <div className="flex-wrapper">
                <div className="row">
                    <div className="column">
                        <div className="flex-text">
                            Looking for the next best thing? Lets chat! I would love to talk
                            about potential work opportunities.
                        </div>
                    </div>
                    <div className="column">
                        <div className="flex-image">
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