
import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/' className="black-text">Tutorials</NavLink></li>
                <li><NavLink to='/' className="black-text">News</NavLink></li>
                <li><NavLink to='/' className="black-text">Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">AR</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedInLinks











