import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../firebase';
import '../styles/Form.css';

const LoanRequestForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [receivingNumber, setReceivingNumber] = useState("");
    const [termsChecked, setTermsChecked] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (termsChecked) {
            const formData = {
                name,
                email,
                phoneNumber,
                amount,
                receivingNumber,
            };
             await addDoc(collection(db, "loan_request"), formData);
             alert("Success. Loan request success")
        } else {
            alert('Failed')
        }
    };

    return (
        <div className="loan-form-container">
            <h1 className="title">Request</h1>
            <p className="wording">
                Discover the power of our secure and rewarding credit<br />
                system. Explore our range of loans and take control<br />
                of your finances today.
            </p>
            <div >
                <div>
                    <h4>Please fill out the form</h4>
                    <form onSubmit={handleSubmit}>
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
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="amount">Amount:</label>
                            <input
                                type="number"
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="receivingNumber">Receiving Method:</label>
                            <input
                                type="text"
                                id="receivingNumber"
                                value={receivingNumber}
                                onChange={(e) => setReceivingNumber(e.target.value)}
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

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoanRequestForm;