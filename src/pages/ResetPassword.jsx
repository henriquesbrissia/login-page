import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { ROUTES } from '../utils/routes';
import { server } from '../utils/axios';

const resetPassword = async ({password}) => {
  const response = await server.post('/api/user/reset-password', {
    password,
  })
  return response.data
}

export const ResetPassword = () => {
  const [password, setPassword] = useState('')

  const {mutate, isLoading, isError, error} = useMutation(resetPassword, {
    onSuccess: (data) => {
      console.log('Password successfully redefined', data)
    },
    onError: (error) => {
      console.log('Error:', error)
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    mutate({password})
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
          <button type='submit' disabled={isLoading}>{isLoading ? 'Reseting password...' : 'Reset Password'}</button>
          {isError && <p className='important'>Error: {error.message}</p>}
          <Link to={ROUTES.SIGN_IN} className='back'>⭠ back to login page</Link>
        </form>
      </div>
    </>
  )
}
