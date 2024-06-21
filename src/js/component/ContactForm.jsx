import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const ContactForm = () => {



    return (
        <form className="container m-5">
            <h4 className="p-2">Add New Contact</h4>
            <div className="mb-3">
                <label for="dataName" className="form-label">Name</label>
                <input type="name" className="form-control" id="contactName" aria-describedby="nameInput" />
            </div>

            <div className="mb-3">
                <label for="dataPhone" className="form-label">Phone</label>
                <input type="phone" className="form-control" id="contactPhone" aria-describedby="phoneInput" />
            </div>

            <div className="mb-3">
                <label for="dataEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label for="dataAddress" className="form-label">Address</label>
                <input type="address" className="form-control" id="contactAddress" aria-describedby="addressInput" />
            </div>

            <button type="submit" className="btn btn-primary">Save Contact</button>
            <p><a class="link-opacity-100" href="#">or get back to contacts</a></p>
        </form>
    );
};