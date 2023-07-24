import React, { useState, useEffect } from "react";
import SearchBox from "./SearchPageComponents/SearchBox.js";
import Pokemon from "./SearchPageComponents/Pokemon.js";

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState("pikachu");
    const [searchedPokemon, setSearchedPokemon] = useState({});

    const getPokemon = async (searchValue) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${searchValue}/`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setSearchedPokemon(responseJSON);
        }
    };

    useEffect(() => {
        getPokemon(searchValue);
    }, [searchValue]);

    return (
        <>
            <div>
                <h1>Search Page</h1>
                <SearchBox
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </div>
            <div>
                <Pokemon
                    searchedPokemon={searchedPokemon}
                />
            </div>
        </>
    );
};

export default SearchPage;
