import React from "react";

const SearchBox = (props) => {
    return (
        <form>
            <input
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder="Type to search Pokemon..."
            ></input>
        </form>
    );
};

export default SearchBox;