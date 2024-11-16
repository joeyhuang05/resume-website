import React from 'react'
import { Helmet } from 'react-helmet'
import './ProfilePage.css'
import Homebar from '../../components/homebar/homebar'

function ProfilePage(){
    return (
        <>
            <Helmet>
                <title>Joey Huang</title>
            </Helmet>
            <Homebar/>
        </>
    )
}

export default ProfilePage