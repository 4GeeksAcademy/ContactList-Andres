import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ContactCard = () => {
    const { actions, store } = useContext(Context);
    const [editing, setEditing] = useState(null);
    const [editedContact, setEditedContact] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        actions.getContactsAgenda();
    }, []);

    const handleEditClick = (contact) => {
        setEditing(contact.id);
        setEditedContact(contact);
    };

    const handleSaveClick = (id) => {
        actions.editContactData(id, editedContact);
        setEditing(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedContact({ ...editedContact, [name]: value });
    };

    return (
        <div className="d-flex flex-column align-items-center">
            {store.ContactsAgenda.map((item, index) => (
                <div className="card mb-3" key={index} style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBI4OyBdatLrVutR2Ku7CXGTVb5MOq5BBQA&s" className="img-fluid rounded-start" alt="Profile" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                {editing === item.id ? (
                                    <>
                                        <input type="text" name="name" value={editedContact.name} onChange={handleChange} placeholder="Name" />
                                        <input type="text" name="email" value={editedContact.email} onChange={handleChange} placeholder="Email" />
                                        <input type="text" name="phone" value={editedContact.phone} onChange={handleChange} placeholder="Phone" />
                                        <input type="text" name="address" value={editedContact.address} onChange={handleChange} placeholder="Address" />
                                        <button className="btn btn-success ml-2" onClick={() => handleSaveClick(item.id)}>Save</button>
                                    </>
                                ) : (
                                    <>
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">Email: {item.email}</p>
                                        <p className="card-text"><small className="text-body-secondary">Phone: {item.phone}</small></p>
                                        <p className="card-text">Address: {item.address}</p>
                                        <button className="btn btn-danger ml-2" onClick={() => actions.deleteContact(item.id)}><i className="fa-solid fa-trash"></i></button>
                                        <button className="btn btn-primary ml-2" onClick={() => handleEditClick(item)}><i className="fa-solid fa-pen-to-square"></i></button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired
};

