import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import { server } from '../utils/axios';

export const ForgotPassword = () => {
const [email, setEmail] = useState('')

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault()
    server.post('/api/user/forgot-password', {
      email,
    })
    .then(function (response) {
      console.log(response);
      navigate(ROUTES.RESET_PASSWORD)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <div>
        <h1>Forgot your passoword?</h1>
        <p>Enter your email to recieve a reset link</p>
      </div>
      <div className='box'>
        <form onSubmit={handleSubmit}>
          <label>Your email <span className='important'>*</span></label>
          <input type="email" value={email} id='email' onChange={(e) => setEmail(e.target.value)} required placeholder='you@henrique.dev' />
          <button type='submit'>Submit</button>
          <Link to={ROUTES.SIGN_IN} className='back'>⭠ back to login page</Link>
        </form>
      </div>
    </>
  )
}
