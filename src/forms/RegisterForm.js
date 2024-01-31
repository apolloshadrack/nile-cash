import React, { useState } from "react"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import '../styles/Form.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const RegisterForm = () => {
    const auth = getAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [termsChecked, setTermsChecked] = useState(false);

    const handleRegistration = async (e) => {
        e.preventDefault();

        if (name !== "" && email !== "" && password !== "") {
            const data = {
                name,
                email,
                password,
                termsChecked,
            };
             await createUserWithEmailAndPassword(auth, email, password)
             await addDoc(collection(db, 'user', data))
             .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
             })
             alert("Successful")
        } else {
            alert('Failed')
        }
    };

    return (
        <div className="loan-form-container">
            <h1 className="title">REGISTER</h1>
            <p className="wording">
                Discover the power of our secure and rewarding credit<br />
                system. Explore our range of loans and take control<br />
                of your finances today.
            </p>
            <div >
                <div>
                    <h4>Fill the form below to register</h4>
                    <form onSubmit={handleRegistration}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

            
                        <div>
                            <label htmlFor="receivingNumber">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="terms"
                                checked={termsChecked}
                                onChange={(e) => setTermsChecked(e.target.checked)}
                            />
                            <label htmlFor="terms">I accept the terms and conditions</label>
                        </div>

                        <button type="submit">Register</button>
                    </form>
                </div>
                <p> Already have account? <a href='/login'>Login</a></p>
            </div>
        </div>
    );
};

export default RegisterForm;