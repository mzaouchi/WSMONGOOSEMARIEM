import { GETCONTACTS, GETONECONTACT } from "./ActionTypes"
import axios from 'axios'
export const getContacts=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/Contact/getContacts')

        dispatch(
            {
                type : GETCONTACTS,
                payload : res.data.contacts
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const addContact=(newContact,navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/Contact/addContact', newContact)

        dispatch(getContacts())

        navigate('/ListContacts')
        
    } catch (error) {
        console.log(error)
    }
}

export const getOneContact=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/Contact/getOneContact/${id}`)

        dispatch(
            {
                type : GETONECONTACT,
                payload : res.data.found
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const editContact=(id,upContact,navigate)=>async(dispatch)=>{
    try {
       await axios.put(`/api/Contact/updateContact/${id}`,upContact)

       dispatch(getContacts())

        navigate('/ListContacts')
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/Contact/deleteContact/${id}`)

        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}