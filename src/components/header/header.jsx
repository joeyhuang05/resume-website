import './header.css'
import React from 'react'
import JoeyLogo from '../../assets/joeynetflixlogo.png'
import LeftNav from '../leftnav/leftnav'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const backHome = () => {
        navigate('/')
    }

    const leftNavItems = [
        { text: 'About Me', modal: 'about-me-modal' },
        { text: 'Projects', modal: 'projects-modal' },
        { text: 'Socials', modal: 'socials-modal' },
        { text: 'Experiences', modal: 'experiences-modal' },
        { text: 'Contact Me', modal: 'contact-me-modal' },
    ]

    return (
        <div className='header-container'>
            <a onClick={backHome} className='joey-logo'>
                <img src={JoeyLogo} alt='JOEY HUANG'></img>
            </a>
            <ul className='navigation'>
                <LeftNav items={leftNavItems} />
            </ul>
        </div>
    )
}

// declaring Header and calling it in NavPage causes errors

// <div className='left-nav'>
//     {popouts.map((buttonText, index) => (
//         <li className='popOuts' key={index}>
//             <Popout text={buttonText} />
//         </li>
//     ))}
// </div>

export default Header