import Link from "next/link";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center">
      <h1 className="text-3xl font-bold text-gray-900">About JobTracker</h1>

      <p className="max-w-md text-gray-600">
        JobTracker helps you organize your job applications and track your
        progress throughout your job search.
      </p>

      <p className="text-gray-600">
        Enjoying the project? Check out the source code on GitHub and leave a
        star!
      </p>

      <Link
        href="https://github.com/matthewrichards234/nextjs-job-tracker"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-gray-900 px-5 py-3 font-medium text-white transition-colors hover:bg-gray-700"
      >
        ⭐ Star on GitHub
      </Link>
    </main>
  );
};

export default Page;
