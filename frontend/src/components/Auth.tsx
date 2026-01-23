import { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', username: '', password: '', firstName: '', lastName: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    try {
      if (isLogin) {
        const res = await axios.post('http://localhost:3000/auth/login', { username: form.username, password: form.password });
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        window.location.href = '/dashboard';
      } else {
        await axios.post('http://localhost:3000/auth/register', form);
        setIsLogin(true);
        setForm({ email: '', username: '', password: '', firstName: '', lastName: '' });
      }
    } catch (error: any) {
      if (error.response?.data?.message) {
        // Assuming backend returns validation errors in a specific format
        const errMsgs = error.response.data.message;
        if (Array.isArray(errMsgs)) {
          const errObj: { [key: string]: string } = {};
          errMsgs.forEach((msg: string) => {
            const field = msg.split(' ')[0].toLowerCase();
            errObj[field] = msg;
          });
          setErrors(errObj);
        } else {
          setErrors({ general: errMsgs });
        }
      } else {
        setErrors({ general: 'An error occurred' });
      }
    }
  };

  return (
    <div className="App">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            {errors.email && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email}</p>}
            <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
            <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
          </>
        )}
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
        {errors.username && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.username}</p>}
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        {errors.password && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.password}</p>}
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => { setIsLogin(!isLogin); setErrors({}); setForm({ email: '', username: '', password: '', firstName: '', lastName: '' }); }}>
        {isLogin ? 'Need to register?' : 'Already have an account?'}
      </button>
    </div>
  );
};

export default Auth;