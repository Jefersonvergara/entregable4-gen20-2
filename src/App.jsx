import { useState, useEffect } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'


function App() {
  const {users,getAllUser, createNewUser, updateUserById,deleteUserById}= useCrud()
 
 const [updateInfo, setupdateInfo] = useState()

useEffect(() => {
  getAllUser()
 
 }, [])

 
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
