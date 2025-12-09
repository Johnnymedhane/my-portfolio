import List from "../../ui/List";
import { ServiceCard } from "./ServiceCard";

export function Service() {
  return (
    <List item="service" title="What I do">
      <div className="service-list">
        <ServiceCard icon="fa-solid fa-file-contract" title="QA Testing">
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

        <ServiceCard
          icon="fa-solid fa-laptop-code"
          title="Frontend Development"
        >
          <p>
            I build fast, responsive, and user-friendly web applications using
            modern technologies such as HTML, CSS, JavaScript, and React.
          </p>
          <p>
            Experienced in creating real-world projects with clean code,
            reusable components, and performance-focused UI.
          </p>
        </ServiceCard>
      </div>
    </List>
  );
}
