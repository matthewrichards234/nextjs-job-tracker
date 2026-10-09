const FieldInputs = ({ register, name, placeholder, required }) => {
  return (
    <input
      {...register(name, { required: required })}
      placeholder={placeholder}
      className="w-50 bg-white border rounded-lg"
    ></input>
  );
};

export default FieldInputs;
