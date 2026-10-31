import Image from "next/image";
import { User } from "lucide-react";
import { profile } from "@/content/profile";
import { hasPublicAsset } from "@/lib/assets";

const linkClass = "flex min-h-11 items-center text-accent";

export function Hero() {
  const hasPhoto = hasPublicAsset(profile.photo.src);
  const { tagline } = profile;

  return (
    <section id="top" className="col flex flex-wrap items-center gap-10 pt-[104px] pb-[88px]">
      <div className="flex min-w-0 grow-[999] basis-[420px] flex-col gap-6">
        <h1
          className="rise m-0 text-[52px] leading-[1.1] font-bold tracking-[-0.03em]"
          style={{ animationDelay: "0ms" }}
        >
          {profile.name}
        </h1>
        <p className="rise m-0 max-w-[56ch] text-lg leading-[1.6]" style={{ animationDelay: "240ms" }}>
          {tagline.before}
          <span className="text-accent">{tagline.accent}</span>
          {tagline.after}
        </p>
        <p className="rise m-0 text-muted" style={{ animationDelay: "360ms" }}>
          {profile.summary}
        </p>
        <div className="rise flex flex-wrap gap-x-6 text-[15px] font-medium" style={{ animationDelay: "600ms" }}>
          <a href={`mailto:${profile.email}`} className={linkClass}>
            Email
          </a>
          <a href={profile.github} className={linkClass}>
            GitHub
          </a>
          <a href={profile.linkedin} className={linkClass}>
            LinkedIn
          </a>
          <a href={profile.cv} className={linkClass}>
            CV (PDF)
          </a>
        </div>
      </div>

      {/* Once the hero wraps (narrow screens) the photo sits above the text; DOM order keeps the h1 first. */}
      <figure
        className="rise m-0 max-w-[220px] flex-[1_1_180px] max-[687px]:order-first"
        style={{ animationDelay: "300ms" }}
      >
        {hasPhoto ? (
          <div className="relative aspect-square w-full overflow-hidden rounded-full border border-border">
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              fill
              priority
              sizes="220px"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            role="img"
            aria-label="Profile photo placeholder"
            className="flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-full border border-dashed border-muted bg-surface text-muted"
          >
            <User size={56} strokeWidth={1.2} aria-hidden="true" />
            <span className="text-xs tracking-[0.02em]">{profile.photoPlaceholderLabel}</span>
          </div>
        )}
      </figure>
    </section>
  );
}
