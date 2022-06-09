import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../Input/Input";

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
      <Input
        type="text"
        placeholder="firstname"
        label="Name"
        {...register("firstname", { required: "Name is required." })}
        error={errors.firstname?.message}
      />
      <Input
        type="text"
        placeholder="lastname"
        label="LastName"
        {...register("lastname", { required: "LastName is required." })}
        error={errors.lastname?.message}
      />

      <Input
        type="email"
        placeholder="Email"
        label="Email"
        {...register("email", { required: "email is required." })}
        error={errors.email?.message}
      />

      <input type="submit" />
    </form>
  );
};

export default Form;
