import { doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { useForm } from 'react-hook-form';
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const onSubmit = async (data) => {
        try {
            const { email, password } = data;
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;

            if (user) {
                await setDoc(doc(db, "users", email), { email, password });
                navigate('/login');
            }
        } catch (error) {
            console.error("Error during registration: ", error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Optional: Store user data in Firestore if needed
            if (user) {
                await setDoc(doc(db, "users", user.email), {
                    email: user.email,
                    name: user.displayName,
                });
                navigate('/login');
            }
        } catch (error) {
            console.error("Error during Google Sign-In: ", error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input
                    type="email"
                    {...register('email', { required: true })}
                    placeholder="Email"
                />
                <br />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    {...register('password', { required: true })}
                />
                <br /><br />

                <button type="submit">Register</button>
            </form>
            <hr />
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default Register;
