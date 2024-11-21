import './header.css'
import React from 'react'
import JoeyLogo from '../../assets/joeynetflixlogo.png'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const backHome = () => {
        navigate('/')
    }

    return (
        <div className='header-container'>
            <a onClick={backHome} className='joey-logo'>
                <img src={JoeyLogo} alt='JOEY HUANG'></img>
            </a>

        </div>
    )
}

// declaring Header and calling it in NavPage causes errors

// <div className='left-nav'>
//     {popouts.map((buttonText, index) => (
//         <li className='popOuts' key={index}>
//             <Popout text={buttonText} />
//         </li>
//     ))}
// </div>

export default Header