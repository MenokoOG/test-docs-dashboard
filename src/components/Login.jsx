// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/'); // Redirect to dashboard
        } catch (error) {
            setError('Failed to sign in. Please check your credentials.');
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-background">
            <h2 className="text-2xl mb-4 text-primary dark:text-white">Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="w-80 space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="w-full bg-primary text-white py-2 rounded">
                    Login
                </button>
            </form>
            <p className="mt-4">
                Don’t have an account?{' '}
                <Link to="/signup" className="text-blue-500">
                    Sign up here
                </Link>
            </p>
        </div>
    );
};

export default Login;
