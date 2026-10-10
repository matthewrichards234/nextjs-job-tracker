"use client";

import { useForm } from "react-hook-form";
import FieldInputs from "./FieldInputs";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "flowbite-react";
import ModalSection from "./ModalSection";

const JobForm = ({ isOpen, handleCloseForm }) => {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <Modal show={isOpen} dismissible onClose={handleCloseForm}>
      <ModalHeader className="font-bold">Start Tracking A Job!</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row justify-evenly content-evenly">
            <div className="flex flex-col">
              <p className="text-sm">COMPANY</p>
              <FieldInputs
                register={register}
                name={"Company"}
                placeholder={"Company"}
                required={true}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">JOB TITLE</p>
              <FieldInputs
                register={register}
                name={"Job Title"}
                placeholder={"Job Title"}
                required={true}
              />
            </div>
          </div>
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
