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
            <h1 className="text-center">Listed Agendas</h1>
            <div className="d-flex justify-content-center">
                <button className="btn btn-success mb-4" onClick={() => navigate("/ContactForm")}>Create New Contact</button>
            </div>
            <ul>
                {store.contacts.length > 0 ? (
                    store.contacts.map((contact, index) => (
                        <div className="d-flex justify-content-between">
                            <li key={index}>Contact= {contact.slug}</li>
                            <button className="btn btn-info ml-2">View Agenda</button>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No contacts found.</p>
                )}
            </ul>
        </div>
    );
};

