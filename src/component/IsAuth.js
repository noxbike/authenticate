import React, { useState } from 'react'
import axios from 'axios';
const serveur = "http://localhost:3001"
axios.defaults.withCredentials = true;

const IsAuth = () => {
    const [ con, setCon ] = useState(false)

    axios.get(`${serveur}/api/isAuth`)
        .then(res => {
            setCon(res.data.msg)
        })
        .catch(err => {
            console.log(err)
    })

    return con;
}

export default IsAuth;