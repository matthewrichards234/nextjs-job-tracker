const ModalSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <p>{title}</p>
      {children}
    </div>
  );
};

export default ModalSection;
