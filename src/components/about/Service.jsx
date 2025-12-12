import List from "../../ui/List";
import { ServiceCard } from "./ServiceCard";
import { FaFileContract, FaLaptopCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

export function Service() {
  return (
    <List item="service" title="What I do">
      <div className="service-list">
        <ServiceCard icon={<FaFileContract />} title="QA Testing">
          <p>
            Writing professional documentation(STP, STD, STR), identifying bugs,
            performing test cases and bug reporting.
          </p>
          <p>
            {" "}
            Ensuring that the product is of the highest possible quality for
            customers. Using all of the techniques and methodologies to prevent
            issues with the product or service and to ensure great user
            experience for your customers.
          </p>
        </ServiceCard>

        <ServiceCard icon={<FaLaptopCode />} title="Frontend Development">
          <p>
            I build fast, responsive, and user-friendly web applications using
            modern technologies such as HTML, CSS, JavaScript, and React.
          </p>
          <p>
            Experienced in creating real-world projects with clean code,
            reusable components, and performance-focused UI.
          </p>
        </ServiceCard>
        <ServiceCard title="UI/UX Design" icon={<MdDesignServices />}>
          <p>
            I design clean and user-friendly interfaces, focusing on intuitive
            user experience and modern layout structure.
          </p>
          <p>
            I have hands-on experience using Figma to create wireframes, UI
            components, prototypes, and visual layouts for websites and
            applications.
          </p>
        </ServiceCard>
      </div>
    </List>
  );
}
