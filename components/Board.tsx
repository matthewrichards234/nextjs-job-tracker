"use client";

import StatusSection from "./StatusSection";

const Board = ({ setOpenJobModal }: { setOpenJobModal: () => void }) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-[95%] h-[85vh] bg-[#F5F5DC] text-black overflow-auto">
      <StatusSection title="APPLIED" handleOpenModal={setOpenJobModal} />
      <StatusSection title="INTERVIEW" handleOpenModal={setOpenJobModal} />
      <StatusSection title="OFFER" handleOpenModal={setOpenJobModal} />
      <StatusSection title="REJECTED" handleOpenModal={setOpenJobModal} />
    </div>
  );
};

export default Board;
