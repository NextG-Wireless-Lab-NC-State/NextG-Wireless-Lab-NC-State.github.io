// Facilities, news, and events.

export type Facility = {
  name: string;
  blurb: string;
  image?: string; // path under /public, where a photo is available
};

export const facilities: Facility[] = [
  {
    name: "AERPAW Research Platform",
    blurb:
      "Advanced wireless research platform for experimentation with aerial and ground wireless systems, used for field trials, propagation studies, and autonomous vehicle network research.",
    image: "/facilities/aerpaw-drone.jpeg",
  },
  {
    name: "O-RAN Testbed",
    blurb:
      "Open, programmable radio access network testbed for prototyping and validating O-RAN and AI-RAN architectures, spectrum sharing, and intelligent radio control.",
    image: "/facilities/oran.png",
  },
  {
    name: "GPU Servers",
    blurb:
      "High-performance GPU computing resources supporting large-scale AI/ML model training, foundation models, and data-intensive wireless research.",
    image: "/facilities/gpu.jpg",
  },
  {
    name: "Robotics Facility",
    blurb:
      "Facility for robotics, UAV, and autonomous systems experimentation, enabling integration of wireless, sensing, and control for real-world validation.",
    image: "/facilities/robotics.jpg",
  },
];

// Placeholders — final news content to be supplied by xGI.
export type NewsItem = {
  id: number;
  headline: string;
  excerpt: string;
  date: string;
  placeholder: boolean;
};

export const news: NewsItem[] = [
  {
    id: 1,
    headline: "News story 1 — headline placeholder",
    excerpt: "Short excerpt placeholder. Replace with final xGI news content.",
    date: "Date placeholder",
    placeholder: true,
  },
  {
    id: 2,
    headline: "News story 2 — headline placeholder",
    excerpt: "Short excerpt placeholder. Replace with final xGI news content.",
    date: "Date placeholder",
    placeholder: true,
  },
  {
    id: 3,
    headline: "News story 3 — headline placeholder",
    excerpt: "Short excerpt placeholder. Replace with final xGI news content.",
    date: "Date placeholder",
    placeholder: true,
  },
  {
    id: 4,
    headline: "News story 4 — headline placeholder",
    excerpt: "Short excerpt placeholder. Replace with final xGI news content.",
    date: "Date placeholder",
    placeholder: true,
  },
];

// Placeholders — final event details to be supplied by xGI.
export type EventItem = {
  id: number;
  title: string;
  date: string;
  location: string;
  speaker: string;
  topic: string;
  placeholder: boolean;
  past?: boolean;
  url?: string;
  image?: string; // path under /public, shown darkened behind the date
};

export const events: EventItem[] = [
  {
    id: 3,
    title: "OAI Foundation Hands-on Workshop at NC State",
    date: "Oct 13–14, 2026",
    location: "Hunt Library, NC State",
    speaker: "OpenAirInterface (OAI) Foundation",
    topic: "Hands-on with the OAI software stack — RAN, Core Network & OAM",
    placeholder: false,
    url: "https://www.eventbrite.fr/e/oai-foundation-hands-on-workshop-at-north-carolina-state-university-tickets-1994152101617?aff=oddtdtcreator",
    image: "/events/oai-workshop.webp",
  },
];

export const CONTACT_EMAIL = "xgi-contact@ncsu.edu";

export const MISSION =
  "The xGI Initiative at NC State advances the future of intelligent wireless systems through interdisciplinary research spanning communications, networking, AI, sensing, hardware, and autonomous applications. By integrating innovations across the wireless stack — from RF platforms and O-RAN architectures to AI-native networks and large-scale testbeds — xGI develops transformative technologies for next-generation communication, sensing, and connected systems. Through strong partnerships with industry and government, xGI accelerates innovation and real-world impact while positioning NC State as a national leader in next-generation technologies.";

export const VISION =
  "xGI envisions a future where communications, sensing, and intelligence are deeply integrated into a unified wireless fabric.";
