import { Trash2 } from "lucide-react";

const JobCard = ({
  onClick,
  id,
  title,
  company,
  date,
  handleDeleteJob,
}: {
  onClick: () => void;
  id: string;
  title: string;
  company: string;
  date: string;
  handleDeleteJob: (id: string) => void;
}) => {
  return (
    <div
      className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-4 text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer active:scale-[0.98] active:cursor-grabbing"
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold tracking-tight">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{company}</p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteJob(id);
          }}
          className="rounded-md p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
          aria-label="Delete job"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="mt-4 border-t border-gray-100 pt-3">
        <p className="text-xs text-gray-500">
          Applied on <span className="font-medium text-gray-700">{date}</span>
        </p>
      </div>
    </div>
  );
};

export default JobCard;
