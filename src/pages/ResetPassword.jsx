import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';

export const ResetPassword = () => {
  const [password, setPassword] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    alert(`Password ${password}`)
  }

  return (
    <>
      <div>
        <h1>Reset Password</h1>
        <p>Enter your new password</p>
      </div>
      <div className='box'>
        <form onSubmit={handleClick}>
          <label>New Password <span className='asterisk'>*</span></label>
          <input type='password' value={password} id="password" onChange={(e) => setPassword(e.target.value)} required placeholder='Your Password' />
          <label>Confirm Password <span className='asterisk'>*</span></label>
          <input type='password' name="passoword" id="confirm-password" required placeholder='Confirm your new Password' />
          <button type='submit'>Reset Password</button>
          <Link to={ROUTES.SIGN_IN} className='back'>⭠ back to login page</Link>
        </form>
      </div>
    </>
  )
}
