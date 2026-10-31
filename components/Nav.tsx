"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";

const linkClass = "flex min-h-11 items-center";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg">
      <nav aria-label="Main" className="col">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex min-h-11 items-center text-xl font-bold">
            {profile.initials}
          </a>
          <div className="flex items-center gap-7 text-[13px] tracking-[0.02em]">
            <div className="hidden items-center gap-7 min-[680px]:flex">
              {profile.nav.map((l) => (
                <a key={l.href} href={l.href} className={linkClass}>
                  {l.label}
                </a>
              ))}
            </div>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-transparent text-text min-[680px]:hidden"
            >
              {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
        {open && (
          <div id="mobile-menu" className="flex flex-col border-t border-border pb-2 text-[15px]">
            {profile.nav.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`${linkClass} min-h-12`}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
