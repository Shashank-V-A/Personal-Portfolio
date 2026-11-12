"use client";

import { useState } from "react";

/** Official brand icons via Devicon & Simple Icons CDN */
const skillIconUrls: Record<string, string> = {
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  SQL: "https://cdn.simpleicons.org/sqlite/003B57",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/ffffff",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/38BDF8",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  FastAPI: "https://cdn.simpleicons.org/fastapi/009688",
  "REST APIs": "https://cdn.simpleicons.org/swagger/85EA2D",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  SQLite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  Neo4j:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
  Supabase: "https://cdn.simpleicons.org/supabase/3FCF8E",
  Prisma: "https://cdn.simpleicons.org/prisma/ffffff",
  AWS: "https://cdn.simpleicons.org/amazonaws/FF9900",
  "Google Cloud":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  Vercel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub Actions": "https://cdn.simpleicons.org/githubactions/2088FF",
  "CI/CD": "https://cdn.simpleicons.org/githubactions/2088FF",
  "Web Scraping":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Tableau: "/skills/tableau.png",
  "Power BI": "/skills/powerbi.png",
  Stellar: "https://cdn.simpleicons.org/stellar/7D00FF",
};

export function formatSkillLabel(name: string) {
  return name.replace(/\./g, " ").toUpperCase();
}

export function SkillBrandIcon({
  name,
  size = 44,
}: {
  name: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);
  const src = skillIconUrls[name];

  if (!src || failed) {
    const initials = name
      .split(/[\s.]+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return (
      <div
        className="flex items-center justify-center rounded-lg bg-accent/15 font-bold text-accent-light"
        style={{ width: size, height: size, fontSize: size * 0.32 }}
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className="h-full w-full object-contain"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
