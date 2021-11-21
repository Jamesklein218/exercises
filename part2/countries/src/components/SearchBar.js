import React from "react"

const SearchBar = ({ onChange }) => {
    return (
        <div>
            <label htmlFor="search-bar">find countries </label>
            <input
                type="text"
                id="search-bar"
                placeholder="Enter your country"
                onChange={onChange}
            ></input>
        </div>
    )
}
export default SearchBar