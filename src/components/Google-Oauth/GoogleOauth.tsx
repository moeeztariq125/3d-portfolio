
const GoogleOauth = () => {
  const handleGoogleLogin = ()=>{
    const clientId = '844989231849-jt0o7tgn0he8qg3g8aujnahc0668n1m5.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:5173';
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=profile email&prompt=select_account`;
    window.location.href = authUrl
  }

  return (
    <div>
      <h2>Google OAuth2 Button</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}

export default GoogleOauth