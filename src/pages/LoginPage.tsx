import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl w-full max-w-sm space-y-6">
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
