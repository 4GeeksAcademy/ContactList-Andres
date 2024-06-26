import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name: name,
            email: email,
            phone: phone,
            address: address
        };
        actions.createContact(newContact);
        navigate("/ContactList");
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Add New Contact</h1>
            <form className="container m-5">
                <div className="mb-3">
                    <label htmlFor="dataName" className="form-label">Contact Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactName"
                        placeholder="Full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="dataPhone" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactPhone"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="dataEmail" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="contactEmail"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="dataAddress" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactAddress"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save Contact</button>
                <button type="button" className="btn btn-secondary ml-2" onClick={() => navigate("/ContactList")}>Back to Contact List</button>
            </form>
        </div>
    );
};
