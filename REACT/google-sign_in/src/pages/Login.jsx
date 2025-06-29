import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { Mail, Lock, LogIn } from 'lucide-react';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleEmailLogin = async (data) => {
        try {
            const { email, password } = data;
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard');
        } catch (error) {
            console.error("Login Error:", error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            if (result.user) {
                navigate('/dashboard');
            }
        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="w-full max-w-lg bg-white shadow-2xl rounded-lg p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome Back</h2>
                <form onSubmit={handleSubmit(handleEmailLogin)} className="space-y-4">
                    {/* Email Input */}
                    <div className="relative">
                        <label className="block text-gray-600 font-medium mb-2">Email</label>
                        <div className="flex items-center border rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                            <Mail className="text-gray-400 w-5 h-5 ml-3" />
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-transparent border-none outline-none focus:ring-0"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <label className="block text-gray-600 font-medium mb-2">Password</label>
                        <div className="flex items-center border rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                            <Lock className="text-gray-400 w-5 h-5 ml-3" />
                            <input
                                type="password"
                                {...register('password', { required: true })}
                                placeholder="Enter your password"
                                className="flex-1 px-4 py-2 bg-transparent border-none outline-none focus:ring-0"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 rounded-md shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                    >
                        Login
                    </button>
                </form>

                <hr className="border-t border-gray-300" />

                <button
                    onClick={handleGoogleSignIn}
                    className="flex items-center justify-center w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-300 mt-4"
                >
                    <LogIn className="w-5 h-5 mr-2" />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
