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

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>
              What is my access token?
            </button>
          </div>
          <div>
            <button onClick={logoutHandle}>
              Logout
            </button>
          </div>
          <div>
            <button onClick={() => AdminPortal.show()}>Settings</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={()=>loginWithRedirect()}>
            Click me to login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;