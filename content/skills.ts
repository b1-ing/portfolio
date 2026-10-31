export type SkillGroup = { label: string; items: string };

export const skills: SkillGroup[] = [
  { label: "Languages", items: "Python, C, C++, Java, Haskell, TypeScript, JavaScript, Verilog, Assembly" },
  { label: "AI / ML", items: "PyTorch, scikit-learn, LangGraph, LangSmith, DeepEval, OR-Tools, OpenAI API" },
  {
    label: "Infra & data",
    items: "React, Next.js, PostgreSQL/PostGIS, GeoServer, NetworkX, Docker, GCP, Vercel, QGIS, ArcGIS",
  },
];
