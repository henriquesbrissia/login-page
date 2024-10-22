import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../hooks/useAuth';
import { fetchUser } from '../utils/queries';

export const Dashboard = () => {
  const { getToken, logout } = useAuth();

  const { data: users, isPending, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUser(getToken)
  });

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  return(
    <div>
      <h1>Welcome to your Dashboard!</h1>
      {users.map((user) => (
        <div key={user.email}>
          <p>Email: {user.email}</p>
        </div>
      ))}
      <button onClick={logout}>Logout</button>
    </div>
  )
}
