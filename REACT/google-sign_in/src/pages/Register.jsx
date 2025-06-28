import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';
import RegisterForm from '../components/RegisterForm';
import { LogIn } from 'lucide-react';

const Register = () => {
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleRegister = async (data) => {
        try {
            const { email, password } = data;
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;

            if (user) {
                await setDoc(doc(db, "users", email), { email, password });
                navigate('/login');
            }
        } catch (error) {
            console.error("Registration Error:", error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            if (user) {
                await setDoc(doc(db, "users", user.email), {
                    email: user.email,
                    name: user.displayName,
                });
                navigate('/login');
            }
        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="w-full max-w-lg bg-white shadow-2xl rounded-lg p-8">
                <RegisterForm onSubmit={handleRegister} />
                <div className="mt-6">
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
        </div>
    );
};

export default Register;
