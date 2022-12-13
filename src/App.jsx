import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import FormUser from './components/FormUser'

function App() {
 const [user, setuser] = useState()

 const getAllUser = () => {
  const URL = 'https://users-crud.academlo.tech/users/'
  axios.get(URL)
  .then(res=> setuser(res.data))
  .catch(err=> console.log(err))
 }

 useEffect(() => {
  getAllUser()
 
 }, [])

 console.log(user)
 


  return (
    <div className="App">

      <h1>User</h1>
      <button> Open Form</button>
      <FormUser/>
    </div>
  )
}

export default App
