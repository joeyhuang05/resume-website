import './header.css'
import React, { useState, useEffect } from 'react'
import JoeyLogo from '../../assets/joeynetflixlogo.png'
import LeftNav from '../leftnav/leftnav'
import { useNavigate } from 'react-router-dom'

import JoeyIcon from '../../assets/joeymouthopen.jpg'
import FriendsIcon from '../../assets/friends-and-family.jpg'
import RecruiterIcon from '../../assets/recruiter.jpg'
import JoeyNav from '../../assets/london-1440x709.jpg'
import FriendsNav from '../../assets/poconos-1440x709.jpg'
import RecruiterNav from '../../assets/grad-1440x709.jpg'

function Header({ name, icon, navBackground }) {
    const navigate = useNavigate()
    const handleBackHome = () => {
        navigate('/')
    }

    const leftNavItems = [
        { text: 'About Me', modal: 'about-me-modal' },
        { text: 'Projects', modal: 'projects-modal' },
        { text: 'Socials', modal: 'socials-modal' },
        { text: 'Experiences', modal: 'experiences-modal' },
        { text: 'Contact Me', modal: 'contact-me-modal' },
    ]

    /* new 
    const profiles = [
        { name: "JOEY", icon: JoeyIcon, navBackground: JoeyNav },
        { name: "FRIENDS", icon: FriendsIcon, navBackground: FriendsNav },
        { name: "RECRUITER", icon: RecruiterIcon, navBackground: RecruiterNav },
    ]

    const [selectedProfile, setSelectedProfile] = useState(() => {
        return JSON.parse(localStorage.getItem('selectedProfile')) || profiles[0]
    })

    useEffect(() => {
        localStorage.setItem('selectedProfile', JSON.stringify(selectedProfile))
    }, [selectedProfile])

    const remainingProfiles = profiles.filter(
        (profile) => profile.name !== selectedProfile.name
    )

    const handleProfileChange = (profile) => {
        setSelectedProfile(profile)
        navigate('/nav', { state: profile })
    }
    
    */


    return (
        <div className='header-container'>
            <a onClick={handleBackHome()} className='joey-logo'>
                <img src={JoeyLogo} alt='JOEY HUANG'></img>
            </a>
            <ul className='navigation'>
                <LeftNav items={leftNavItems} />
                <div className='right-nav'>
                    <div className='dropdown-menu'>
                        <span className='profile-name'>{name}</span>
                        <button className='pushable menu'>
                            <img className='profile-icon' src={icon} />
                            <span className='caret'></span>
                        </button>
                    </div>
                
                </div>
            </ul>
        </div>
    )
}

export default Header

// <button className='dropdown-menu'>
// <img id='profile-icon' src={selectedProfile.icon} />
// <span className='caret'>{selectedProfile.name}</span>
// </button>
// <div className='dropdown-content'>
// {remainingProfiles.map((profile) => (
//     <button
//         key={profile.name}
//         onClick={() => handleProfileChange(profile)}
//         className='dropdown-item'
//     >
//         <img src={profile.icon} />
//         <span>{profile.name}</span>
//     </button>
// ))}
// </div>