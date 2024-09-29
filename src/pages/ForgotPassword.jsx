import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../utils/routes';

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.RESET_PASSWORD)
  }

  return (
    <>
      <div>
        <h1>Forgot your passoword?</h1>
        <p>Enter your email to recieve a reset link</p>
      </div>
      <div className='box'>
        <form>
          <label>Your email <span className='asterisk'>*</span></label>
          <input type="email" name='email' id='email' required placeholder='you@henrique.dev' />
          <button onClick={handleClick}>Submit</button>
          <Link to={ROUTES.SIGN_IN} className='back'>⭠ back to login page</Link>
        </form>
      </div>
    </>
  )
}
