import React from 'react';

function Card(props){
    return (
        <div className="card-container">
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name} />
        </div>
    )
}

export default Card;