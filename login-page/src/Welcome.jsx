import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <div>
        <h1>Welcome back!</h1>
        <p>Do not have an account yet? <Link to="/Create">Create account</Link></p>
      </div>
      <div className='box'>
        <form>
          <label>Email <span className='asterisk'>*</span></label>
          <input type="text" name='email' id='email' required placeholder='you@henrique.dev' />
          <label>Pasword <span className='asterisk'>*</span></label>
          <input type='password' name="passoword" id="password" required placeholder='Your Password' />
          <Link to="/Forgot" className='forgot'>Forgot password?</Link>
          <button>Sign in</button>
        </form>
      </div>
    </>
  )
}

export default Welcome;