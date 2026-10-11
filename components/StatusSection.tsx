"use client";

import JobCard from "./JobCard";

const StatusSection = ({
  title,
  handleOpenModal,
}: {
  title: string;
  handleOpenModal: () => void;
}) => {
  return (
    <div className="flex flex-col gap-4 min-w-0 h-full border border-blue-500 p-3">
      <p className="underline text-center text-lg/5">{title}</p>
      <JobCard onClick={handleOpenModal} />
      <JobCard onClick={handleOpenModal} />
      <JobCard onClick={handleOpenModal} />
      <JobCard onClick={handleOpenModal} />
    </div>
  );
};

export default StatusSection;
