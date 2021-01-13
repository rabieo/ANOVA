import React from 'react'
import Newssummary from './Newssummary'



const News = () => {
    return (

        <div className="news-list section">

            <Newssummary title="Adel" newsDescription="Omar" date="25" />
            <Newssummary />
            <Newssummary />
        </div>
    )
}

export default News