import React from 'react'

const userCard = ({user, deleteUserById,setupdateInfo}) => {

    const handleEdit = () =>{
        setupdateInfo(user)
    }

  
  return (
    <article>
        <h3> {user.first_name} {user.last_name}</h3>
        <ul>
            <li><span>Correo:</span> {user.email}</li>
            <li><span>Cumpleaños:</span> {user.birthday}</li>
        </ul>
        <footer>
            <button onClick={()=>deleteUserById(user.id)}><i className="fa-solid fa-trash"></i></button>
            <button onClick={handleEdit}><i className="fa-solid fa-pen-to-square"></i></button>
        </footer>
    </article>
  )
}

export default userCard