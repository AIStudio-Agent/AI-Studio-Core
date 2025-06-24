import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'user' | 'developer' | null>(null);
  const [form, setForm] = useState({ user: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.message || 'Login failed');
      localStorage.setItem('authToken', 'true');  // or real token
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!userType) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
        <div className="bg-gray-800 p-8 rounded-2xl w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center">Choose Account Type</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setUserType('user')}
              className="p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">User</h3>
              <p className="text-sm text-gray-400">Access AI models and tools</p>
            </button>
            <button
              onClick={() => setUserType('developer')}
              className="p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">Developer</h3>
              <p className="text-sm text-gray-400">Create and publish AI models</p>
            </button>
          </div>
          <p className="text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-teal-400 hover:text-teal-300">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl w-full max-w-sm space-y-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{userType === 'user' ? 'User' : 'Developer'} Login</h2>
          <button
            onClick={() => setUserType(null)}
            className="text-sm text-gray-400 hover:text-gray-300"
            type="button"
          >
            Change
          </button>
        </div>
        <h2 className="text-2xl font-bold text-center">Log In</h2>
        {error && <p className="text-red-400 text-center">{error}</p>}
        <div>
          <label className="block mb-1">Email or Username</label>
          <input
            name="user"
            type="text"
            required
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            name="password"
            type="password"
            required
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700"
          />
        </div>
        <div className="text-right">
          <button type="button" onClick={() => navigate('/forgot-password')} className="text-sm underline">
            Forgot Password?
          </button>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-teal-500 rounded hover:bg-teal-600 disabled:opacity-50"
        >
          {loading ? 'Logging in…' : 'Log In'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
