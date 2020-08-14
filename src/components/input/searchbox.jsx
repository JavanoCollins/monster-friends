import React from "react";
import "./searchbox.css";

export const SearchBox = ({search}) => {
    return (
        <div>
            <input id="search-box" type="search" placeholder="Search..." onChange={search}/>
        </div>
    );
};

export default SearchBox;
