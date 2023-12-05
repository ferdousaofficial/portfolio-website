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
    <Link href={`${href || "#"}`} target="_blank">
      <button
        className={cx(
          ` capitalize smooth ${styles} ${
            seconday
              ? "bg-transparent underline underline-offset-[4px] text-textColor2 hover:text-textColor1"
              : "py-4 px-8 rounded-full bg-mainColor text-white  hover:bg-mainColor/90 "
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
