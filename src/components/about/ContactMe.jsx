
import Text from "../../ui/Text";

export function ContactMe() {
  return (
    <Text content="contact-me" title="Let's Connect">
      <p>
        I'm seeking opportunities where I can contribute my skills, learn from
        others, and grow professionally as a Frontend Developer.
      </p>
      <p>
        If you have a project you'd like to discuss or you're looking for a
        motivated, detail-oriented professional who has overcome challenges and
        is ready to make an impact, let's connect.
        <span className="contact-link">
          <a href="mailto:johnnymedhane@gmail.com" className="contact-me-link">
            johnnymedhane@gmail.com
          </a>
        </span>
      </p>
    </Text>
  );
}
