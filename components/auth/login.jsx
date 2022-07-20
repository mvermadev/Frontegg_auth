import { useAuth, useLoginWithRedirect, AdminPortal } from '@frontegg/nextjs';
import { ContextHolder } from '@frontegg/rest-api'

const Login = () => {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  const logoutHandle = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    // alert(baseUrl)
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  // if(isAuthenticated){
  //   console.log('user: ', user);
  // }
  // else{}

  return loginWithRedirect();
};

export default Login;