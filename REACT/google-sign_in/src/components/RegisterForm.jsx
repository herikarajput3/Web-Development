import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Lock } from 'lucide-react';

const RegisterForm = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm();

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8 space-y-6"
        >
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 text-center">Create an Account</h2>

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
                Register
            </button>
        </form>
    );
};

export default RegisterForm;
