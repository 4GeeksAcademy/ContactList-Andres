// import React, { useContext } from "react";
// import { useNavigate } from "react-router";
// import { Context } from "../store/appContext";

// export const ContactCard = () => {
//     return (
//         <div>
//             <p>por ahora los objetivos no han sido logrados en la ciudad capital</p>
//         </div>
//     )
// }

import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";


export const ContactCard = () => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        actions.getContactsAgenda();
    }, [])
    // const handleViewDetails = () => {
    //     navigate(`/ContactList/${}`);
    // };

    const handleDelete = () => {
        actions.deleteContact();
    };
    console.log(store.ContactsAgenda)
    return (
        <>
            {store.ContactsAgenda.map((item, index) => (
                <div className="card mb-3" key={index} style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="Profile" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.email}</p>
                                <p className="card-text"><small className="text-body-secondary">Phone: {item.phone}</small></p>
                                <p className="card-text">{item.address}</p>
                                {/* <button className="btn btn-primary" onClick={handleViewDetails}>View Details</button> */}
                                <button className="btn btn-danger ml-2" onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired
};
