import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import ExecutiveLinks from './Executivelinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper transparent">
            <div className="container">
                <Link to='/' className="brand-logo black-text">ANOVA</Link>
                <SignedInLinks />
                <SignedOutLinks />
                <ExecutiveLinks />
            </div>
        </nav>
    )
}

export default Navbar