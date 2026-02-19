import { useState } from 'react';
import axios from 'axios';
import './Auth.css';

interface AuthProps {
  onLoginSuccess: () => void;
}

const Auth = ({ onLoginSuccess }: AuthProps) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      console.log('🔐 Attempting login with:', form.username);
      
      const res = await axios.post('http://localhost:3000/auth/login', {
        username: form.username,
        password: form.password
      });

      console.log('✅ Login response:', res.data);

      // Save token
      localStorage.setItem('jwt_token', res.data.access_token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      console.log('💾 Token saved');

      // Trigger success callback
      onLoginSuccess();
      
    } catch (err: any) {
      console.error('❌ Login error:', err);
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>🔒 CyberLearn Admin</h1>
        <p>Sign in to manage learning content</p>

        {error && (
          <div style={{
            padding: '1rem',
            background: '#f8d7da',
            color: '#721c24',
            borderRadius: '4px',
            marginBottom: '1rem'
          }}>
            ❌ {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="username"
              placeholder="admin@cyberlearn.com"
              value={form.username}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? '⏳ Signing in...' : '🚀 Sign In'}
          </button>
        </form>

        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          background: '#f8f9fa',
          borderRadius: '4px',
          fontSize: '0.9rem'
        }}>
          <strong>Demo Credentials:</strong><br />
          Email: admin@cyberlearn.com<br />
          Password: admin123
        </div>
      </div>
    </div>
  );
};

export default Auth;
