import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUser = ({createNewUser, updateInfo,updateUserById,setupdateInfo}) => {
    console.log(updateInfo)

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
    <form onSubmit={handleSubmit(submit)}>
      <h2>create</h2>
      <div>
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="email">PASSWORD</label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <div>
        <label htmlFor="email">FIRST NAME</label>
        <input type="text" id="first_name" {...register("first_name")}/>
      </div>
      <div>
        <label htmlFor="email">LAST NAME</label>
        <input type="text" id="last_name"{...register("last_name")} />
      </div>
      <div>
        <label htmlFor="email">BIRTHDAY</label>
        <input type="date" id="birthday"{...register("birthday")} />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default FormUser;
