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
  const statuses = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"];

  return (
    <div className="grid grid-cols-4 gap-4 w-[95%] h-[85vh] bg-[#F5F5DC] text-black overflow-auto">
      {statuses.map((status) => {
        return (
          <StatusSection
            key={status}
            title={status}
            handleOpenModal={setOpenJobModal}
            jobs={listOfJobs}
          />
        );
      })}
    </div>
  );
};

export default Board;
