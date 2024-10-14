import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import { server } from '../utils/axios';

export const ResetPassword = () => {
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    server.post('/api/user/reset-password', {
      password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <div>
        <h1>Reset Password</h1>
        <p>Enter your new password</p>
      </div>
      <div className='box'>
        <form onSubmit={handleSubmit}>
          <label>New Password <span className='important'>*</span></label>
          <input type='password' value={password} id="password" onChange={(e) => setPassword(e.target.value)} required placeholder='Your Password' />
          <label>Confirm Password <span className='important'>*</span></label>
          <input type='password' name="passoword" id="confirm-password" required placeholder='Confirm your new Password' />
          <button type='submit'>Reset Password</button>
          <Link to={ROUTES.SIGN_IN} className='back'>⭠ back to login page</Link>
        </form>
      </div>
    </>
  )
}
