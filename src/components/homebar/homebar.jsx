import './homebar.css'
import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

import JoeyIcon from '../../assets/joeymouthopen.jpg'
import FriendsIcon from '../../assets/friends-and-family.jpg'
import RecruiterIcon from '../../assets/recruiter.jpg'
import JoeyNav from '../../assets/london-1440x709.jpg'
import FriendsNav from '../../assets/poconos-1440x709.jpg'
import RecruiterNav from '../../assets/grad-1440x709.jpg'

function randomSE() {
    const urls = [
        "https://www.accoona.com",
        "https://www.ask.com",
        "https://www.baidu.com",
        "https://www.biglobe.ne.jp",
        "https://www.bing.com",
        "https://search.brave.com",
        "https://www.daum.net",
        "https://www.dogpile.com",
        "https://www.duckduckgo.com",
        "https://www.ecosia.org",
        "https://www.excite.com",
        "https://fireball.com",
        "https://www.gigablastsearchengine.com",
        "https://www.google.com",
        "https://www.lycos.com",
        "https://www.metacrawler.com",
        "https://www.mojeek.com",
        "https://www.naver.com",
        "https://www.petalsearchengine.com",
        "https://www.qwant.com",
        "https://www.sogou.com",
        "https://www.startpage.com",
        "https://swisscows.com",
        "https://www.webcrawler.com",
        "https://www.yahoo.com",
        "https://www.yandex.com",
        "https://www.youdao.com",
        "https://bharatsearch.weebly.com"
    ];

    const randomUrl = urls[Math.floor(Math.random() * urls.length)]
    window.location = randomUrl
}

function Profile({ name, icon }) {
    return (
        <a className="profile-link" tabIndex="0">
            <div className="avatar-wrapper">
                <div className="profile-icon" style={{ backgroundImage: `url(${icon})` }}>
                </div>
            </div>
            <span className="profile-name">{name}</span>
        </a>
    )
}

function Homebar() {
    const navigate = useNavigate()
    
    const profiles = [
        { name: "JOEY", icon: JoeyIcon, navBackground: JoeyNav },
        { name: "FRIENDS", icon: FriendsIcon, navBackground: FriendsNav },
        { name: "RECRUITER", icon: RecruiterIcon, navBackground: RecruiterNav }
    ]

    const [ selectedProfile, setSelectedProfile ] = useState(() => {
        return JSON.parse(localStorage.getItem('selectedProfile')) || profiles[0]
    })

    useEffect(() => {
        localStorage.setItem('selectedProfile', JSON.stringify(selectedProfile))
    }, [selectedProfile])
    
    const handleRedirect = (profile) => {
        setSelectedProfile(profile)
        navigate('/nav', { state: profile })
    }

    return (
        <div className='centered-container'>
            <div className='list-profiles'>
                <h1 className='header fade-in'>Who's watching?</h1>

                <ul className='profile-select fade-in'>
                    {profiles.map((profile, index) => (
                        <li className="profile" key={index} onClick={() => handleRedirect(profile)}>
                            <Profile name={profile.name} icon={profile.icon} />
                        </li>
                    ))}
                </ul>
            </div>
            <span className='exit fade-in'>
                <a aria-label='Exit' className='exit-button' onClick={randomSE}>i don't belong here...</a>
            </span>
        </div>
    )
}

export default Homebar