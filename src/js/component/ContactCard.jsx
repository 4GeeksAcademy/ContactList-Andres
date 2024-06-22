import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/ContactList/${}`);
    };

    const handleDelete = () => {
        actions.deleteContact();
    };

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="Profile" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{.contactName}</h5>
                        <p className="card-text">{.contactEmail}</p>
                        <p className="card-text"><small className="text-body-secondary">Phone: {.contactPhone}</small></p>
                        <button className="btn btn-primary" onClick={handleViewDetails}>View Details</button>
                        <button className="btn btn-danger ml-2" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired
};
