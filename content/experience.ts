/** A run of text where `value` is highlighted in the accent colour. */
export type StatPart = { before?: string; value: string; after?: string };

export type ExperienceEntry = {
  date: string;
  title: string;
  titleSuffix?: string;
  subtitle?: string;
  description: string;
  stats?: StatPart[];
  stack?: string;
  separated?: boolean;
};

export const experienceHeader = {
  org: "Defence Science and Technology Agency",
  meta: "Singapore · 3 internships",
};

export const experience: ExperienceEntry[] = [
  {
    date: "Jun – Aug 2026",
    title: "AI Development Intern",
    description:
      "Proof-of-concept multi-agent logistics control tower that turns natural-language operator requests into routing and dispatch actions.",
    stats: [
      { value: "3", after: " agents · " },
      { value: "17", after: " tools · " },
      { value: "90%", after: " tool-call correctness" },
    ],
    stack: "LangGraph · OR-Tools · NetworkX · DeepEval",
  },
  {
    date: "Jun – Aug 2025",
    title: "AI Research Intern",
    description: "LLM-agent social media simulation for studying misinformation propagation (see Research).",
  },
  {
    date: "Feb – May 2024",
    title: "Software Development Intern",
    description:
      "Real-time drone rapid mapping: georeferences live video into GeoTIFF orthoimages mid-flight, integrated into the Ground Control Station.",
    stats: [{ before: "Capacity ", value: "70 → 1,100", after: " frames · ~37 min of flight" }],
    stack: "GeoServer · React · PostgreSQL/PostGIS",
  },
  {
    date: "2022 – 2024",
    title: "Senior Geospatial Mapper",
    titleSuffix: "· National Service",
    subtitle: "SAF Mapping Unit, Digital and Intelligence Service",
    description:
      "Led ~100 personnel at Singapore's national mapping agency; produced and validated geospatial products in QGIS and ArcGIS for military and government clients.",
    separated: true,
  },
];
