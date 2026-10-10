const FieldInputs = ({ register, name, placeholder, required }) => {
  return (
    <input
      {...register(name, { required: required })}
      placeholder={placeholder}
      className="w-50 bg-white border rounded-lg px-2 py-2 placeholder:text-gray-400"
    ></input>
  );
};

export default FieldInputs;
