import React, {useState} from "react";
import Modal from "./modal/modalFem.jsx"

function Card(props){
    const [show, setShow] = useState(false);
    return (
        <div className="card-container">
            <p>{props.id} {props.name}</p>
            <img src={props.img} alt={props.name} onClick={() => setShow(!show)}/> {/*nuevo agregado para abrir y cerrar el modal selecionando las imagenes de los pokemones*/}
            {                    
                show ? <Modal  
                            name={props.name} 
                            img={props.img}
                            id={props.id}
                            setShow={setShow} /> : null                      
            }
        </div>
    )
}

export default Card;