export type Project = {
  // slug is a url-safe id
  slug: string;

  title: string;

  kind: "Web app" | "Game";

  year: string;

  featured?: boolean;
  wip?: boolean;

  // Card copy
  summary: string;

  // Modal copy: full-story
  description: string;

  role: string;

  tags: readonly string[];

  live: string | null;

  repo: string;

  image: string | null;
  video: string | null;
};

export const PROJECTS: readonly Project[] = [
  {
    slug: "playloggd",
    title: "Playloggd",
    kind: "Web app",
    year: "2026",
    featured: true,
    summary:
      "Track your backlog, import your entire Steam library in one go, and get an AI recommendation for what to play next — with reasoning tied to what you've actually rated.",
    description:
      "Track your game backlog, import your entire Steam library in one go, and get an AI recommendation for what to play next based on what you've actually rated. Steam and IGDB don't agree on how games are named, so I built a layered matcher — exact, then cleaned, then fuzzy ranked by popularity — with a review screen so you confirm matches before anything is imported. Row-level security is enforced at the database, and every external call degrades gracefully rather than crashing when a service is slow.",
    role: "Solo | design, front end, back end, schema, AI integration.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Drizzle",
      "Supabase",
      "Claude API",
      "IGDB",
      "Steam API",
    ],
    live: "https://playloggd.adammokdad.com",
    repo: "https://github.com/adam5192/game-backlog-tracker",
    image: null, // TODO: screenshot the stats page + Steam import review
    video: null,
  },
  {
    slug: "deepseeker",
    title: "DeepSeeker",
    kind: "Game",
    year: "2024",
    featured: true,
    summary:
      "A 2D survival crafting game with diving and mining mechanics, built in Unity. I handled core gameplay, UI design, and animation integration.",
    description:
      "A 2D survival crafting game with diving and mining mechanics, built in Unity as a group project. I handled core gameplay functionality, UI design, and implementing the animations.",
    role: "Team of four | core gameplay, UI design, animation integration.",
    tags: ["Unity", "C#", "2D", "UI Design", "Group Project"],
    live: "https://nessyu.itch.io/deepseeker",
    repo: "https://github.com/MatthewBoden/DATT-2310-DeepSeeker",
    image: "/images/deepseeker.png",
    video: "/videos/deepseeker.mp4",
  },
  {
    slug: "tripdrop",
    title: "TripDrop",
    kind: "Web app",
    year: "2025",
    summary:
      "Plan trips, log activities with ratings and categories, and watch it all land as pins on an interactive map.",
    description:
      "A trip planning and tracking app for organizing your travels. Create trips, log your favourite activities with ratings and categories, and see everything come together as pins on an interactive map.",
    role: "Solo | full stack.",
    tags: ["JavaScript", "Vite", "Supabase", "Leaflet", "Solo Dev"],
    live: "https://tripdrop.adammokdad.com",
    repo: "https://github.com/adam5192/tripdrop",
    image: "/images/tripdrop.png",
    video: "/videos/tripdrop.mp4",
  },
  {
    slug: "notely",
    title: "Notely",
    kind: "Web app",
    year: "2025",
    summary:
      "Full-stack note taking with real-time sync and authentication, built across the whole stack.",
    description:
      "A full-stack note-taking web app with real-time sync and authentication. Built across the entire stack — MongoDB and Firebase on the back end, clean responsive UI on the front.",
    role: "Solo | full stack.",
    tags: ["Next.js", "React", "Firebase", "MongoDB", "JavaScript", "HTML/CSS"],
    live: "https://adam5192.github.io/Note-Taking-App/",
    repo: "https://github.com/adam5192/Note-Taking-App",
    image: "/images/notely.png",
    video: "/videos/notely.mp4",
  },
  {
    slug: "spellstorm-academy",
    title: "Spellstorm Academy",
    kind: "Game",
    year: "2024",
    summary:
      "A Unity game designed, programmed, and shipped entirely solo, from core mechanics to final build.",
    description:
      "A solo-developed Unity game: designed, programmed, and shipped entirely independently, from core mechanics to final build.",
    role: "Solo | design, programming, build.",
    tags: ["Unity", "C#", "Solo Dev", "Game Design", "UI Design"],
    live: "https://adam5192.itch.io/spellstorm-academy",
    repo: "https://github.com/adam5192/SpellstormAcademy",
    image: "/images/spell.png",
    video: "/videos/spell.mp4",
  },
  {
    slug: "eventhub",
    title: "EventHub",
    kind: "Web app",
    year: "2026",
    wip: true,
    summary:
      "Search nearby events by keyword, city, date range and distance, on an interactive map.",
    description:
      "Full-stack event discovery app. Search nearby events by keyword, city, date range, and distance. Features an interactive map with markers, debounced search, paginated results, direct ticket links, and race condition handling via AbortController.",
    role: "Solo | full stack.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Ticketmaster API",
      "Google Maps API",
    ],
    live: null, // no deploy yet
    repo: "https://github.com/adam5192/eventhub",
    image: "/images/event.png",
    video: "/videos/event.mp4",
  },
];

export const WORK_META = (() => {
  const shipped = PROJECTS.filter((p) => !p.wip).length;
  const inProgress = PROJECTS.length - shipped;

  return `${String(shipped).padStart(2, "0")} shipped · ${String(
    inProgress,
  ).padStart(2, "0")} in progress`;
})();
