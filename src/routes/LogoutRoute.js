import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import IsAuth from '../component/IsAuth';

const LogoutRoute = () => {
    return !IsAuth ? <Outlet /> : <Navigate to="/"/>;
}

export default LogoutRoute;