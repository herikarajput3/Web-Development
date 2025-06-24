import { doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { useForm } from 'react-hook-form';
// import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const { email, password } = data;

            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user, "this is user");
            if (user) {
                await setDoc(doc(db, "users", email), {
                    email: email,
                    password: password
                });
                navigate('/login');
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    {...register('email', { required: true })}
                    placeholder="Email"
                />
                <br />

                <label htmlFor="">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    {...register('password', { required: true })}
                />
                <br /><br />

                <button type="submit">Register</button>
            </form>
        </>
    );
};

export default Register;