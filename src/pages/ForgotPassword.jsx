import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { ROUTES } from '../utils/routes';
import { forgotPassword } from '../utils/mutations';

export const ForgotPassword = () => {
const [email, setEmail] = useState('')

  const navigate = useNavigate();
  const {mutate, isLoading, isError, error } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      console.log('Reset token requested', data)
      navigate(ROUTES.RESET_PASSWORD)
    },
    onError: (error) => {
      console.log('Error sending token', error)
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutate({email})
  };

  return (
    <>
      <div>
        <h1>Forgot your password?</h1>
        <p>Enter your email to recieve a reset token</p>
      </div>
      <div className='box'>
        <form onSubmit={handleSubmit}>
          <label>Your email <span className='important'>*</span></label>
          <input type="email" value={email} id='email' onChange={(e) => setEmail(e.target.value)} required placeholder='you@henrique.dev' />
          <button type='submit' disabled={isLoading}>{isLoading ? 'Requesting token...' : 'Request token'}</button>
          {isError && <p className='important'>Error: {error.message}</p>}
          <Link to={ROUTES.SIGN_IN} className='back'>⭠ back to login page</Link>
        </form>
      </div>
    </>
  )
}
