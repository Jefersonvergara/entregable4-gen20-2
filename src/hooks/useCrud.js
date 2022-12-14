import axios from 'axios'
import React, { useState } from 'react'

const useCrud = () => {
    const [users, setusers] = useState()

    const getAllUser = () => {
        const URL = 'https://users-crud.academlo.tech/users/'
        axios.get(URL)
        .then(res=> setusers(res.data))
        .catch(err=> console.log(err))
       }
      
       
      
       const createNewUser =data=>{
         const URL = 'https://users-crud.academlo.tech/users/'
         axios.post(URL, data)
          .then(()=> getAllUser())
          .catch(err=> console.log(err))
      }
       //console.log(updateInfo)
      
       const deleteUserById =(id)=>{
            const URL = `https://users-crud.academlo.tech/users/${id}/` 
            axios.delete(URL)
            .then(() => getAllUser())
            .catch(err=> console.log(err))
      }
       
        const updateUserById =(id , data) =>{
          URL = `https://users-crud.academlo.tech/users/${id}/` 
          axios.put(URL,data)
          .then(()=> getAllUser())
          .catch(err=> console.log(err))
        }

        return{
            users,
            createNewUser,
            getAllUser,
            deleteUserById,
            updateUserById
        }
}

export default useCrud