"use client";

import type { Job } from "@/app/page";

import StatusSection from "./StatusSection";

const Board = ({
  setOpenJobModal,
  listOfJobs,
  handleDeleteJob,
}: {
  setOpenJobModal: () => void;
  listOfJobs: Job[];
  handleDeleteJob: (id: string) => void;
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
            jobs={listOfJobs.filter((job) => {
              return job.status === status;
            })}
            handleDeleteJob={handleDeleteJob}
          />
        );
      })}
    </div>
  );
};

export default Board;
