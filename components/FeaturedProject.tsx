import Image from "next/image";
import type { Project } from "@/content/projects";
import { findPublicMedia } from "@/lib/assets";
import { AutoVideo } from "./AutoVideo";
import { StatRow } from "./StatRow";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function FeaturedProject({ project, className = "" }: { project: Project; className?: string }) {
  const { media } = project;
  const found = findPublicMedia(media.base);

  const frame = (
    <div className="overflow-hidden rounded-[10px] border border-border bg-surface">
      <div className="flex h-8 items-center gap-1.5 border-b border-border px-3" aria-hidden="true">
        <span className="size-[9px] rounded-full bg-border" />
        <span className="size-[9px] rounded-full bg-border" />
        <span className="size-[9px] rounded-full bg-border" />
      </div>
      <div className="relative w-full" style={{ aspectRatio: media.aspect }}>
        {found?.kind === "video" && (
          <AutoVideo src={found.src} label={media.alt} className="absolute inset-0 size-full object-cover object-top" />
        )}
        {found?.kind === "image" && (
          <Image
            src={found.src}
            alt={media.alt}
            fill
            sizes="(min-width: 1008px) 960px, 100vw"
            className="object-cover object-top"
          />
        )}
        {!found && (
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-[13px] text-muted">
            {media.placeholder}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <article className={`flex flex-col gap-4 ${className}`}>
      {project.liveUrl ? (
        <a href={project.liveUrl} {...external} aria-label={`Visit ${project.name}`} className="block">
          {frame}
        </a>
      ) : (
        frame
      )}
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="m-0 text-xl font-bold">
          {project.liveUrl ? (
            <a href={project.liveUrl} {...external}>
              {project.name}
            </a>
          ) : (
            project.name
          )}{" "}
          <span className="font-normal text-muted">{project.role}</span>
        </h3>
        <StatRow parts={project.stats} className="text-[13px]" />
      </div>
      {project.description && <p className="m-0">{project.description}</p>}
      {project.bullets && (
        <ul className="m-0 flex list-disc flex-col gap-1.5 pl-5">
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {(project.liveUrl || project.githubUrl) && (
        <div className="flex gap-6 text-[15px] font-medium text-accent">
          {project.liveUrl && (
            <a href={project.liveUrl} {...external} className="flex min-h-11 items-center">
              Live site →
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} {...external} className="flex min-h-11 items-center">
              GitHub →
            </a>
          )}
        </div>
      )}
    </article>
  );
}
