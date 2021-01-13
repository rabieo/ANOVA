import React, { useState, Component, useEffect } from 'react'

import Newssummary from './Newssummary'

import {auth, firestore, firebase} from '../../config/fbconfig';



const News = () => {

    const [newss, setNewss] = useState([])

    useEffect(async () => {
        // Run! Like go get some data from an API.
        let temp = [];

        await firestore.collection("news").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.data());
                temp.push(doc.data());
            });
        })

        setNewss(temp);
        console.log(temp);

      }, []);

    return (

        <div className="news-list section">

        {newss.map(news => 
          <Newssummary title={news.title} newsDescription={news.content} date="25" />
        )}

        </div>
    )
}

export default News;