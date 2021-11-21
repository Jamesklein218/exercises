import React from "react"

const Weather = ({ temp, icons, wind }) => {
    return (
        <div>
            <p><b>temperature: </b>{temp}</p>
            <img src={icons} alt="weather_icon" />
            <p><b>wind: </b>{wind}</p>
        </div>
    )
}

export default Weather