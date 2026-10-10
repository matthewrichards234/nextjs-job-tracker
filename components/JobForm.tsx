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
          <ModalSection
            title1="Company*"
            title2="Job Title*"
            input1={
              <FieldInputs
                register={register}
                name={"Company"}
                placeholder={"Company"}
                required={true}
              />
            }
            input2={
              <FieldInputs
                register={register}
                name={"Job Title"}
                placeholder={"Job Title"}
                required={true}
              />
            }
          ></ModalSection>
          <ModalSection
            title1="Location"
            title2="Job URL"
            input1={
              <FieldInputs
                register={register}
                name={"Location"}
                placeholder={"Location"}
                required={false}
              />
            }
            input2={
              <FieldInputs
                register={register}
                name={"JOB URL"}
                placeholder={"Job URL"}
                required={false}
              />
            }
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <input
          type="submit"
          className="cursor-pointer font-bold text-xl hover:text-[#D3D3D3] m-auto"
        />
      </ModalFooter>
    </Modal>
  );
};

export default JobForm;
