import React from 'react'

const TutorialSummary = () => {
    return (
        <div className="card z-depth-2 tutorials-summary">
            <div className="card-image">
                <img src={require('./img/mechanics.jpg')} alt="" />
                <a href="#" className="halfway-fab btn-floating red darken-3 pulse">
                    <i className="material-icons">arrow_forward</i>
                </a>
            </div>
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Unity - Mechanics</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="grey-text">9 Aug, 9:30PM</p>
            </div>
        </div>




    )
}

export default TutorialSummary