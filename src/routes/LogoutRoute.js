import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LogoutRoute = () => {
    const user = useSelector(state => state.user.value);
    return !user ? <Outlet /> : <Navigate to="/"/>;
}

export default LogoutRoute;