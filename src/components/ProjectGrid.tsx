import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    // 12 cols is the standard choice because it divides evenly by
    // 2, 3, 4 and 6
    <div className="grid grid-cols-12 gap-4">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
