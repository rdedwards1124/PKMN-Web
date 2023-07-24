import React from "react";
// import {Link} from 'react-router-dom'

const Pokemon = (props) => {
    return (
        <>
            <div>
                <h2>{props.searchedPokemon.name}</h2>
            </div>
            <div>
                {/* <img
                    src={props.searchedPokemon.sprites.other.home.front_default}
                    alt={props.searchedPokemon.name}
                ></img> */}
            </div>
        </>
    );
};

export default Pokemon;
