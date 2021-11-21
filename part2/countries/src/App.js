import React, { useState, useEffect } from "react"
// import axios from "axios"
import SearchBar from "./components/SearchBar"
import SearchList from "./components/SearchList"
import Country from "./components/Country"
// import Weather from "./components/Weather"
import services from "./services"

const isMatched = (str, subStr) => {
    str = str.toLowerCase()
    subStr = subStr.toLowerCase()
    let result = true
    for (let i = 0; i < subStr.length; i++) {
        if (str[i] !== subStr[i]) {
            result = false
            break
        }
    }
    return result
}
const api_key = process.env.REACT_APP_API_KEY

const App = () => {
    console.log("APP RENDER")

    const [countries, setCountries] = useState([])
    // const [weather, setWeather] = useState()
    const [search, setSearch] = useState()
    const [isSearching, setIsSearching] = useState(true)
    const [searchIndex, setSearchIndex] = useState(0)
    const searchCoun = !search || search === "" ? countries :
        countries.filter(country => {
            return isMatched(country.name.common, search)
        })

    // Function
    const handleChange = event => {
        setIsSearching(true)
        setSearch(event.target.value)
    }
    const handleShowButton = event => {
        setSearchIndex(parseInt(event.target.value))
        setIsSearching(false)
    }
    // const getWeather = ([city]) => {
    //     console.log("GET WEATHER")
    //     return services.getWeather(api_key, city)
    //         .then(res => {
    //             setWeather(res)
    //         })
    // }

    // Effect
    useEffect(() => {
        services.getCountries()
            .then(res => {
                setCountries(res)
            })
    }, [])

    return (
        <div>
            <SearchBar
                onChange={handleChange}
            />
            <SearchList
                countries={searchCoun}
                onShowButton={handleShowButton}
                init={isSearching}
            />
            <Country
                country={searchCoun[searchIndex]}
                // getWeather={getWeather}
                // weather={() => {
                //     getWeather()
                // }}
                init={!isSearching}
            />
            <div>debug: { }</div>
        </div>
    )
}

export default App