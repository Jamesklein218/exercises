import React from "react"
import Weather from "./Weather"

const Country = ({ country, getWeather, init }) => {
    if (!init) {
        return <p></p>
    }
    // let weather = getWeather(country.capital)
    //     .then(res => {
    //         weather = res
    //     })
    let weather = {}
    console.log("weather: ", weather, "in ", country.capital)

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>region {country.region} </p>
            <h2>Language</h2>
            <ul>
                {Object.values(country.languages).map(lang => {
                    return <li
                        key={lang}
                    >{lang}</li>
                })}
            </ul>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            <Weather
                temp={weather.temperature}
                icons={weather.weather_icons}
                wind={weather.wind_speed}
            />
        </div>
    )
}

export default Country