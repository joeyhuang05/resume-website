import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import './NavPage.css'

function NavPage() {
    const location = useLocation()
    const { name, icon, navBackground } = location.state || {}
    
    console.log(location.state)

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div style={{
                backgroundImage: `url(${navBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100vw',
                }}>
            </div>

            {/** not aligned correctly*/}
            
        </>
    )
}

export default NavPage