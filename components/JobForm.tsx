"use client";

import { useForm } from "react-hook-form";
import FieldInputs from "./FieldInputs";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "flowbite-react";

const JobForm = ({ isOpen, handleCloseForm }) => {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <Modal show={isOpen} dismissible className="">
      <ModalHeader className="font-bold">Start Tracking A Job!</ModalHeader>
      <ModalBody>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <FieldInputs
            register={register}
            name={"Company"}
            placeholder={"Company"}
            required={true}
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <input
          type="submit"
          className="cursor-pointer font-bold text-lg hover:text-[#D3D3D3]"
        />
      </ModalFooter>
    </Modal>
  );
};

export default JobForm;
