import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <p className="col m-0 text-xs text-muted">{profile.footer}</p>
    </footer>
  );
}
