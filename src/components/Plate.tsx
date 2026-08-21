/* eslint-disable @next/next/no-img-element */
import type { Project } from "@/lib/projects";

type PlateProps = {
  project: Project;
  className?: string;
};

export function Plate({ project, className = "" }: PlateProps) {
  // no screenshot yet -> generated pattern instead of a broken image
  if (!project.image) {
    return (
      <div className={`plate plate--gen ${className}`}>
        <span className="plate__label">{project.title}</span>
      </div>
    );
  }

  return (
    <div className={`plate ${className}`}>
      {/* plain <img>, not next/image - see note below */}
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
