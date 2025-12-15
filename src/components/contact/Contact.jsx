
import { MoreInfo } from "./MoreInfo";
import Section from "../../ui/Section";
import { Form } from "./Form";
import { Map } from "./Map";
export function Contact() {
  return (
   
      <Section sectionType="contact" title="Contact Me">
       
          <div className="address">
            <MoreInfo/>
            <Map />
          </div>
          <Form />
       
      </Section>
  );
}

