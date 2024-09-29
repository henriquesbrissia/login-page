import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    alert(`Email: ${email}\nPassword ${password}`)
  }

  return (
    <>
      <div>
        <h1>Welcome back!</h1>
        <p>Do not have an account yet? <Link to={ROUTES.SIGN_UP}>Create account</Link></p>
      </div>
      <div className='box'>
        <form onSubmit={handleClick}>
          <label>Email <span className='asterisk'>*</span></label>
          <input type="email" value={email} id='email' onChange={(e) => setEmail(e.target.value)} required placeholder='you@henrique.dev' />
          <label>Password <span className='asterisk'>*</span></label>
          <input type='password' value={password} id="password" onChange={(e) => setPassword(e.target.value)} required placeholder='Your password' />
          <Link to={ROUTES.FORGOT_PASSWORD} className='forgot'>Forgot password?</Link>
          <button type='submit'>Sign in</button>
        </form>
      </div>
    </>
  )
}
