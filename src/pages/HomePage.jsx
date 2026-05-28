import { Main } from "../components/Main";
import { Hero } from "../components/hero/Hero";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { About } from "../components/about/AboutMe";
import { Projects } from "../components/projects/Projects";
import { Resume } from "../components/resume/Resume";
import { Skills } from "../components/skills/Skills";
import { Contact } from "../components/contact/Contact";
import Scrollup from "../ui/ScrollingPage";
import useScrollingThrottling from "../hooks/useScrollingThrottling";

function HomePage() {
  const { windowHeight } = useScrollingThrottling({ delay: 600 });

  const articleRef = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <div className="home-page">
      <Scrollup
        scrollDirection={
          windowHeight > 400 && windowHeight < 2000
            ? "down"
            : windowHeight > 6000
              ? "up"
              : ""
        }
      />
      <Hero />
      <Main className="main">
        <article ref={(el) => (articleRef.current[0] = el)}>
          <About />
        </article>
        <article ref={(el) => (articleRef.current[1] = el)}>
          <Projects />
        </article>
        <article ref={(el) => (articleRef.current[3] = el)}>
          <Skills />
        </article>
        <article ref={(el) => (articleRef.current[2] = el)}>
          <Resume />
        </article>
        <article ref={(el) => (articleRef.current[4] = el)}>
          <Contact />
        </article>
      </Main>
    </div>
  );
}

export default HomePage;
