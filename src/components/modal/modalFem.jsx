import React, { useState, useEffect } from "react";
import "./modal.css";
import typesImg from "../types/typesImgs";
import "bootstrap/dist/js/bootstrap.bundle.min";

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
        <div className="data">
          <div className="data-name">
            <p># {pokemon.id}</p> <p>{props.name}</p>{" "}
          </div>
          <div className="type">
            {/* arreglo del tipo del pokemon */}
            <h4>Type: </h4>
            <div className="icons-columns">
              {pokemon.types.map((type) => {
                let icon = findIcon(type.type.name);
                return (
                  <div className="type-name">
                    <div className="type-name-img">
                      <img
                        className="icon"
                        src={icon.url}
                        alt={type.type.name}
                        style={icon.size}
                      />
                    </div>
                    <p style={icon.backgroundColor}>{type.type.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="poke-image">
          <img src={props.img} alt={props.name} />{" "}
        </div>
      </div>

      <div className="c2">
        {/* arreglo de los stats del pokemon */}
        <h4>Stats: </h4>
        {pokemon.stats.map((stat) => {
          return (
            <div className="stats">
              <label for="file">
                {stat.stat.name}: {stat.base_stat} %
              </label>
              <progress
                variant="info"
                id="file"
                max="100"
                value={stat.base_stat}
              ></progress>
            </div>
          );
        })}

        {/* botón para cerrar el modal de la info */}
        <button onClick={() => props.setShow(props.show)}>cerrar</button>
      </div>
    </div>
  );
};

export default Modal;