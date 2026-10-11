import React from "react";

const JobCard = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className="border bg-white text-black h-40 cursor-pointer active:cursor-grabbing"
      onClick={onClick}
    >
      <p>TITLE</p>
      <p>COMPANY</p>
      <p>DATE APPLIED</p>
    </div>
  );
};

export default JobCard;
