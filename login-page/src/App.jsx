import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Welcome back!</h1>
        <p>Do not have an account yet? <a href="#">Create account</a></p>
      </div>
      <div className='box'>
        <form>
          <label>Email *</label>
          <input type="text" name='email' id='email' placeholder='you@henrique.dev' />
          <label>Pasword *</label>
          <input type='password' name="passoword" id="password" placeholder='Your Password' />
          <a href="#">Forgot password?</a>
          <button>Sign in</button>
        </form>
      </div>
    </>
  )
}

export default App
