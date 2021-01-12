import React from 'react'


const Newssummary = (prop) => {
    return (
        <div className="card z-depth-2 News-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{prop.title}</span>
                <p>{prop.newsDescription}</p>
                <p className="grey-text">{prop.date}</p>
            </div>

        </div>
    )
}

export default Newssummary