function profilePage() {
    return (
        <div class="centered-container">
            <div class="list-profiles">
                <h1 class="homebar fade-in">Who's watching?</h1>

                <ul class="profile-select fade-in">
                    <li class="profile">
                        <div>
                            <a class="profile-link" tabindex="0" href="home.html" onclick="saveProfile('Joey', 'joeymouthopen.jpg', 'london-1440x709.jpg', 'friends-and-family.jpg', 'Friends', 'recruiter.jpg', 'Recruiter')">
                                <div class="avatar-wrapper">
                                    <div class="profile-icon" style="background-image: url(joeymouthopen.jpg)">
                                    </div>
                                </div>
                                <span class="profile-name">JOEY</span>
                            </a>
                        </div>
                    </li>
                    <li class="profile">
                        <div>
                            <a class="profile-link" tabindex="0" href="home.html" onclick="saveProfile('Friends', 'friends-and-family.jpg', 'poconos-1440x709.jpg', 'joeymouthopen.jpg', 'Joey', 'recruiter.jpg', 'Recruiter')">
                                <div class="avatar-wrapper">
                                    <div class="profile-icon" style="background-image: url(friends-and-family.jpg)">
                                    </div>
                                </div>
                                <span class="profile-name">FRIENDS</span>
                            </a>
                        </div>
                    </li>
                    <li class="profile">
                        <div>
                            <a class="profile-link" tabindex="0" href="home.html" onclick="saveProfile('Recruiter', 'recruiter.jpg', 'grad-1440x709.jpg', 'joeymouthopen.jpg', 'Joey', 'friends-and-family.jpg', 'Friends')">
                                <div class="avatar-wrapper">
                                    <div class="profile-icon" style="background-image: url(recruiter.jpg)">
                                    </div>
                                </div>
                                <span class="profile-name">RECRUITER</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <span class="exit fade-in">
                <a aria-label="Exit" class="exit-button" href="#" onclick="randomSE()">i don't belong here...</a>
            </span>
        </div>
    )
}

export default profilePage