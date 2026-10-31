import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const dynamic = "force-static";
export const alt = profile.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { tagline } = profile;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
          padding: 96,
          background: "#FAFAF7",
          color: "#1A1A1A",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>{profile.name}</div>
        <div style={{ fontSize: 36, lineHeight: 1.4, display: "flex", flexWrap: "wrap" }}>
          <span>{tagline.before}</span>
          <span style={{ color: "#1F4FD8", margin: "0 10px 0 0" }}>{tagline.accent}</span>
          <span>{tagline.after.trim()}</span>
        </div>
      </div>
    ),
    size,
  );
}
