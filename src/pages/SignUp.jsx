import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    alert(`Email: ${email}\nPassword ${password}`)
  }

  return (
    <>
      <div>
        <h1>Create Account</h1>
        <p>Enter your data to start enjoying</p>
      </div>
      <div className='box'>
        <form onSubmit={handleClick}>
          <label>Email <span className='asterisk'>*</span></label>
          <input type="email" value={email} id='email' onChange={(e) => setEmail(e.target.value)} required placeholder='you@henrique.dev' />
          <label>Password <span className='asterisk'>*</span></label>
          <input type='password' value={password} id="password" onChange={(e) => setPassword(e.target.value)} required placeholder='Your Password' />
          <input type='password' name="passoword" id="confirm-password" required placeholder='Confirm your Password' />
          <button type='submit'>Sign up</button>
          <Link to={ROUTES.SIGN_IN} className='back'>⭠ back to login page</Link>
        </form>
      </div>
    </>
  )
}
