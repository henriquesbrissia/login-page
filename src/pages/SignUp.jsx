import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { ROUTES } from '../utils/routes';
import { server } from '../utils/axios';

const signUp = async ({email, password}) => {
  const response = await server.post('/api/user/sign-up', {
    email,
    password,
  })
  return response.data
}

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {mutate, isLoading, isError, error} = useMutation(signUp, {
    onSuccess: (data) => {
      console.log('Sign-in successful', data)
    },
    onError: (error) => {
      console.log('Error signing in', error)
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    mutate({ email, password })
  }

  return (
    <>
      <div>
        <h1>Create Account</h1>
        <p>Enter your data to start enjoying</p>
      </div>
      <div className='box'>
        <form onSubmit={handleSubmit}>
          <label>Email <span className='important'>*</span></label>
          <input type="email" value={email} id='email' onChange={(e) => setEmail(e.target.value)} required placeholder='you@henrique.dev' />
          <label>Password <span className='important'>*</span></label>
          <input type='password' value={password} id="password" onChange={(e) => setPassword(e.target.value)} required placeholder='Your Password' />
          <input type='password' name="passoword" id="confirm-password" required placeholder='Confirm your Password' />
          <button type='submit' disabled={isLoading}>{isLoading ? 'Signing up...' : 'Sign up'}</button>
          {isError && <p className='important'>Error: {error.message}</p>}
          <Link to={ROUTES.SIGN_IN} className='back'>⭠ back to login page</Link>
        </form>
      </div>
    </>
  )
}
