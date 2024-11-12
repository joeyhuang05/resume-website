import './homebar.css'
import JoeyIcon from '../../assets/joeymouthopen.jpg'
import FriendsIcon from '../../assets/friends-and-family.jpg'
import RecruiterIcon from '../../assets/recruiter.jpg'

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
    return randomUrl;
}

function Homebar() {
    return (
        <body>
            <div className='centered container'>
                <div className='list-profiles'>
                    <h1 className='homebar fade-in'>Who's watching?</h1>

                    <ul className='profile-select fade-in'>
                        <li className="profile">
                            <div>
                                <a className="profile-link" tabindex="0">
                                    <div className="avatar-wrapper">
                                        <div className="profile-icon">
                                            <img src={JoeyIcon}></img>
                                        </div>
                                    </div>
                                    <span className="profile-name">JOEY</span>
                                </a>
                            </div>
                        </li>
                        <li className="profile">
                            <div>
                                <a className="profile-link" tabindex="0">
                                    <div className="avatar-wrapper">
                                        <div className="profile-icon">
                                            <img src={FriendsIcon}></img>
                                        </div>
                                    </div>
                                    <span className="profile-name">FRIENDS</span>
                                </a>
                            </div>
                        </li>
                        <li claclassNamess="profile">
                            <div>
                                <a className="profile-link" tabindex="0">
                                    <div className="avatar-wrapper">
                                        <div className="profile-icon">
                                            <img src={RecruiterIcon}></img>
                                        </div>
                                    </div>
                                    <span className="profile-name">RECRUITER</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <span className='exit fade-in'>
                    <a aria-label='Exit' className='exit-button' href='#' onClick={randomSE}>i don't belong here...</a>
                </span>
            </div>
        </body>
    )
}

export default Homebar