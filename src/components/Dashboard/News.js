import React, { useState, Component, useEffect } from 'react'

import Newssummary from './Newssummary'

import {auth, firestore, firebase} from '../../config/fbconfig';



const News = () => {

    const [newss, setNewss] = useState([])

    useEffect( () => {
        
        let temp = [];
        
        async function fetchData() {
            await firestore.collection("news").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.data());
                    temp.push(doc.data());
                });
            })
        }
        fetchData();

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