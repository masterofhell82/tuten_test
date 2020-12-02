import React from 'react'

const API = process.env.REACT_APP_API;

const config =  {
        headers: {
            "Content-Type": "application/json",
        },
    };


const getRequest = async (url, payload)  => {
    const res = await fetch(url, {
        method: 'GET',
        mode: "cors",
        config,
        body: JSON.stringify(payload),
    })

}  

