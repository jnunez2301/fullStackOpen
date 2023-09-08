import axios from 'axios'

const baseUrl ='http://localhost:3000/persons'

const getAll = async () =>{
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}

const create = async newData =>{
    const request = axios.post(baseUrl, newData)
    const response = await request
    return response.data
}

const removeItem = async (id)  =>{
    const request = axios.delete(`${baseUrl}/${id}`)
    const response = await request
    return response.data
}

const update = async (id, newData) => {
    const request = axios.put(`${baseUrl}/${id}`, newData);
    const response = await request
    return response.data
}

export default { getAll, create, update, removeItem }