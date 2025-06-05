import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', username: '', password: '', agreeTos: false });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.agreeTos) {
      setError('You must agree to the Terms & Conditions');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.message || 'Signup failed');
      localStorage.setItem('authToken', 'true');
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center">Create Account</h2>
        {error && <p className="text-red-400 text-center">{error}</p>}
        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Username</label>
          <input
            name="username"
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
        <label className="flex items-center space-x-2">
          <input name="agreeTos" type="checkbox" onChange={handleChange} />
          <span>
            I agree to the <a href="/terms" className="underline">Terms & Conditions</a>
          </span>
        </label>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-teal-500 rounded hover:bg-teal-600 disabled:opacity-50"
        >
          {loading ? 'Creating…' : 'Create Account'}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
