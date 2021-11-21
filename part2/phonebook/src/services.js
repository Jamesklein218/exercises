import axios from "axios"
const baseUrl = "http://localhost:3001/persons/"

const getAll = () => {
    return axios.get(baseUrl)
        .then(res => res.data)
}

const create = (data) => {
    return axios.post(baseUrl, data)
        .then(res => res.data)
}

const deletePerson = (id) => {
    console.log("DELETE")
    return axios.delete(baseUrl + id)
        .then(res => {
            console.log(res.data)
            return res.data
        })
}
export default {
    getAll: getAll,
    create: create,
    delete: deletePerson
}