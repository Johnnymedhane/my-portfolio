import Section from "../../ui/Section";
import { Timeline } from "./Timeline";
import type { TimelineEntry } from "./TimelineItem";

export function Resume() {
  const educationList: TimelineEntry[] = [
    {
      name: "Frontend & Full-Stack Development",
      year: "2024 - 2026",
      description: "Udemy & Self-Directed Learning",
      children: (
        <p className="timeline-text">
          A 300+ hour online program focusing on React and Next.js (App
          Router, SSR/SSG/ISR), Context API, React Query, Redux Toolkit,
          Tailwind CSS, Styled Components and performance optimization.
        </p>
      ),
    },

    {
      name: "Bloomberg Finance Fundamentals",
      year: "2024",
      description: "ARDC Community, Tel Aviv",
      children: (
        <p className="timeline-text">
          Completed an introduction to financial markets, investing, risk
          management, and portfolio fundamentals.
        </p>
      ),
    },

    {
      name: "Python & Data Analysis",
      year: "2022",
      description: "ARDC, Tel Aviv",
      children: (
        <p className="timeline-text">
          A 40-hour course focusing on Python, Pandas and practical data
          analysis.
        </p>
      ),
    },

    {
      name: "QA Manual Testing",
      year: "2021",
      description: "SV College, Tel Aviv",
      children: (
        <p className="timeline-text">
          A six-month course focusing on manual testing methodologies, SQL,
          Jira and test documentation.
        </p>
      ),
    },
  ];

  const experienceList: TimelineEntry[] = [
    {
      name: "Frontend Developer",
      year: "2026 - Present",
      description: "PrimeTech (Mila)",
      children: (
        <p className="timeline-text">
          Developing frontend features for a multilingual, chat- and
          voice-based AI assistant using Next.js.
          <br />
          <span>
            Implementing custom authentication flows with Clerk, voice
            interaction features using browser microphone APIs and real-time
            audio handling, and collaborating with developers through Git and
            GitHub workflows.
          </span>
        </p>
      ),
    },

    {
      name: "Full-Stack Developer",
      year: "2026 - Present",
      description: "SnipSlot (Own Product)",
      children: (
        <p className="timeline-text">
          Built an online booking platform where barbershops get their own
          booking page and customers book appointments.
          <br />
          <span>
            Built with Next.js, Supabase and Tailwind CSS, using a shared
            PostgreSQL database with shop-level security policies, monthly and
            yearly subscription plans in ILS and USD, and Google sign-in for
            shop owners and customers.
          </span>
        </p>
      ),
    },

    {
      name: "Full-Stack Developer",
      year: "2026",
      description: "Anibinge Streaming Platform (Client Project)",
      children: (
        <p className="timeline-text">
          Built an anime micro-series streaming platform where viewers buy
          coins to unlock episodes and creators upload their own content.
          <br />
          <span>
            Built the frontend in React and the backend with Node.js and
            Express, with a creator upload system and integrations with
            Supabase, Google OAuth, PayPal Checkout, Bunny.net media delivery
            and HLS.js video playback.
          </span>
        </p>
      ),
    },

    {
      name: "Frontend Developer",
      year: "2024 - Present",
      description: "Personal & Production Projects",
      children: (
        <p className="timeline-text">
          Building modern web applications with React and Next.js, focusing on
          performance, scalability, and user experience.
          <br />
          <span>
            Developed and deployed 20+ production-ready projects, including
            authentication systems, payment integrations,  and
            real-time applications using React, Node.js, Supabase, and modern web
            technologies.
          </span>
        </p>
      ),
    },

    {
      name: "Freelance QA Tester",
      year: "2021 - 2024",
      description: "uTest",
      children: (
        <p className="timeline-text">
          Conducting functional, regression, and exploratory testing across web
          and mobile applications.
        </p>
      ),
    },
  ];

  return (
    <Section title="Resume" sectionType="resume">
      <Timeline title="Education" list={educationList} icon="fa-book-open" />

      <Timeline title="Experience" list={experienceList} icon="fa-briefcase" />
    </Section>
  );
}
