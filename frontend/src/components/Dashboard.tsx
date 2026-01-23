import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [learningPaths, setLearningPaths] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (!token || !userData) {
      window.location.href = '/auth';
      return;
    }
    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);
    axios.get('http://localhost:3000/learning-path', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => setLearningPaths(response.data))
      .catch(() => window.location.href = '/auth');

    if (parsedUser.role === 'ADMIN') {
      axios.get('http://localhost:3000/user', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(response => setUsers(response.data))
        .catch(() => {});
    }
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Dashboard - Welcome {user.username} ({user.role})</h1>
      {user.role === 'STUDENT' && (
        <div>
          <h2>Available Learning Paths</h2>
          <ul>
            {learningPaths.map((lp: any) => (
              <li key={lp.id}>{lp.title}: {lp.description}</li>
            ))}
          </ul>
        </div>
      )}
      {user.role === 'INSTRUCTOR' && (
        <div>
          <h2>My Learning Paths</h2>
          <ul>
            {learningPaths.filter((lp: any) => lp.creatorId === user.id).map((lp: any) => (
              <li key={lp.id}>{lp.title}: {lp.description}</li>
            ))}
          </ul>
          <button>Create New Learning Path</button>
        </div>
      )}
      {user.role === 'ADMIN' && (
        <div>
          <h2>Admin Panel</h2>
          <p>Manage users, learning paths, etc.</p>
          <h3>Users</h3>
          <ul>
            {users.map((u: any) => (
              <li key={u.id}>{u.username} ({u.role})</li>
            ))}
          </ul>
          <h3>Learning Paths</h3>
          <ul>
            {learningPaths.map((lp: any) => (
              <li key={lp.id}>{lp.title}: {lp.description} <button>Edit</button></li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('user'); window.location.href = '/auth'; }}>Logout</button>
    </div>
  );
};

export default Dashboard;