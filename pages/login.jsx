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

  if(isAuthenticated){
    console.log('user: ', user);
  }
  else{}

  return (
    <div className='loginPage'>
      {isAuthenticated ? (
        <div>
        <div className='isAuthenticated d-flex justify-content-between align-items-center'>
          <div>
            <button onClick={() => alert(user.accessToken)}>
              What is my access token?
            </button>
          </div>
          <div>
            <button onClick={() => AdminPortal.show()}>Settings</button>
          </div>
          <div>
            <button onClick={logoutHandle}>
              Logout
            </button>
          </div>
        </div>
        <div className='cardSection d-flex justify-content-center flex-column align-items-center'>
        <div>
          <img src={user?.profilePictureUrl} alt={user?.name} />
        </div>
        <div>
          <span>&nbsp;{user?.name}</span>
        </div>
      </div>
      </div>
      ) : (
        <div className='clickToLogin'>
            <button onClick={()=>loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
};

export default Login;