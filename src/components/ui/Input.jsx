import { twMerge } from "tailwind-merge";
const Input = ({
  type = "text",
  placeholder = "",
  clickAble,
  className,
  icon,
  action = () => {},
  ...rest
}) => {
  return (
    <div className="inputGroup">
      <input
        type={type}
        placeholder={placeholder}
        {...rest}
        className={twMerge(
          "px-4 py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black",
          className
        )}
      />
      {clickAble && (
        <span className="cursor-pointer" onClick={action}>
          {icon}
        </span>
      )}
    </div>
  );
};

export default Input;
