import React, { useState, Component } from 'react'
import { connect } from 'react-redux'
import { db } from "C:/Users/adel/Desktop/Web development/ANOVA/anova/src/config/fbconfig.js"

const post = (newsTitle, newsDescription) => { db.collection("news").add({ title: newsTitle, content: newsDescription }) }






const CreateNews = () => {
    const [newsTitle, setNewsTitle] = useState('')
    const [newsDescription, setNewsDescription] = useState('')

    const handleChange = event => {
        setNewsTitle(event.target.value)
    }

    const handleChange2 = event => {
        setNewsDescription(event.target.value)
    }

    const handlePost = () => { db.collection("news").add({ title: newsTitle, content: newsDescription }) }


    return (
        <div className="container">
            <form className="white">
                <h5 className="grey-text text-darken-3">Create News</h5>
                <div className="input-field">
                    <label htmFor="title">News Title</label>
                    <input type="text" id="title" onChange={handleChange} />
                </div>

                <div className="input-field">
                    <label htmFor="content"> News Content</label>
                    <input type="text" id="newsDetails" onChange={handleChange2} />
                </div>

                <div className="imput-field">
                    <button className="btn red z-depth-0" onClick={handlePost}>Post</button>
                </div>
            </form>

        </div>
    )

}



export default CreateNews
