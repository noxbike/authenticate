import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logout } from '../feature/user/logUser'
axios.defaults.withCredentials = true;

export default function Dashboard() {
    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()

    const Logout = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/api/logout')
        .then(res => {
            dispatch(logout());
        })
    }

    if(!user){
        return(
            <Navigate to='/SignIn'/>
        )
    }
    else{
        return (
            <div className='Dashboard'>
                <div className='msgbox'>
                    <h1>Hello {user.username}</h1>
                    <p>you are connected !</p>
                    <button onClick={(e) => Logout(e)}>Logout</button>
                </div>
            </div>
        )
    }
}
