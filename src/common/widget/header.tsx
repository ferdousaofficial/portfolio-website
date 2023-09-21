import { navData } from "@/shared/config/constants";
import Button from "../components/shared/Button";
import Brand from "../components/ui/brand";

const header: React.FC = () => {
  return (
    <div className="flex items-center justify-around py-5">
      <Brand />
      {/* nav data */}
      <div>
        <ul className="flex items-center gap-10">
          {" "}
          {navData.map((e, i) => (
            <li key={i}>
              <a href={e.path} className="smooth hover:text-black">
                {e.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* contact button */}
      <div>
        <Button children={"Get in touch 👋"} href={"#contact"} />
      </div>

      {/* mobile nav */}
    </div>
  );
};
export default header;
