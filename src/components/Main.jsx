import { useIntersectionObserver } from "../useIntersectionObserver";
import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { About } from "./AboutMe"



export function Main() {
  const articleRef = useIntersectionObserver({
    threshold: 0.1, 
     rootMargin: "0px 0px -10% 0px",
  });


  return (
    <main className="main">
      
      <article ref={(el) => (articleRef.current[0] = el)}>
        <About />
      </article>
      <article ref={(el) => (articleRef.current[1] = el)}>
        <Projects />
      </article>
      <article ref={(el) => (articleRef.current[2] = el)}>
        <Resume />
      </article>
      <article ref={(el) => (articleRef.current[3] = el)}>
        <Skills />
      </article>
      <article ref={(el) => (articleRef.current[4] = el)}>
        <Contact />
      </article>


    </main>
  );
}



