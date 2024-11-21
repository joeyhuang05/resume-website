import React from 'react'
import { Helmet } from 'react-helmet'
import './ProfilePage.css'
import Homebar from '../../components/homebar/homebar'

function ProfilePage(){
    return (
        <>
            <div className='profile-page'>
                <Helmet>
                    <title>Joey Huang</title>
                </Helmet>
                <Homebar/>
            </div>
        </>
    )
}

export default ProfilePage