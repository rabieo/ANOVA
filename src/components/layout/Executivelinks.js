import React from 'react'
import { NavLink } from 'react-router-dom'

const ExecutiveLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/createNews' className="black-text">Create News</NavLink></li>
                <li><NavLink to='/createTutorial' className="black-text">Create Tutorial</NavLink></li>
            </ul>
        </div>
    )
}

export default ExecutiveLinks