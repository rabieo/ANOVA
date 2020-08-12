import React, { Component } from 'react'

function Signin() {


    const handleChange = (e) => {
        console.log(e)
    }
    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <div className="container">
            <form className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmFor="email">Email</label>
                    <input type="email" id="email" />
                </div>

                <div className="input-field">
                    <label htmFor="password">Password</label>
                    <input type="password" id="password" />
                </div>

                <div className="imput-field">
                    <button className="btn red z-depth-0">Login</button>
                </div>
            </form>

        </div>
    )
}

export default Signin
