import Link from "next/link";

interface ButtonProps {
  children: String;
  seconday?: boolean;
  onClick?: () => Function;
  href?: String;
}

const Button: React.FC<ButtonProps> = ({
  children,
  seconday,
  onClick,
  href,
}) => {
  return (
    <Link href={`${href}`}>
      <button
        className={` py-3 px-4 ${
          seconday
            ? " text-black bg-[#ededed]"
            : "bg-black text-white smooth hover:shadow-button hover:translate-y-[-6px] active:shadow-none active:translate-y-0"
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
