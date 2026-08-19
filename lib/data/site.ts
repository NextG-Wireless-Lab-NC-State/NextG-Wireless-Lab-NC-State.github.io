// Facilities, news, and events.

export type Facility = {
  name: string;
  blurb: string;
  image?: string;
  url?: string;
};

export const facilities: Facility[] = [
  {
  name: "AERPAW Research Platform",
  blurb:
    "Advanced wireless research platform for experimentation with aerial and ground wireless networked systems, used for field trials, propagation studies, and autonomous vehicle network research.",
  image: "/facilities/aerpaw-drone.jpeg",
  url: "https://aerpaw.org/",
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
  image?: string; // path under /public
  logo?: boolean; // show the whole mark on a light ground instead of cropping
};

export const news: NewsItem[] = [
  {
    id: 1,
    headline: "SkyShare accepted to ACM MobiCom 2026",
    excerpt:
      "SkyShare has been accepted to ACM MobiCom 2026.",
    date: "",
    placeholder: false,
    image: "/news/acm.png",
    logo: true,
  },
  {
    id: 2,
    headline: "SlotScope accepted to ACM WiNTECH 2026",
    excerpt:
      "SlotScope has been accepted to ACM WiNTECH 2026.",
    date: "",
    placeholder: false,
    image: "/news/acm.png",
    logo: true,
  },
  {
    id: 3,
    headline: "Two tutorials accepted to IEEE MILCOM 2026",
    excerpt:
      "Two tutorials — T1: “Autonomous AI/ML for AI-native 6G Networks” and T2: “NTN in 5G-Advanced and 6G” — have been accepted to IEEE MILCOM 2026. Each features hands-on demonstrations: NeuralSmith for T1 and SpaceNet for T2.",
    date: "",
    placeholder: false,
    image: "/news/ieee-milcom.png",
    logo: true,
  },
  {
    id: 4,
    headline: "CellSense accepted to IEEE MILCOM 2026",
    excerpt:
      "CellSense has been accepted to IEEE MILCOM 2026.",
    date: "",
    placeholder: false,
    image: "/news/ieee-milcom.png",
    logo: true,
  },
  {
    id: 5,
    headline: "TelcoAgent accepted to IEEE GLOBECOM 2026",
    excerpt:
      "TelcoAgent has been accepted to IEEE GLOBECOM 2026.",
    date: "",
    placeholder: false,
    image: "/news/ieee-globecom.webp",
    logo: true,
  },
  {
    id: 6,
    headline: "NSF VINES Track 1 award for the ARMANI project",
    excerpt:
      "Received an NSF VINES Track 1 award for ARMANI project, in collaboration with Yale University.",
    date: "",
    placeholder: false,
    image: "/news/nsf.png",
    logo: true,
  },
  {
    id: 7,
    headline: "CellSense qualifies for the MILCOM 2026 Young Scholar Workshop",
    excerpt:
      "CellSense has qualified for the Young Scholar Workshop (YSW) poster session.",
    date: "",
    placeholder: false,
    image: "/news/ieee-milcom.png",
    logo: true,
  },
  {
    id: 8,
    headline: "TelcoAgent featured in RCRWireless",
    excerpt:
      "TelcoAgent has been accepted to IEEE GLOBECOM 2026, and has featured in RCRWireless.",
    date: "",
    placeholder: false,
    image: "/news/rcr-wireless.png",
    logo: true,
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
  "The xGI Initiative at NC State advances the future of intelligent wireless networked systems through interdisciplinary research spanning communications, networking, AI, sensing, hardware, and autonomous applications. By integrating innovations across the wireless stack — from RF platforms and O-RAN architectures to AI-native networks and large-scale testbeds — xGI develops transformative technologies for next-generation communication, sensing, and connected systems. Through strong partnerships with industry and government, xGI accelerates innovation and real-world impact while positioning NC State as a national leader in next-generation technologies.";

export const VISION =
  "xGI envisions a future where communications, sensing, and intelligence are deeply integrated into a unified wireless fabric.";
