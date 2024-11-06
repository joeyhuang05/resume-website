function profilePage() {
    return (
        <div className="centered-container">
            <div className="list-profiles">
                <h1 class="homebar fade-in">Who's watching?</h1>

                <ul className="profile-select fade-in">
                    <li className="profile">
                        <div>
                            <a className="profile-link" tabindex="0" href="home.html" onclick="saveProfile('Joey', 'joeymouthopen.jpg', 'london-1440x709.jpg')">
                                <div className="avatar-wrapper">
                                    <div className="profile-icon" style="background-image: url(joeymouthopen.jpg)">
                                    </div>
                                </div>
                                <span className="profile-name">JOEY</span>
                            </a>
                        </div>
                    </li>
                    <li className="profile">
                        <div>
                            <a className="profile-link" tabindex="0" href="home.html" onclick="saveProfile('Friends', 'friends-and-family.jpg', 'poconos-1440x709.jpg')">
                                <div className="avatar-wrapper">
                                    <div className="profile-icon" style="background-image: url(friends-and-family.jpg)">
                                    </div>
                                </div>
                                <span className="profile-name">FRIENDS</span>
                            </a>
                        </div>
                    </li>
                    <li className="profile">
                        <div>
                            <a className="profile-link" tabindex="0" href="home.html" onclick="saveProfile('Recruiter', 'recruiter.jpg', 'grad-1440x709.jpg')">
                                <div className="avatar-wrapper">
                                    <div className="profile-icon" style="background-image: url(recruiter.jpg)">
                                    </div>
                                </div>
                                <span className="profile-name">RECRUITER</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <span className="exit fade-in">
                <a aria-label="Exit" className="exit-button" href="#" onclick="randomSE()">i don't belong here...</a>
            </span>
        </div>
    )
}

export default profilePage