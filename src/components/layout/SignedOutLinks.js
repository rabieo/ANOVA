import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/Signup' className="black-text">Signup</NavLink></li>
                <li><NavLink to='/Signin' className="black-text">Signin</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks
