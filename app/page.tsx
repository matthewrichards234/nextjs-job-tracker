import Board from "@/components/Board";
import JobForm from "@/components/JobForm";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="font-bold text-5xl">
        NEXTJS SIMPLE JOB APPLICATION TRACKER
      </h1>
      <Board />
      <JobForm />
    </div>
  );
}
