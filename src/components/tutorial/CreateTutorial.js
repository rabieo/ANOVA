import React, { Component } from 'react'



class CreateTutorial extends Component {

    state = {
        title: '',
        content: '',
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
                    <h5 className="grey-text text-darken-3">Create Tutorial</h5>
                    <div className="input-field">
                        <label htmFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmFor="content"> Tutorial Summary</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
                    </div>

                    <div className="imput-field">
                        <button className="btn red z-depth-0" onClick={this.handleSubmit}>Post</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default CreateTutorial
