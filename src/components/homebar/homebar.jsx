import './homebar.css'

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
        <div className='centered container'>
            <div className='list-profiles'>
                <h1 className='homebar fade-in'>Who's watching?</h1>

                <ul className='profile-select fade-in'>
                    {/* Make new function for elements */}
                </ul>
            </div>
            <span className='exit fade-in'>
                <a aria-label='Exit' className='exit-button' href='#' onClick={randomUrl}>i don't belong here...</a>
            </span>
        </div>
    )
}