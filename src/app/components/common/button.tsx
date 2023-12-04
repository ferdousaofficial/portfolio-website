import { cx } from "@/config/constant";
import Link from "next/link";

interface ButtonProps {
  children: String;
  seconday?: boolean;
  onClick?: () => Function;
  href?: String;
  styles?: String;
}

const Button: React.FC<ButtonProps> = ({
  children,
  seconday,
  onClick,
  href,
  styles,
}) => {
  return (
    <Link href={`${href || "#"}`}>
      <button
        className={cx(
          `py-4 px-8 rounded-full ${styles} ${
            seconday
              ? "bg-transparent underline"
              : "bg-mainColor text-white smooth hover:bg-mainColor/90 "
          }`
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
