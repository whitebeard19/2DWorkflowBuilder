import React from 'react'
import { useApp } from '../context/AppContext'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const {currentUser, loading} = useApp();

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center text-gray-500">
                Loading...
            </div>
        );
    }


    if(!currentUser) return <Navigate to='/login' replace/>

    return children;
}

export default ProtectedRoute