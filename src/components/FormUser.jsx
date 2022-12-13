import React from "react";
import { useForm } from "react-hook-form";

const FormUser = () => {

  const{register,reset,handleSubmit} = useForm

  return (
    <form>
      <h2>create</h2>
      <div>
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="email">PASSWORD</label>
        <input type="password" id="password" />
      </div>
      <div>
        <label htmlFor="email">FIRST NAME</label>
        <input type="text" id="first_name" />
      </div>
      <div>
        <label htmlFor="email">LAST NAME</label>
        <input type="text" id="last_name" />
      </div>
      <div>
        <label htmlFor="email">BIRTHDAY</label>
        <input type="date" id="birthday" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default FormUser;
