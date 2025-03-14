import devLogo from './assets/dev.svg'
import googleLogo from './assets/google.svg'
import './App.css'

function App() {
  
  const handleLogin = ()=>{
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img src={devLogo} className="logo react" alt="dev logo" />
        </a>
      </div>
      <h1>A DevOps Project</h1>
      <div className="card">
        <button onClick={handleLogin} className="google-btn">
          Sign Up with Google
          <img src={googleLogo} className="logo-google" alt="google logo" />
        </button>
      </div>
      <p className="read-the-docs">
        A SSO web-project using Google OAuth2.0.
      </p>
    </>
  )
}

export default App
