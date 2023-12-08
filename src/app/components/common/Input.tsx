interface InputProps {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <div className="border-b-2 border-textColor2 text-textColor2 pb-4 w-full">
      <input
        type={type}
        placeholder={placeholder}
        className="border-none outline-none text-base text-mainColor placeholder:text-textColor1 w-full"
      />
    </div>
  );
};

export default Input;
