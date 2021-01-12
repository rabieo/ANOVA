import React, { Component } from 'react'
import News from './News'


const Dashboard = () => {


    return (

        < div className="dashboard container" >
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <News />
                </div>
            </div>
        </div >
    )

}
export default Dashboard