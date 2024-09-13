import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <>
      <div>
        <h1>Forgot your passoword?</h1>
        <p>Enter your email to get a reset link</p>
      </div>
      <div className='box'>
        <form>
          <label>Your email <span className='asterisk'>*</span></label>
          <input type="text" name='email' id='email' required placeholder='you@henrique.dev' />
          <button>Reset passoword</button>
          <Link to="/" className='back'>⭠ back to login page</Link>
        </form>
      </div>
    </>
  )
}

export default Forgot;