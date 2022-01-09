import axios from 'axios'
import React from 'react'

export default function Dashboard() {

    const Logout = () => {
        axios.post('http://localhost:3001/Logout')
        .then(function(res){
            console.log(res.data.success);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    return (
        <div className='Dashboard'>
            <h1>You are connected !</h1>
            <p onClick={() => Logout()}>Logout</p>
        </div>
    )
}
