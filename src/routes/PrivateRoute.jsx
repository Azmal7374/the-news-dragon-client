import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);

    console.log('user in private route', user);
   
    if(loading) {
         return  <p className="text-center"><Spinner   animation="border" variant="primary" /></p>
    }

    if(user) {
        return children
    }
    return  <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;