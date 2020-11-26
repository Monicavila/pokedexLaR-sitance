import React from 'react';

function Card(props){
    return (
        <div className="card-container">
            <p>{props.id} {props.name}</p>
            <img src={props.img} alt={props.name} />
        </div>
    )
}

export default Card;