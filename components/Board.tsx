"use client";

import type { Job } from "@/app/page";

import StatusSection from "./StatusSection";

import Droppable from "./Droppable";
import { DragDropProvider } from "@dnd-kit/react";

const Board = ({
  setOpenJobModal,
  listOfJobs,
  handleDeleteJob,
  handleUpdateJobStatus,
}: {
  setOpenJobModal: (job: Job) => void;
  listOfJobs: Job[];
  handleDeleteJob: (id: string) => void;
  handleUpdateJobStatus: (id: string, newStatus: string) => void;
}) => {
  const statuses = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"];

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return;

        const { source, target } = event.operation;

        if (!source || !target) return;

        handleUpdateJobStatus(String(source.id), String(target.id));
      }}
    >
      <div className="grid w-full grid-cols-1 gap-5 overflow-x-auto pb-4 sm:grid-cols-2 xl:grid-cols-4">
        {statuses.map((status) => {
          return (
            <Droppable key={status} id={status}>
              <StatusSection
                key={status}
                title={status}
                handleOpenModal={setOpenJobModal}
                jobs={listOfJobs.filter((job) => {
                  return job.status === status;
                })}
                handleDeleteJob={handleDeleteJob}
              />
            </Droppable>
          );
        })}
      </div>
    </DragDropProvider>
  );
};

export default Board;
