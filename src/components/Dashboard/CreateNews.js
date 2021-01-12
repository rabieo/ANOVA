import React, { Component } from 'react'
import { connect } from 'react-redux'



const CreateNews = () => {


    return (
        <div className="container">
            <form className="white">
                <h5 className="grey-text text-darken-3">Create News</h5>
                <div className="input-field">
                    <label htmFor="title">Title</label>
                    <input type="text" id="title" />
                </div>

                <div className="input-field">
                    <label htmFor="content"> News Content</label>
                    <textarea id="content" className="materialize-textarea" />
                </div>

                <div className="imput-field">
                    <button className="btn red z-depth-0" >Post</button>
                </div>
            </form>

        </div>
    )

}



export default CreateNews
