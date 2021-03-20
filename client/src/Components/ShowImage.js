import React from "react";
// import { API } from '../Services/AuthService';

const ShowImage = ({ user, url }) => (
    <div className="user-img">
        <img
            src={``}
            alt={user.name}
            className="mb-3"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
    </div>
);

export default ShowImage;
