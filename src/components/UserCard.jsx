import React from 'react'
import './styles/userCard.css'

const userCard = ({user, deleteUserById,setupdateInfo}) => {

    const handleEdit = () =>{
        setupdateInfo(user)
    }

  
  return (
    <article className='card'>
        <h3 className='card__title'> {user.first_name} {user.last_name}</h3>
        <ul className='card__body'>
            <li className='card__item'>
                <span className='card__span'>Correo:</span> {user.email}
            </li>
            <li className='card__item'>
                <span className='card__span'>Cumpleaños:
            </span> {user.birthday}
            </li>
        </ul>
        <footer className='card__footer'>
            <button className='card__btn card__btn__trash' onClick={()=>deleteUserById(user.id)}><i className="fa-solid fa-trash"></i></button>
            <button className='card__btn card__btn__edit' onClick={handleEdit}><i className="fa-solid fa-pen-to-square"></i></button>
        </footer>
    </article>
  )
}

export default userCard