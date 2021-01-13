import React, { useState, Component } from 'react'

import {auth, firestore, firebase} from '../../config/fbconfig';


const CreateNews = () => {
    const [newsTitle, setNewsTitle] = useState('')
    const [newsDescription, setNewsDescription] = useState('')

    const handleChange = event => {
        setNewsTitle(event.target.value)
    }

    const handleChange2 = event => {
        setNewsDescription(event.target.value)
    }

    const handlePost = (event) => { 
        firestore.collection("news").add({ title: newsTitle, content: newsDescription });
        event.preventDefault();
    }


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
