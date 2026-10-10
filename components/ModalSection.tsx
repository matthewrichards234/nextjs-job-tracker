const ModalSection = ({
  title1,
  title2,
  input1,
  input2,
}: {
  title1: string;
  title2: string;
  input1: React.ReactNode;
  input2: React.ReactNode;
}) => {
  return (
    <div className="flex flex-row justify-evenly content-evenly p-3">
      <div className="flex flex-col">
        <p className="underline">{title1}</p>
        {input1}
      </div>

      <div className="flex flex-col">
        <p className="underline">{title2}</p>
        {input2}
      </div>
    </div>
  );
};

export default ModalSection;
