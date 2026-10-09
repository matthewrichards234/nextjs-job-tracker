"use client";

import { useForm } from "react-hook-form";
import FieldInputs from "./FieldInputs";

const JobForm = ({ isOpen, handleCloseForm }) => {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className={isOpen ? "visible" : "hidden"}>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <span
          aria-hidden="true"
          className="cursor-pointer"
          onClick={handleCloseForm}
        >
          &times;
        </span>
        <FieldInputs
          register={register}
          name={"Company"}
          placeholder={"Company"}
          required={true}
        />
        <input type="submit" className="border border-white rounded-lg" />
      </form>
    </div>
  );
};

export default JobForm;
