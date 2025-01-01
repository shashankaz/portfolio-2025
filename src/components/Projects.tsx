import Link from "next/link";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Algomorph",
    description:
      "DSA Algorithm Explorer built with NextJs, TailwindCSS, Appwrite and Prisma.",
    src: "/project-1.png",
    projectLink: "https://algomorph.vercel.app",
  },
  {
    title: "Pensieve",
    description:
      "Blog Application built with ReactJS, TailwindCSS, MongoDB and GeminiAPI.",
    src: "/project-2.png",
    projectLink: "https://pensieve-pro.vercel.app",
  },
  {
    title: "BrainChick",
    description:
      "Online Quiz Application built with ReactJS, ExpressJS, MongoDB and Firebase.",
    src: "/project-3.png",
    projectLink: "https://brain-chick.vercel.app",
  },
];

const Projects = () => {
  return (
    <section className="py-8 flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold">My Latest Projects</h2>
        <p className="mt-2">Check out some of my most recent work.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            src={project.src}
            projectLink={project.projectLink}
          />
        ))}
      </div>
      <Link
        className="border-b-2 border-blue-500 focus:outline-none mt-2 w-fit"
        href="/github"
      >
        All Projects
      </Link>
    </section>
  );
};

export default Projects;
