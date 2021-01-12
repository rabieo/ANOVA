
import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/Tutorials' className="black-text">Tutorials</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating red darken-3">AR</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedInLinks











