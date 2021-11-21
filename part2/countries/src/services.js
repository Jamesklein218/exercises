import axios from 'axios'
// import Country from './components/Country'

const getCountries = () => {
    return axios.get("https://restcountries.com/v3.1/all")
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log("ERROR IN FETCHING COUNTRY DATA ", err)
        })
}

const getWeather = (api_key, [city]) => {
    return axios.get("http://api.weatherstack.com/current", {
        params: {
            access_key: api_key,
            query: city === undefined ? "" : city
        }
    })
        .then(res => res.data)
        .then(res => res.current)
        .catch(err => {
            console.log("ERROR IN FETCHING COUNTRY DATA ", err)
        })
}

let services = {
    getCountries: getCountries,
    getWeather: getWeather
}

export default services