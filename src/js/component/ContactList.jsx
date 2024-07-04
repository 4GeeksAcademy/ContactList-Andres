import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import { ContactCard } from "./ContactCard.jsx";

export const ContactList = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.getContacts();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Contact List</h1>
            <div className="d-flex justify-content-center">
                <button className="btn btn-success mb-4" onClick={() => navigate("/ContactForm")}>Create New Contact</button>
            </div>
            {store.contacts.length > 0 ? (
                store.contacts.map(contact => (
                    <div className="d-flex justify-content-center" key={contact.id}>
                        <ContactCard contact={contact} />
                    </div>
                ))
            ) : (
                <p className="text-center">No contacts found.</p>
            )}
        </div>
    );
};

