import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import './styles/formUser.css'

const FormUser = ({createNewUser, updateInfo,updateUserById,setupdateInfo,setcloseForm}) => {
    //console.log(updateInfo)

    useEffect(() => {
        reset(updateInfo)
    
      
    }, [updateInfo])
    

  const{register,reset,handleSubmit} = useForm()

  const submit = data =>{
    if (updateInfo){
      //actualiza
      updateUserById(updateInfo.id, data)
      setupdateInfo()
    }else{
      //create
      createNewUser(data)
    }
   
    
    reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: '',
    });

  }

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <div  onClick={()=> setcloseForm(true)} className="form__x">❌</div>
      <h2 className="form__title">{updateInfo? 'Update User': "Create User"}</h2>
      <div className="form__div">
        <label  className="form__label" htmlFor="email">EMAIL</label>
        <input className="form__input" type="email" id="email" {...register("email")} />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="email">PASSWORD</label>
        <input className="form__input" type="password" id="password" {...register("password")} />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="email">FIRST NAME</label>
        <input className="form__input" type="text" id="first_name" {...register("first_name")}/>
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="email">LAST NAME</label>
        <input className="form__input" type="text" id="last_name"{...register("last_name")} />
      </div>
      <div className="form__div">
        <label  className="form__label"htmlFor="email">BIRTHDAY</label>
        <input className="form__input" type="date" id="birthday"{...register("birthday")} />
      </div>
      <button className="form__btn">Submit</button>
    </form>
  );
};

export default FormUser;
