import './styles.css'
import { useState, useEffect } from 'react'
import githubSVG from '../components/images/githubSVG.svg'
import linkedInSVG from '../components/images/linkedInSVG.svg'

const Header = () => {

    const [openedLinkedIn, setOpenedLinkedIn] = useState(false)
    const [openedGitHub, setOpenedGithub] = useState(false)



    const handleClickLinkedIn = () => {
      setOpenedLinkedIn(true);
    }

    const handleClickGitHub = () => {
      setOpenedGithub(true);
    }


    useEffect(() => {
      if(openedLinkedIn) {
        window.open('https://www.linkedin.com/in/angus-dumaresq-512b98233/')
        setOpenedLinkedIn(false)
      }
    }, [openedLinkedIn])

    useEffect(() => {
      if(openedGitHub) {
        window.open('https://github.com/angusdumaresq')
        setOpenedGithub(false)
      }
    }, [openedGitHub])

    return (
        <div className="header">
          <div className="header-block">
              <button onClick={handleClickLinkedIn} className="buttons">
                <img src={linkedInSVG} alt="LinkedIn" className="icon" />
              </button>
              <button onClick={handleClickGitHub} className="buttons">
                <img src={githubSVG} alt="LinkedIn" className="icon" />
              </button>
          </div>
        </div>
    )
} 
export default Header