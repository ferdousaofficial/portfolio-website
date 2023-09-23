import Card from "@/common/components/shared/Card";
import { ServiceList } from "@/shared/config/constants";

const Service: React.FC = () => {
  return (
    <div className="lg:w-[48%] w-11/12">
      <Card
        title="Service "
        subtitle="I offer the highest quality front-end web development services, including:"
        body={
          <ul className="space-y-[7.5px]">
            {ServiceList.map((e, id) => (
              <li key={id}>✅ {e}</li>
            ))}
          </ul>
        }
      />
    </div>
  );
};
export default Service;
