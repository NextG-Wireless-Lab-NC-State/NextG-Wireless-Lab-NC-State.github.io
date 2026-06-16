// Faculty data — sourced ONLY from "xGI at NC State (Responses).xlsx" and the
// xGI / NC State faculty materials. Photos sourced from the provided xGI draft
// (Research_pages.docx). No invented people, titles, or contact details.

export type Faculty = {
  slug: string;
  name: string;
  title: string;
  department: string;
  keywords: string[];
  email?: string;
  website?: string;
  lab?: string;
  photo?: string; // path under /public; omitted -> initials placeholder
  leadership?: string; // e.g. "Co-Director"
};

export const faculty: Faculty[] = [
  {
    slug: "vijay-shah",
    name: "Vijay K. Shah",
    title: "Assistant Professor",
    department: "Electrical and Computer Engineering",
    leadership: "Director",
    keywords: ["5G/6G systems", "Open RAN", "AI-native networks", "Networking"],
    email: "vijay.shah@ncsu.edu",
    website: "https://ece.ncsu.edu/people/vkshah2/",
    photo: "/faculty/vijay-shah.jpg",
  },
  {
    slug: "suresh-venkatesh",
    name: "Suresh Venkatesh",
    title: "Assistant Professor",
    department: "Electrical and Computer Engineering",
    leadership: "Associate Director",
    keywords: ["RF circuits", "mmWave/THz systems", "Antennas", "Wireless PHY"],
    email: "suresh.venkatesh@ncsu.edu",
    website: "https://ece.ncsu.edu/people/svenkat4/",
    photo: "/faculty/suresh-venkatesh.jpg",
  },
  {
    slug: "ismail-guvenc",
    name: "Ismail Guvenc",
    title: "Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["5G/6G", "UAV communications", "mmWave", "Propagation modeling", "Wireless testbeds"],
    email: "iguvenc@ncsu.edu",
    website: "https://ece.ncsu.edu/people/iguvenc/",
    photo: "/faculty/ismail-guvenc.jpg",
  },
  {
    slug: "mihail-sichitiu",
    name: "Mihail L. Sichitiu",
    title: "Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["Wireless networks", "Network emulation", "Digital twins", "Aerial networks"],
    email: "mlsichit@ncsu.edu",
    website: "https://ece.ncsu.edu/people/mlsichit/",
    photo: "/faculty/mihail-sichitiu.jpg",
  },
  {
    slug: "huaiyu-dai",
    name: "Huaiyu Dai",
    title: "Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["AI/ML for wireless", "Distributed learning", "Edge intelligence", "Security & privacy"],
    email: "hdai@ncsu.edu",
    website: "https://ece.ncsu.edu/people/hdai/",
    photo: "/faculty/huaiyu-dai.jpg",
  },
  {
    slug: "wenye-wang",
    name: "Wenye Wang",
    title: "Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["Integrated sensing and communications", "Spectrum surveillance", "IoT applications"],
    email: "wwang@ncsu.edu",
    website: "https://ece.ncsu.edu/people/wwang/",
    photo: "/faculty/wenye-wang.jpg",
  },
  {
    slug: "alexandra-duel-hallen",
    name: "Alexandra Duel-Hallen",
    title: "Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["Wireless communications", "Resource allocation", "Channel modeling", "AERPAW validation", "AI"],
    email: "sasha@ncsu.edu",
    website: "https://ece.ncsu.edu/people/sasha/",
    photo: "/faculty/alexandra-duel-hallen.jpg",
  },
  {
    slug: "ruozhou-yu",
    name: "Ruozhou Yu",
    title: "Assistant Professor",
    department: "Computer Science",
    keywords: ["Satellite communication and computing", "AI for wireless", "Edge AI", "Wireless network security"],
    email: "ryu5@ncsu.edu",
    website: "https://csc.ncsu.edu/people/ryu5/",
    photo: "/faculty/ruozhou-yu.jpg",
  },
  {
    slug: "yuchen-liu",
    name: "Yuchen Liu",
    title: "Assistant Professor",
    department: "Computer Science",
    keywords: ["Wireless networks", "Mobile computing", "Digital twins", "O-RAN", "AI/ML"],
    email: "yuchen.liu@ncsu.edu",
    website: "https://csc.ncsu.edu/people/yliu322/",
    lab: "NICE Lab",
    photo: "/faculty/yuchen-liu.jpg",
  },
  {
    slug: "dara-ron",
    name: "Dara Ron",
    title: "Assistant Research Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["AI-RAN", "5G/6G networking", "AI/ML for wireless"],
    email: "dron@ncsu.edu",
    website: "https://scholar.google.com/citations?user=Y20bNZ8AAAAJ&hl=en",
    photo: "/faculty/dara-ron.jpg",
  },
  {
    slug: "xiaorui-liu",
    name: "Xiaorui Liu",
    title: "Assistant Professor",
    department: "Computer Science",
    keywords: ["Large-scale optimization", "Graph deep learning", "Generative AI", "AI for networking"],
    email: "xliu96@ncsu.edu",
    website: "https://csc.ncsu.edu/people/xliu96/",
    photo: "/faculty/xiaorui-liu.jpg",
  },
  {
    slug: "tianfu-wu",
    name: "Tianfu Wu",
    title: "Associate Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["Continually robust and explainable AI", "Computer vision", "Deep learning"],
    email: "twu19@ncsu.edu",
    website: "https://ece.ncsu.edu/people/twu19/",
    photo: "/faculty/tianfu-wu.jpg",
  },
  {
    slug: "dongkuan-xu",
    name: "Dongkuan (DK) Xu",
    title: "Assistant Professor",
    department: "Computer Science",
    keywords: ["Agentic AI", "Large models", "AI agents"],
    email: "dxu27@ncsu.edu",
    website: "https://csc.ncsu.edu/people/dxu27/",
    photo: "/faculty/dongkuan-xu.jpg",
  },
  {
    slug: "chau-wai-wong",
    name: "Chau-Wai Wong",
    title: "Associate Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["LLM", "Federated learning", "Statistical signal processing"],
    email: "chauwai.wong@ncsu.edu",
    website: "https://ece.ncsu.edu/people/cwong9/",
    photo: "/faculty/chau-wai-wong.jpg",
  },
  {
    slug: "hamid-krim",
    name: "Hamid Krim",
    title: "Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["Statistical signal/image/data analysis", "Machine learning", "AI"],
    email: "ahk@ncsu.edu",
    website: "https://ece.ncsu.edu/people/ahk/",
    photo: "/faculty/hamid-krim.jpg",
  },
  {
    slug: "sevgi-gurbuz",
    name: "Sevgi Z. Gurbuz",
    title: "Associate Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["Radar", "AI/ML", "Cyber-physical human systems"],
    email: "szgurbuz@ncsu.edu",
    website: "https://ece.ncsu.edu/people/szgurbuz/",
    lab: "CI4R Lab",
    photo: "/faculty/sevgi-gurbuz.jpg",
  },
  {
    slug: "ali-gurbuz",
    name: "Ali C. Gurbuz",
    title: "Associate Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["ISAC", "Radar", "AI for RF sensing"],
    email: "acgurbuz@ncsu.edu",
    website: "https://ece.ncsu.edu/people/acgurbuz/",
    lab: "IMPRESS Lab",
    photo: "/faculty/ali-gurbuz.jpg",
  },
  {
    slug: "brian-floyd",
    name: "Brian Floyd",
    title: "Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["Phased arrays", "Transceivers", "Integrated circuits", "Hardware"],
    email: "brian_floyd@ncsu.edu",
    website: "https://ece.ncsu.edu/people/bafloyd/",
    photo: "/faculty/brian-floyd.jpg",
  },
  {
    slug: "jake-adams",
    name: "Jake Adams",
    title: "Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["Antennas", "Electromagnetics", "RF circuits"],
    email: "jjadams2@ncsu.edu",
    website: "https://ece.ncsu.edu/people/jjadams2/",
    photo: "/faculty/jake-adams.jpg",
  },
  {
    slug: "yuan-liu",
    name: "Yuan Liu",
    title: "Assistant Professor",
    department: "Electrical and Computer Engineering, Computer Science",
    keywords: ["Quantum information science and engineering", "Quantum communications"],
    email: "q_yuanliu@ncsu.edu",
    website: "https://ece.ncsu.edu/people/yliu335/",
    photo: "/faculty/yuan-liu.jpg",
  },
  {
    slug: "jaemin-lee",
    name: "Jaemin Lee",
    title: "Assistant Professor",
    department: "Mechanical and Aerospace Engineering",
    keywords: ["Robotics", "Resilient networks", "Network compatibility", "Autonomy"],
    email: "jlee267@ncsu.edu",
    website: "https://mae.ncsu.edu/people/jaemin-lee/",
    photo: "/faculty/jaemin-lee.jpg",
  },
  {
    slug: "zhishan-guo",
    name: "Zhishan Guo",
    title: "Associate Professor",
    department: "Computer Science",
    keywords: ["Real-time systems", "Cyber-physical systems"],
    email: "zguo32@ncsu.edu",
    website: "https://csc.ncsu.edu/people/zguo32/",
    photo: "/faculty/zhishan-guo.jpg",
  },
  {
    slug: "alper-bozkurt",
    name: "Alper Bozkurt",
    title: "Professor",
    department: "Electrical and Computer Engineering",
    keywords: ["Wireless sensors", "Internet of Things", "Biomedical sensing"],
    email: "aybozkur@ncsu.edu",
    website: "https://ece.ncsu.edu/people/aybozkur/",
    photo: "/faculty/alper-bozkurt.jpg",
  },
];

export const facultyBySlug: Record<string, Faculty> = Object.fromEntries(
  faculty.map((f) => [f.slug, f])
);

export function initials(name: string): string {
  const parts = name.replace(/\(.*?\)/g, "").trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}
