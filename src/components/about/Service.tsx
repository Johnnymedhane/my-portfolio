import List from "../../ui/List";
import { ServiceCard } from "./ServiceCard";
import {
  FaFileContract,
  FaLaptopCode,
  FaServer,
  FaPaintBrush,
} from "react-icons/fa";

export function Service() {
  return (
    <List item="service" title="What I do">
      <div className="service-list">
        <ServiceCard icon={<FaLaptopCode />} title="Frontend Development">
          <p>
            Building responsive, high-performance web applications with React,
            Next.js, and TypeScript, covering data fetching, state management,
            forms, and routing.
          </p>
          <p>
            Focused on reusable components, maintainable architecture, and
            performance optimization through memoization, code splitting, and
            lazy loading.
          </p>
        </ServiceCard>

        <ServiceCard icon={<FaServer />} title="Full-Stack Development">
          <p>
            <b>Backend & APIs:</b> Node.js, Express, REST APIs
          </p>
          <p>
            <b>Database:</b> Supabase (PostgreSQL), MongoDB, SQL
          </p>
          <p>
            <b>Auth & Payments:</b> Clerk, Google OAuth, JWT, Magic Link, PayPal
          </p>
          <p>
            <b>Dev & Deploy:</b> Git, GitHub, Vercel, Netlify, Render
          </p>
          <p>
            <b>AI-Assisted Development:</b> Claude Code, GitHub Copilot, ChatGPT
          </p>
        </ServiceCard>

        <ServiceCard icon={<FaPaintBrush />} title="UI Implementation">
          <p>
            Turning designs and ideas into responsive, polished interfaces with
            attention to layout, accessibility, consistency and user experience.
          </p>
          <p>
            Working from Figma designs with Tailwind CSS, Styled Components and
            CSS Modules, including dark and light modes.
          </p>
        </ServiceCard>

        <ServiceCard icon={<FaFileContract />} title="Quality & Testing">
          <p>
            Three years of QA experience: writing test documentation (STP, STD,
            STR), running test cases and reporting bugs across web and mobile.
          </p>
        </ServiceCard>
      </div>
    </List>
  );
}
