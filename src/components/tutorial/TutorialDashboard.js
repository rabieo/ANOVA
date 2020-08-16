import React, { Component } from 'react'
import Tutorial from './Tutorial'

const TutorialDashboard = () => {
    return (
        <div className="dashboard container">
            <h2 className="center">Tutorials</h2>
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <Tutorial />
                    <Tutorial />
                    <Tutorial />
                </div>
            </div>
        </div>
    )
}

export default TutorialDashboard