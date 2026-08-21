import type { Project } from "@/lib/projects";

type PlateProps = {
  project: Project;
  className?: string;
};

export function Plate({ project, className = "" }: PlateProps) {
  // no screenshot yet so draw a pattern instead of a broken image
  if (!project.image) {
    return (
      <div className={`plate plate--gen ${className}`}>
        <span className="plate__label">{project.title}</span>
      </div>
    );
  }

  return (
    <div className={`plate ${className}`}>
      {/* plain img not next/image because next wraps it in its own span
          with inline styles which fights the plate layering */}
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
