import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Tenant {
  firstname: string;
  lastname: string;
  email: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Tenant>();

  const onSubmit: SubmitHandler<Tenant> = (data) => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstname", { required: "Name is required" })}
        type="text"
        placeholder="Name"
      />
      <input
        {...register("lastname", { required: "LastName is required" })}
        type="text"
        placeholder="LastName"
      />
      <input
        {...register("email", { required: "Email is required" })}
        type="email"
        placeholder="Email"
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
