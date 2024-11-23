import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import './NavPage.css'
import Header from '../../components/header/header'

function NavPage() {
    const location = useLocation()
    const { name, icon, navBackground } = location.state || {}
    
    // console.log(location.state)

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div
                className='nav-background'
                style={{ backgroundImage: `url(${navBackground})` }}
            >
            </div>
            <Header name={name} icon={icon} navBackground={navBackground}/>
        </>
        
    )
}

export default NavPage