import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleFetchContacts = () => {
        navigate(`/agenda/${username}`);
    };

    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!</h1>
            <p>
                <img src={rigoImage} />
            </p>
            <a href="#" className="btn btn-success">
                If you see this green button, bootstrap is working
            </a>
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={handleInputChange}
                    className="form-control mb-2"
                />
                <button onClick={handleFetchContacts} className="btn btn-primary">
                    Fetch Contacts
                </button>
            </div>
        </div>
    );
};
