import List from "../../ui/List";
import { ServiceCard } from "./ServiceCard";
import { FaFileContract, FaLaptopCode, FaTools } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

export function Service() {
  return (
    <List item="service" title="What I do">
      <div className="service-list">
        <ServiceCard icon={<FaFileContract />} title="QA Testing">
          <p>
            Writing professional documentation (STP, STD, STR), identifying
            bugs, performing test cases and bug reporting.
          </p>
          <p>
            Tools: Jira, Chrome DevTools, Charles Proxy, Fiddler, ScreenPal,
            VPNs, Fake GPS, AVD — across web and mobile platforms.
          </p>
        </ServiceCard>

        <ServiceCard icon={<FaLaptopCode />} title="Frontend Development">
          <p>
            Building fast, responsive web applications with React, Next.js,
            React Query, Redux Toolkit, React Hook Form, and React Router v6.
          </p>
          <p>
            Experienced in clean architecture, reusable components, performance
            optimization (memoization, code splitting, lazy loading), and
            full-stack integration with Node.js and Supabase.
          </p>
        </ServiceCard>

        <ServiceCard title="UI/UX Design" icon={<MdDesignServices />}>
          <p>
            I design intuitive and visually appealing interfaces using Figma for
            wireframes, UI components, prototypes, and visual layouts.
          </p>
          <p>
            Comfortable with Tailwind CSS, Styled Components, CSS Modules,
            responsive design, and dark/light mode implementations.
          </p>
        </ServiceCard>

        <ServiceCard title="Tools & Workflow" icon={<FaTools />}>
          <p>
            <b>Backend & API:</b> Node.js, Express.js, RESTful APIs,
            Authentication (JWT, OAuth, Magic Link)
          </p>
          <p>
            <b>Database:</b> Supabase (PostgreSQL), MongoDB (Mongoose)
          </p>
          <p>
            <b>Dev & Deploy:</b> Git, GitHub, VS Code, Netlify, Vercel, Render
          </p>
          <p>
            <b>Debugging:</b> React DevTools, React Query Devtools, Redux
            DevTools, React Profiler, Chrome DevTools
          </p>
          <p>
            <b>Additional:</b> Figma, Jira, Python (data analysis), SQL
            (JOIN-level)
          </p>
        </ServiceCard>
      </div>
    </List>
  );
}
