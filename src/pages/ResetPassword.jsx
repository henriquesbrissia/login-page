import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { ROUTES } from '../utils/routes';
import { resetPassword } from '../utils/mutations';

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      console.log('Password successfully redefined', data);
      navigate(ROUTES.SIGN_IN);
    },
    onError: (error) => {
      console.log('Error:', error);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      return alert('Passwords do not match!');
    }

    const resetToken = new URLSearchParams(window.location.search).get('token');
    if (!resetToken) {
      return alert('No reset token found.');
    }

    mutate({ resetToken, newPassword });
  };

  return (
    <>
      <div>
        <h1>Reset Password</h1>
        <p>Enter your new password</p>
      </div>
      <div className='box'>
        <form onSubmit={handleSubmit}>
          <label>New Password <span className='important'>*</span></label>
          <input
            type='password'
            value={newPassword}
            id="new-password"
            onChange={(e) => setNewPassword(e.target.value)}
            required
            placeholder='Your New Password'
          />
          <label>Confirm Password <span className='important'>*</span></label>
          <input
            type='password'
            value={confirmPassword}
            id="confirm-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder='Confirm your New Password'
          />
          <button type='submit' disabled={isLoading}>
            {isLoading ? 'Reseting password...' : 'Reset Password'}
          </button>
          {isError && <p className='important'>Error: {error.message}</p>}
          <Link to={ROUTES.SIGN_IN} className='back'>⭠ back to login page</Link>
        </form>
      </div>
    </>
  )
}
