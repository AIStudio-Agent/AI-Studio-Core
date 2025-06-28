import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'user' | 'developer' | null>(null);
  const [form, setForm] = useState({ user: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
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
      localStorage.setItem('authToken', 'true'); // Replace with real token later
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative px-4 pt-24 pb-16 text-white text-lg">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1E2117] z-0" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-3xl bg-[#2A2E24]/80 backdrop-blur-sm p-12 rounded-2xl border border-neutral-800">
          {!userType ? (
            <>
              <h2 className="text-5xl font-bold text-center mb-10">Choose Account Type</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <button
                  onClick={() => setUserType('user')}
                  className="p-8 bg-neutral-700 rounded-xl hover:bg-neutral-600 transition-all"
                >
                  <h3 className="text-2xl font-semibold mb-2">User</h3>
                  <p className="text-base text-neutral-300">Access AI models and tools</p>
                </button>
                <button
                  onClick={() => setUserType('developer')}
                  className="p-8 bg-neutral-700 rounded-xl hover:bg-neutral-600 transition-all"
                >
                  <h3 className="text-2xl font-semibold mb-2">Developer</h3>
                  <p className="text-base text-neutral-300">Create and publish AI models</p>
                </button>
              </div>
              <p className="text-center text-lg font-medium text-neutral-300 mt-8">
                Don&apos;t have an account?{' '}
                <Link to="/signup" className="text-teal-400 hover:text-teal-300 underline">
                  Sign up
                </Link>
              </p>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">
                  {userType === 'user' ? 'User' : 'Developer'} Login
                </h2>
                <button
                  onClick={() => setUserType(null)}
                  className="text-sm text-neutral-400 hover:text-white underline"
                  type="button"
                >
                  Change
                </button>
              </div>

              {error && <p className="text-red-400 text-center">{error}</p>}

              <div>
                <label className="block mb-1 font-medium">Email or Username</label>
                <input
                  name="user"
                  type="text"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-neutral-700 text-white"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-neutral-700 text-white"
                />
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => navigate('/forgot-password')}
                  className="text-sm text-teal-400 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-500 hover:bg-teal-600 text-black font-semibold py-3 text-lg rounded-lg transition"
              >
                {loading ? 'Logging in…' : 'Log In'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
