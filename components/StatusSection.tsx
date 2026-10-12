"use client";

import type { Job } from "@/app/page";

import JobCard from "./JobCard";

const StatusSection = ({
  title,
  handleOpenModal,
  jobs,
}: {
  title: string;
  handleOpenModal: () => void;
  jobs: Job[];
}) => {
  return (
    <div className="flex flex-col gap-4 min-w-0 h-full border border-blue-500 p-3">
      <p className="underline text-center text-lg/5">{title}</p>
      <JobCard
        onClick={handleOpenModal}
        title="TEST"
        company="TEST"
        date="TEST"
      />
      {jobs.map((job) => {
        return (
          <JobCard
            key={job}
            onClick={handleOpenModal}
            title={job.Title}
            company={job.Company}
            date={job.date}
          />
        );
      })}
    </div>
  );
};

export default StatusSection;
