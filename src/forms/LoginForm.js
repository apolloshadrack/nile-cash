import React, { useState } from "react";
import { doc, addDoc, getDoc, collection } from "firebase/firestore"; 
import { db } from '../firebase';
import '../styles/Form.css';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        if (email !== "" && password !== "") {
            const data = {
              email,
              password,
            };
    
             await addDoc(collection(db, "loan_request"), data);
             alert("Success. Loan request success")
        } else {
            alert('Failed')
        }
    };

    return (
        <div className="loan-form-container">
            <h1 className="title">Login</h1>
            <p className="wording">
                Fill the form to login and request for loan.
            </p>
            <div >
                <div>
                    <h4>LOGIN HERE</h4>
                    <form onSubmit={handleLogin}>
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
                            <label htmlFor="email">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit">Login</button>
                    </form>
                </div>
            <p> Don't have account? <a href='/register'>Sign up</a>  </p>
            </div>
        </div>
    );
};

export default LoginForm;