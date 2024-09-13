import { useState } from 'react';
import { Link } from 'react-router-dom';

const Forgot = () => {
  const [email, setEmail] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    alert(`Email: ${email}`)
  }

  return (
    <>
      <div>
        <h1>Forgot your passoword?</h1>
        <p>Enter your email to get a reset link</p>
      </div>
      <div className='box'>
        <form onSubmit={handleClick}>
          <label>Your email <span className='asterisk'>*</span></label>
          <input type="email" value={email} id='email' onChange={(e) => setEmail(e.target.value)} required placeholder='you@henrique.dev' />
          <button type='submit'>Reset password</button>
          <Link to="/" className='back'>⭠ back to login page</Link>
        </form>
      </div>
    </>
  )
}

export default Forgot;