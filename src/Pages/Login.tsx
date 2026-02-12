// Login.tsx
import { useState, type FormEvent } from 'react';
import axiosInstance from '../Lib/axiosInstance';
import { API_PATHS } from '../Lib/apiPath';
import { ToastContainer, toast } from 'react-toastify';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css'; // ← make sure this is imported (very common reason toast is invisible)

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();           // 1st line — no exceptions allowed before this
    e.stopPropagation();          // extra protection against bubbling

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      toast.warn('Please enter email and password');
      return;
    }

    setIsLoading(true);

    // Move the async logic into an IIFE so we can catch early sync errors
    (async () => {
      try {
        const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
          email: trimmedEmail,
          password: trimmedPassword,
        });

        const { message, token } = response.data ?? {};

        toast.success(message || 'Login successful!');

        if (token) {
          localStorage.setItem('token', token);
          // Optional: localStorage.setItem('user', JSON.stringify(user));
        }

        // Let user see the success toast
        setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 1000);

      } catch (err: unknown) {
        e.preventDefault(); 
        e.stopPropagation(); 
        let msg = 'Login failed. Please try again.';

        if (err && typeof err === 'object' && 'response' in err) {
          const axiosErr = err as AxiosError<{ message?: string }>;
          const status = axiosErr.response?.status;
          const serverMsg = axiosErr.response?.data?.message;

          if (status === 401) {
            msg = serverMsg || 'Invalid email or password';
          } else if (status === 400) {
            msg = serverMsg || 'Invalid request';
          } else if (status && status >= 500) {
            msg = 'Server error — please try again later';
          } else if (serverMsg) {
            msg = serverMsg;
          }
        } else if (err && typeof err === 'object' && 'request' in err) {
          msg = 'Cannot reach the server. Check your internet connection.';
        } else if (err instanceof Error) {
          msg = err.message || msg;
        }

        toast.error(msg, { autoClose: 5000 });
        console.error('[Login error]', err);
      } finally {
        setIsLoading(false);
      }
    })();
  };

  return (
    <div className="login-page">
      <div className="background-gradient" />

      <div className="login-container">
        <div className="login-card">
          <div className="logo-section">
            <h1 className="brand-title">Welcome</h1>
            <p className="subtitle">Sign in to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form" noValidate>
            <div className="input-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                required
                autoComplete="email"
              />
              <label htmlFor="email">Email address</label>
              <div className="input-highlight" />
            </div>

            <div className="input-group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                required
                autoComplete="current-password"
              />
              <label htmlFor="password">Password</label>
              <div className="input-highlight" />
            </div>

            <div className="options-row">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className={`login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? <span className="spinner" /> : 'Sign In'}
            </button>
          </form>

          <p className="signup-link">
            Don't have an account? <a href="/register">Create one</a>
          </p>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={4500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Login;