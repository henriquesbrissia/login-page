import { useAuth } from '../hooks/useAuth';

export const Dashboard = () => {
  const { user, logout } = useAuth();

  return(
    <div>
      <h1>Welcome to your Dashboard!</h1>
      <h2>Email: {user.email}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
