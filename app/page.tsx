"use client";

import Board from "@/components/Board";
import JobForm from "@/components/JobForm";

import { useState } from "react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function closeForm() {
    setIsFormOpen(false);
  }

  function openForm() {
    setIsFormOpen(true);
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="font-bold text-5xl">
        NEXTJS SIMPLE JOB APPLICATION TRACKER
      </h1>
      <button
        className="bg-black text-[#F5F5DC] border rounded-lg px-4 py-2 hover:bg-[#2C2D2D] cursor-pointer"
        onClick={openForm}
      >
        upload job
      </button>
      <Board />
      <JobForm
        isOpen={isFormOpen}
        handleCloseForm={closeForm}
        setIsOpen={setIsFormOpen}
      />
    </div>
  );
}
