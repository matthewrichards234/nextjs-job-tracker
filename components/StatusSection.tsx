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
  handleOpenModal: (job: Job) => void;
  jobs: Job[];
  handleDeleteJob: (id: string) => void;
}) => {
  return (
    <div className="flex h-full min-h-75 min-w-0 flex-col gap-3 rounded-2xl border border-gray-200 bg-gray-50/80 p-4 transition-colors">
      <p className="mb-2 border-b border-gray-200 pb-3 text-sm font-bold tracking-wider text-gray-600">
        {title}
        <span className="ml-2 rounded-full bg-gray-200 px-2 py-1 text-xs font-medium">
          {jobs.length}
        </span>
      </p>
      {jobs.map((job) => {
        return (
          <JobCard
            id={job.id}
            key={job.id}
            onClick={() => handleOpenModal(job)}
            title={job.Title}
            company={job.Company}
            date={job.date}
            handleDeleteJob={handleDeleteJob}
          />
        );
      })}
    </div>
  );
};

export default StatusSection;
