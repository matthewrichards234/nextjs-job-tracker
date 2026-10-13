import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import type { Job } from "@/app/page";

const JobModal = ({
  isOpen,
  handleCloseModal,
  job,
}: {
  isOpen: boolean;
  handleCloseModal: () => void;
  job: Job | null;
}) => {
  if (!job) return null;

  return (
    <Modal show={isOpen} onClose={handleCloseModal} size="lg" dismissible>
      <ModalHeader>
        <div>
          <h2 className="text-xl font-bold text-gray-900">{job.Title}</h2>
          <p className="mt-1 text-sm font-normal text-gray-500">
            {job.Company}
          </p>
        </div>
      </ModalHeader>

      <ModalBody>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {job.status}
              </p>
              <p className="mt-2 font-semibold text-indigo-600">{job.status}</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {job.date}
              </p>
              <p className="mt-2 font-semibold text-gray-900">{job.date}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700">Location</p>
            <p className="mt-1 text-sm text-gray-500">
              {job.Location || "No location provided"}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700">
              Job posting URL
            </p>
            {job.Job_URL ? (
              <a
                href={job.Job_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block break-all text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
              >
                View job posting ↗
              </a>
            ) : (
              <p className="mt-1 text-sm text-gray-500">No URL provided</p>
            )}
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default JobModal;
