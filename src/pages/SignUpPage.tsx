import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'user' | 'developer' | null>(null);
  const [form, setForm] = useState({ email: '', username: '', password: '', agreeTos: false });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({
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
    <div className="min-h-screen relative px-4 pt-24 pb-16 text-gray-900 dark:text-white text-lg bg-white dark:bg-[#1E2117] transition-colors">
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

      {/* Container */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-3xl bg-gray-50 dark:bg-[#2A2E24]/80 backdrop-blur-sm p-12 rounded-2xl border border-gray-200 dark:border-neutral-800 transition-colors">
          {!userType ? (
            <>
              <h2 className="text-5xl font-bold text-center mb-10 text-teal-500 dark:text-teal-400">
                Choose Account Type
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <button
                  onClick={() => setUserType('user')}
                  className="p-8 bg-white dark:bg-neutral-700 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-600 transition-all border border-gray-300 dark:border-neutral-700"
                >
                  <h3 className="text-2xl font-semibold mb-2">User</h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-300">
                    Access AI models and tools
                  </p>
                </button>
                <button
                  onClick={() => setUserType('developer')}
                  className="p-8 bg-white dark:bg-neutral-700 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-600 transition-all border border-gray-300 dark:border-neutral-700"
                >
                  <h3 className="text-2xl font-semibold mb-2">Developer</h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-300">
                    Create and publish AI models
                  </p>
                </button>
              </div>
              <p className="text-center text-lg font-medium text-neutral-600 dark:text-neutral-300 mt-8">
                Already have an account?{' '}
                <Link to="/login" className="text-teal-500 hover:text-teal-400 underline">
                  Log in
                </Link>
              </p>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">
                  {userType === 'user' ? 'User' : 'Developer'} Sign Up
                </h2>
                <button
                  onClick={() => setUserType(null)}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-teal-500 underline"
                  type="button"
                >
                  Change
                </button>
              </div>

              {error && <p className="text-red-500 dark:text-red-400 text-center">{error}</p>}

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white border border-gray-300 dark:border-neutral-700 transition-colors"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Username</label>
                <input
                  name="username"
                  type="text"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white border border-gray-300 dark:border-neutral-700 transition-colors"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white border border-gray-300 dark:border-neutral-700 transition-colors"
                />
              </div>

              <label className="flex items-start space-x-3 text-sm text-neutral-700 dark:text-neutral-300">
                <input
                  name="agreeTos"
                  type="checkbox"
                  onChange={handleChange}
                  className="w-5 h-5 accent-teal-500 mt-1"
                />
                <span>
                  I agree to the{' '}
                  <a href="/terms" className="underline text-teal-500 hover:text-teal-400">
                    Terms & Conditions
                  </a>
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-500 hover:bg-teal-600 text-black dark:text-gray-900 font-semibold py-3 text-lg rounded-lg transition"
              >
                {loading ? 'Creating…' : 'Create Account'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
