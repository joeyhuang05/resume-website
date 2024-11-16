import './homebar.css'
import React from "react"
import JoeyIcon from '../../assets/joeymouthopen.jpg'
import FriendsIcon from '../../assets/friends-and-family.jpg'
import RecruiterIcon from '../../assets/recruiter.jpg'

// font formatting is wack when you click into site and go back
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

    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    window.location = randomUrl;
}

function Profile({ name, image }) {
    return (
        <a className="profile-link" tabindex="0">
            <div className="avatar-wrapper">
                <div className="profile-icon" style={{ backgroundImage: `url(${image})` }}>
                </div>
            </div>
            <span class="profile-name">{name}</span>
        </a>
    )
}

function Homebar() {
    const profiles = [
        { name: "JOEY", image: JoeyIcon },
        { name: "FRIENDS", image: FriendsIcon },
        { name: "RECRUITER", image: RecruiterIcon }
    ]

    return (
        <div className='centered-container'>
            <div className='list-profiles'>
                <h1 className='header fade-in'>Who's watching?</h1>

                <ul className='profile-select fade-in'>
                    {profiles.map((profile, index) => (
                        <li className="profile" key={index}>
                            <Profile name={profile.name} image={profile.image} />
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