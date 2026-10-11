"use client";

import Board from "@/components/Board";
import UploadForm from "@/components/UploadForm";
import JobModal from "@/components/JobModal";

import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState("");

  function closeModal() {
    setIsModalOpen("");
  }

  function openUploadFormModal() {
    setIsModalOpen("upload-form");
  }

  function openJobInformationModal() {
    setIsModalOpen("job-information");
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="font-bold text-5xl">
        NEXTJS SIMPLE JOB APPLICATION TRACKER
      </h1>
      <button
        className="bg-black text-[#F5F5DC] border rounded-lg px-4 py-2 hover:bg-[#2C2D2D] cursor-pointer"
        onClick={openUploadFormModal}
      >
        upload job
      </button>
      <Board setOpenJobModal={openJobInformationModal} />
      <UploadForm
        isOpen={isModalOpen === "upload-form"}
        handleCloseForm={closeModal}
        setIsOpen={setIsModalOpen}
      />
      <JobModal
        isOpen={isModalOpen === "job-information"}
        handleOnClick={openJobInformationModal}
        handleCloseModal={closeModal}
      />
    </div>
  );
}
