import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {
 const [users, setusers] = useState()
 const [updateInfo, setupdateInfo] = useState()

useEffect(() => {
  getAllUser()
 
 }, [])

 
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


  return (
    <div className="App">

      <h1>User</h1>
      <button> Open Form</button>
      <FormUser
      createNewUser={createNewUser}
      updateInfo ={updateInfo}
      updateUserById ={updateUserById}
      setupdateInfo ={setupdateInfo}
      />
      <div className="user-container">
      {
        users?.map(user => (
          <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setupdateInfo ={setupdateInfo}
            
         />
         ))
         }
      </div>
    </div>
  )

  }
export default App
