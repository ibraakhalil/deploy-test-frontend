import { projects } from "@/components/project/project.data";
import { ProjectCard } from "./project-card";

export function OurProjects() {
  return (
    <div className="mx-auto px-4 tablet:px-10 desktop:px-0">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-6 desktop:grid-cols-4 [&>*]:w-full">
        {projects.map((project: (typeof projects)[0]) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
