import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';

export const SignUp = () => {
  return (
    <>
      <div>
        <h1>Create Account</h1>
        <p>Enter your data to start enjoying</p>
      </div>
      <div className='box'>
        <form>
          <label>Email <span className='asterisk'>*</span></label>
          <input type="text" name='email' id='email' required placeholder='you@henrique.dev' />
          <label>Password <span className='asterisk'>*</span></label>
          <input type='password' name="passoword" id="password" required placeholder='Your Password' />
          <input type='password' name="passoword" id="confirm-password" required placeholder='Confirm your Password' />
          <button>Sign up</button>
          <Link to={ROUTES.SIGN_IN} className='back'>⭠ back to login page</Link>
        </form>
      </div>
    </>
  )
}
