import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import IsAuth from '../component/IsAuth';

const ProtectedRoute = () => {
    return IsAuth ? <Outlet/> : <Navigate to="/SignIn"/>; 
}

export default ProtectedRoute;