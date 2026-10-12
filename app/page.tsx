"use client";

import Board from "@/components/Board";
import UploadForm from "@/components/UploadForm";
import JobModal from "@/components/JobModal";

import { useState } from "react";

export type Job = {
  Company: string;
  Title: string;
  Location: string;
  Job_URL: string;
  date: string;
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState("");

  const [jobs, setJobs] = useState<Job[]>([]);

  function closeModal() {
    setIsModalOpen("");
  }

  function openUploadFormModal() {
    setIsModalOpen("upload-form");
  }

  function openJobInformationModal() {
    setIsModalOpen("job-information");
  }

  function handleCreatePost(data) {
    const date = new Date();
    const today = date.toLocaleDateString();

    const newPost = {
      Company: data.Company,
      Title: data.Title,
      Location: data.Location,
      Job_URL: data.Job_URL,
      date: today,
    };

    setJobs((prevJobs) => [...prevJobs, newPost]);
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
      <Board setOpenJobModal={openJobInformationModal} listOfJobs={jobs} />
      <UploadForm
        isOpen={isModalOpen === "upload-form"}
        handleCloseForm={closeModal}
        setIsOpen={setIsModalOpen}
        handleCreatePost={handleCreatePost}
      />
      <JobModal
        isOpen={isModalOpen === "job-information"}
        handleCloseModal={closeModal}
      />
    </div>
  );
}
