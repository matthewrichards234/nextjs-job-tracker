"use client";

import type { Job } from "@/app/page";

import StatusSection from "./StatusSection";

const Board = ({
  setOpenJobModal,
  listOfJobs,
}: {
  setOpenJobModal: () => void;
  listOfJobs: Job[];
}) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-[95%] h-[85vh] bg-[#F5F5DC] text-black overflow-auto">
      <StatusSection
        title="APPLIED"
        handleOpenModal={setOpenJobModal}
        jobs={listOfJobs}
      />
      <StatusSection
        title="INTERVIEW"
        handleOpenModal={setOpenJobModal}
        jobs={listOfJobs}
      />
      <StatusSection
        title="OFFER"
        handleOpenModal={setOpenJobModal}
        jobs={listOfJobs}
      />
      <StatusSection
        title="REJECTED"
        handleOpenModal={setOpenJobModal}
        jobs={listOfJobs}
      />
    </div>
  );
};

export default Board;
