import React, { Component } from 'react'



const CreateTutorial = () => {



    return (
        <div className="container">
            <form className="white">
                <h5 className="grey-text text-darken-3">Create Tutorial</h5>
                <div className="input-field">
                    <label htmFor="title">Title</label>
                    <input type="text" id="title" />
                </div>

                <div className="input-field">
                    <label htmFor="content"> Tutorial Summary</label>
                    <textarea id="content" className="materialize-textarea" />
                </div>

                <div className="imput-field">
                    <button className="btn red z-depth-0" >Post</button>
                </div>
            </form>

        </div>
    )

}

export default CreateTutorial
