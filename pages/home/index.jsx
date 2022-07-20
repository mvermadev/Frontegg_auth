import React from 'react'
import { useAuth, useLoginWithRedirect, AdminPortal } from '@frontegg/nextjs';
import { ContextHolder } from '@frontegg/rest-api'
import Login from '../../components/auth/login';
import SideNav from '../../components/sidebar/';
import Home from '../../components/home';

export default function index() {

    const { user, isAuthenticated } = useAuth();
    const logoutHandle = () => {
        const baseUrl = ContextHolder.getContext().baseUrl;
        // alert(baseUrl)
        window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
      };
  
  return (
    <div>
        {isAuthenticated ? (
        <div>
            <div>
              <SideNav/>
            </div>
            <div>
              <Home/>
            </div>
            {/* <p>Home page</p>
            <button className='btn btn-primary' onClick={logoutHandle}>Logout</button> */}
        </div>
      ) : (
        <div className='clickToLogin'>
            <Login/>
        </div>
      )}
    </div>
  )
}
