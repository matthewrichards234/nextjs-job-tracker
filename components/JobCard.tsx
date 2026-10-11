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
      className="border bg-white text-black h-40 cursor-pointer active:cursor-grabbing"
      onClick={onClick}
    >
      <p>{title}</p>
      <p>{company}</p>
      <p>{date}</p>
    </div>
  );
};

export default JobCard;
