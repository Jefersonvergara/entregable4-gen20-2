import { useState, useEffect } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'


function App() {
const [closeForm, setcloseForm] = useState(true)

  const {users,getAllUser, createNewUser, updateUserById,deleteUserById}= useCrud()
 
 const [updateInfo, setupdateInfo] = useState()

useEffect(() => {
  getAllUser()
 
 }, [])

 
  return (
    <div className="App">

      <h1>User</h1>
      <button  onClick={()=> setcloseForm(false)} className='App__btn'> Open Form</button>

   <div className={`form-container ${closeForm && 'close__form'}`}>
   <FormUser
      createNewUser={createNewUser}
      updateInfo ={updateInfo}
      updateUserById ={updateUserById}
      setupdateInfo ={setupdateInfo}
      setcloseForm={setcloseForm}
      />
   </div>
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
