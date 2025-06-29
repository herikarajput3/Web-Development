import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { LogOut } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            navigate('/login');
        } catch (error) {
            console.error("Sign-Out Error:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200">
            <div className="w-full max-w-lg bg-white shadow-2xl rounded-lg p-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Dashboard!</h1>
                <p className="text-gray-600 mb-6">You are successfully logged in.</p>

                <button
                    onClick={handleSignOut}
                    className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-300"
                >
                    <LogOut className="w-5 h-5 mr-2" />
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
