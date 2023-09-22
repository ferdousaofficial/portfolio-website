import Link from "next/link";

interface ButtonProps {
  children: String;
  seconday?: boolean;
  onClick?: () => Function;
  href?: String;
  classname?: String;
}

const Button: React.FC<ButtonProps> = ({
  children,
  seconday,
  onClick,
  href,
  classname,
}) => {
  return (
    <Link href={`${href || "#"}`}>
      <button
        className={` py-3 px-5 ${classname} ${
          seconday
            ? "hover:bg-[#ededed] bg-[#ededed]"
            : "bg-black text-white smooth hover:text-[#485460] hover:bg-[#ededed] "
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
