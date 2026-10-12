"use client";

import type { Job } from "@/app/page";

import JobCard from "./JobCard";

const StatusSection = ({
  title,
  handleOpenModal,
  jobs,
  handleDeleteJob,
}: {
  title: string;
  handleOpenModal: () => void;
  jobs: Job[];
  handleDeleteJob: (id: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-4 min-w-0 h-full border border-blue-500 p-3">
      <p className="underline text-center text-lg/5">{title}</p>
      {jobs.map((job) => {
        return (
          <JobCard
            id={job.id}
            key={job.id}
            onClick={handleOpenModal}
            title={job.Title}
            company={job.Company}
            date={job.date}
            status={job.status}
            handleDeleteJob={handleDeleteJob}
          />
        );
      })}
    </div>
  );
};

export default StatusSection;
