import React, { useState, useEffect } from "react";
import "./modal.css";
import typesImg from "../../components/types/typesImgs";

function findIcon(type) {
  let iconFind = typesImg.find((icon) => icon.name === type);
  return iconFind;
}

const Modal = (props) => {
  let [pokemon, setPokemon] = useState({ stats: [], types: [] });

  useEffect(() => {
    let num = props.id;
    fetchModal(num);
    // eslint-disable-next-line
  }, []);

  function fetchModal(index) {
    let id = index * 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="modal-pokemon">
      <div className="c1">
        <p># {pokemon.id}</p>{" "}
        {/*numero del pokemon viene desde el js de pokedex*/}
        <p>{props.name}</p>{" "}
        {/*nombre del pokemon viene desde el js de pokedex*/}
        <img src={props.img} alt={props.name} />{" "}
        {/*imagen del pokemon viene desde el js de pokedex*/}
        {/*arreglo del tipo del pokemon*/}
        <h4>Type: </h4>
        {pokemon.types.map((type) => {
          let icon = findIcon(type.type.name);
          return (
            <div>
              <img className="icon" style={icon.size} src={icon.url} alt={type.type.name} />
              <p style={icon.backgroundColor}>
              {type.type.name} 
              </p>
            </div>
          );
        })}
      </div>
      <div className="c2">
        {/*arreglo de los stats del pokemon*/}
        <h4>Stats: </h4>
        {pokemon.stats.map((stat) => {
          return (
            <div>
              <label for="file">
                {stat.stat.name}: {stat.base_stat} %
              </label>
              <progress id="file" max="100" value={stat.base_stat}></progress>
            </div>
          );
        })}

        {/*botón para cerrar el modal de la info*/}
        <button onClick={() => props.setShow(props.show)}>cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
