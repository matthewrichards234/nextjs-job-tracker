"use client";

import Board from "@/components/Board";
import UploadForm from "@/components/UploadForm";
import JobModal from "@/components/JobModal";

import { useState } from "react";

export type Job = {
  Company: string;
  Title: string;
  Location: string;
  Job_URL: string;
  date: string;
  status: string;
  id: string;
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState("");

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const [jobs, setJobs] = useState<Job[]>([]);

  function closeModal() {
    setIsModalOpen("");
  }

  function openUploadFormModal() {
    setIsModalOpen("upload-form");
  }

  function openJobInformationModal(job: Job) {
    setSelectedJob(job);
    setIsModalOpen("job-information");
  }

  function handleCreatePost(data) {
    const date = new Date();
    const today = date.toLocaleDateString();

    const newPost = {
      Company: data.Company,
      Title: data.Title,
      Location: data.Location,
      Job_URL: data.Job_URL,
      date: today,
      status: "APPLIED",
      id: crypto.randomUUID(),
    };

    setJobs((prevJobs) => [...prevJobs, newPost]);

    console.log(newPost);
  }

  function handleDeleteJob(id: string) {
    const filteredJobs = jobs.filter((job: Job) => {
      return job.id !== id;
    });
    setJobs(filteredJobs);
  }

  function handleUpdateJobStatus(id: string, newStatus: string) {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, status: newStatus } : job,
      ),
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F9FC] px-6 py-10 font-sans text-gray-900 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8">
        {/* Header */}
        <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              JobFlow
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Job Application Tracker
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Keep track of your applications and move toward your next
              opportunity.
            </p>
          </div>

          <button
            className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-700 active:scale-[0.98] sm:self-auto"
            onClick={openUploadFormModal}
          >
            <span className="text-lg">+</span>
            Add job
          </button>
        </header>

        {/* Overview */}
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Total applications", value: jobs.length },
            {
              label: "Interviews",
              value: jobs.filter((job) => job.status === "INTERVIEW").length,
            },
            {
              label: "Offers",
              value: jobs.filter((job) => job.status === "OFFER").length,
            },
            {
              label: "Rejected",
              value: jobs.filter((job) => job.status === "REJECTED").length,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-medium text-gray-500">{item.label}</p>
              <p className="mt-3 text-3xl font-bold tracking-tight">
                {item.value}
              </p>
            </div>
          ))}
        </section>

        {/* Kanban Board */}
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Your applications</h2>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              {jobs.length} jobs
            </span>
          </div>

          <Board
            setOpenJobModal={openJobInformationModal}
            listOfJobs={jobs}
            handleDeleteJob={handleDeleteJob}
            handleUpdateJobStatus={handleUpdateJobStatus}
          />
        </section>
      </div>

      <UploadForm
        isOpen={isModalOpen === "upload-form"}
        handleCloseForm={closeModal}
        setIsOpen={setIsModalOpen}
        handleCreatePost={handleCreatePost}
      />

      <JobModal
        isOpen={isModalOpen === "job-information"}
        handleCloseModal={closeModal}
        job={selectedJob}
      />
    </main>
  );
}
