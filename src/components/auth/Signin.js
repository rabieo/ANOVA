import React, { Component } from 'react'



class Signin extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

    }
    render() {
        return (
            <div className="container">
                <form className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <div className="imput-field">
                        <button className="btn red z-depth-0" onClick={this.handleSubmit}>Login</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default Signin
