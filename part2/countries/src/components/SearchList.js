import React from "react"

const SearchList = ({ countries, onShowButton, init }) => {
    if (!init) {
        return <p></p>
    }
    if (countries.length > 10) {
        return (
            <p>To many matches, specify another filter</p>
        )
    } else {
        return (
            <div>
                {countries.map((country, index) => {
                    return (
                        <div key={index}>
                            <p>
                                {country.name.common}
                            </p>
                            <button
                                value={index}
                                onClick={onShowButton}
                            >show</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default SearchList