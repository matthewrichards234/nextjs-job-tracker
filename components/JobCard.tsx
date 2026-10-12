import React from "react";

const JobCard = ({
  onClick,
  title,
  company,
  date,
}: {
  onClick: () => void;
  title: string;
  company: string;
  date: string;
}) => {
  return (
    <div
      className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-4 text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer active:scale-[0.98]"
      onClick={onClick}
    >
      <div>
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{company}</p>
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
