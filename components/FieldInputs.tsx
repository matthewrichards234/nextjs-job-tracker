import { type UseFormRegister } from "react-hook-form";

type JobFormData = {
  Company: string;
  Title: string;
  Location: string;
  Job_URL: string;
};

const FieldInputs = ({
  register,
  name,
  placeholder,
  required,
}: {
  register: UseFormRegister<JobFormData>;
  name: keyof JobFormData;
  placeholder: string;
  required: boolean;
}) => {
  return (
    <input
      {...register(name, { required: required })}
      placeholder={placeholder}
      className="text-black w-50 bg-white border rounded-lg px-2 py-2 placeholder:text-gray-400"
    ></input>
  );
};

export default FieldInputs;
