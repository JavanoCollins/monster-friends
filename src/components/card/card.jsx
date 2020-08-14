import React from "react";
import "./card.styles.css"

const Card = ({ monster }) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}`} alt=""/>
            <h1>{monster.name}</h1>
    <p>{monster.email}</p>
        </div>
    );
};

export default Card;
