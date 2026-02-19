import { useState, useEffect } from 'react';
import Auth from './components/Auth';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('jwt_token');
    console.log('🔍 Checking auth, token exists:', !!token);
    setIsAuthenticated(!!token);
  };

  const handleLoginSuccess = () => {
    console.log('✅ Login success callback');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    console.log('🚪 Logging out');
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  // Loading state
  if (isAuthenticated === null) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;
  }

  // Not authenticated - show login
  if (!isAuthenticated) {
    return <Auth onLoginSuccess={handleLoginSuccess} />;
  }

  // Authenticated - show dashboard
  return (
    <div className="App">
      <nav style={{
        background: 'white',
        padding: '1rem 2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ margin: 0, color: '#1a73e8' }}>🔒 CyberLearn Admin</h2>
        <button 
          onClick={handleLogout}
          style={{
            padding: '0.5rem 1rem',
            background: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          🚪 Logout
        </button>
      </nav>
      <AdminDashboard />
    </div>
  );
}

export default App;
