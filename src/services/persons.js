import axios from "axios";
const baseUrl = '/api/persons'

const getAll = () => {
    const requset = axios.get(baseUrl)
    return requset.then(response => response.data)
}

const create = newObject => {
    const requset = axios.post(baseUrl, newObject)
    return requset.then(response => response.data)
}

const update = (name, newObject) => {
    const requset = axios.put(`${baseUrl}/${name}`, newObject)
    return requset.then(response => response.data)
}
const webFunction = {
    getAll, create, update
}
export default webFunction;