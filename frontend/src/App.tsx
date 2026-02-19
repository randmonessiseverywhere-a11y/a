/*import { useState, useEffect } from 'react';
import Auth from './components/Auth';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';
*/
import { useState, useEffect } from 'react';
import Auth from './components/Auth';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('jwt_token');
    const user = localStorage.getItem('user');
    
    console.log('🔍 Checking auth, token exists:', !!token);
    
    if (token && user) {
      const userData = JSON.parse(user);
      console.log('👤 User role:', userData.role);
      setUserRole(userData.role);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  const handleLoginSuccess = () => {
    console.log('✅ Login success callback');
    checkAuth(); // Re-check auth to get role
  };

  const handleLogout = () => {
    console.log('🚪 Logging out');
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUserRole(null);
  };

  // Loading state
  if (isAuthenticated === null) {
    return <div style={{ padding: '2rem', textAlign: 'center', color: '#00ff41' }}>Loading...</div>;
  }

  // Not authenticated - show login
  if (!isAuthenticated) {
    return <Auth onLoginSuccess={handleLoginSuccess} />;
  }

  // Authenticated - show dashboard based on role
  return (
    <div className="App">
      <nav style={{
        background: 'rgba(10, 14, 39, 0.95)',
        padding: '1rem 2rem',
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid #00ff41'
      }}>
        <h2 style={{ margin: 0, color: '#00ff41', fontFamily: 'Courier New, monospace' }}>
          🔒 CyberLearn {userRole === 'ADMIN' ? '| ADMIN' : '| STUDENT'}
        </h2>
        <button 
          onClick={handleLogout}
          style={{
            padding: '0.5rem 1rem',
            background: 'rgba(255, 0, 64, 0.2)',
            color: '#ff0040',
            border: '1px solid #ff0040',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'Courier New, monospace',
            fontWeight: 'bold'
          }}
        >
          🚪 LOGOUT
        </button>
      </nav>
      
      {userRole === 'ADMIN' ? (
        <AdminDashboard />
      ) : (
        <StudentDashboard />
      )}
    </div>
  );
}

export default App;
