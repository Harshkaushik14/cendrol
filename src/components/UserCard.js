import React from 'react';

import './UserCard.css';

const UserCard = (props) => {
    console.log("props here", props.item.name.first)

    return (
        <div className="user-profile-card">
            <img src={props.item.picture.medium} alt="user pic" />
            <h3>{props.item.name.first}</h3>
        </div>
    );
};

export default UserCard;
