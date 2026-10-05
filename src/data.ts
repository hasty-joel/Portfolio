import { Project, Experience, Certificate, Testimonial, SkillCategory } from './types';

export const HERO_DATA = {
  name: "ATAMBA JOEL",
  headline: "UI/UX Designer & Developer",
  intro: "Crafting intuitive web interfaces with clean design systems and modern code.",
};

export const ABOUT_DATA = {
  bio: "Software engineer and UI/UX designer from Uganda. I bridge digital design and frontend engineering to build elegant, high-performance web applications.",
  stats: [
    { label: "Projects", value: 12, suffix: "+" },
    { label: "Technologies", value: 18, suffix: "" },
    { label: "GitHub Commits", value: 850, suffix: "+" },
    { label: "Years Experience", value: 4, suffix: "" }
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "UI/UX Design",
    skills: ["Figma", "User Research", "Wireframing", "High-Fidelity Prototyping", "Design Systems", "Interaction Design", "Typography & Color Theory"]
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Supabase", "REST APIs"]
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "aura-design-system",
    name: "Aura UI Design System",
    description: "Refined Figma design system with WCAG AAA accessible components and design tokens.",
    longDescription: "Aura is a modern design system created for consistent visual identities across web apps. It features an extensive Figma library with WCAG AAA contrast pairings, responsive typography, and reusable component variants.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    tags: ["Figma", "UI/UX Design", "Design Systems", "Wireframing", "Prototypes"],
    liveUrl: "https://figma.com/@aura-design-system-mock",
    githubUrl: "https://github.com/joel-atamba/aura-ui-system",
    highlights: [
      "150+ auto-layout components with interactive state variants",
      "WCAG AAA accessible color tokens for dark and light modes",
      "Typography hierarchies with Inter and Space Grotesk pairings",
      "Interactive prototypes mapping education-tech user journeys"
    ]
  },
  {
    id: "stahiza",
    name: "STAHIZA ICT Club Hub",
    description: "Collaborative portal for student developers to share projects and learning resources.",
    longDescription: "Digital hub for STAHIZA ICT Club student developers featuring shared revision notes, project showcases, and coding challenge trackers built from Figma wireframes.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design", "Express"],
    liveUrl: "https://ict-club-hub-stahiza.vercel.app/",
    githubUrl: "https://github.com/joel-atamba/stahiza-ict-club-hub",
    highlights: [
      "Real-time resource sharing boards for students",
      "Interactive coding challenge platform with quick feedback",
      "Clean dark-mode interface styled with Tailwind CSS",
      "Component-driven user flows designed first in Figma"
    ]
  },
  {
    id: "stahiza-ent-desk",
    name: "STAHIZA Entertainment Desk",
    description: "Interactive school event management system with live song voting and talent showcases.",
    longDescription: "STAHIZA Entertainment Desk coordinates school assemblies and events with song requests, talent registrations, and live campus voting polls.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Interaction Design", "Node.js"],
    liveUrl: "https://ict-club-hub-stahiza.vercel.app/",
    githubUrl: "https://github.com/joel-atamba/stahiza-ent-desk",
    highlights: [
      "Live crowd song voting and request queue system",
      "Tactile soundboard dashboard layout with intuitive controls",
      "Interactive retro music visualizer interface",
      "Real-time student poll tallying with visual charts"
    ]
  },
  {
    id: "stahiza-hub",
    name: "STAHIZA Hub Portal",
    description: "Campus intranet aggregating learning assets, library index, and revision networks.",
    longDescription: "Multi-functional school intranet providing file storage for class hand-outs, library book reservation tracking, and revision session coordination.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Information Architecture", "Supabase"],
    liveUrl: "https://stahiza-hub.vercel.app",
    githubUrl: "https://github.com/joel-atamba/stahiza-hub",
    highlights: [
      "Unified educational repository with search filters",
      "Streamlined library index tracking to reduce wait times",
      "Peer study group coordinator with WhatsApp links",
      "Course grade estimator for academic goal setting"
    ]
  },
  {
    id: "laceon-ak-stitches",
    name: "Laceon AK Stitches",
    description: "Tailoring showcase and appointment booking portal with custom fit measurements.",
    longDescription: "Sophisticated boutique catalog web app for bespoke tailoring, featuring interactive design showcases, custom sizing forms, and appointment booking.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind CSS", "Figma", "Visual Design", "EmailJS"],
    liveUrl: "https://laceon-ak-stiches.vercel.app/",
    githubUrl: "https://github.com/joel-atamba/laceon-ak-stitches",
    highlights: [
      "Fashion-inspired typography and minimal layout",
      "Multi-step form capturing client fit measurements",
      "Fluid transitions presenting fabric textures and cuts",
      "Direct appointment booking notifications"
    ]
  },
  {
    id: "status-saver",
    name: "Status Saver Utility",
    description: "Responsive web tool for previewing, curating, and saving status media.",
    longDescription: "Lightweight utility tool for mobile media curation, allowing users to preview, stream, and save status updates locally.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Mobile UX", "Tailwind CSS", "IndexedDB", "Lucide Icons"],
    liveUrl: "https://status-saver-app.vercel.app",
    githubUrl: "https://github.com/joel-atamba/status-saver",
    highlights: [
      "Mobile-first gesture layouts for handheld screens",
      "Instant HTML5 video player for fast streaming",
      "Batch action manager for media organization",
      "Local media gallery categorized by format"
    ]
  },
  {
    id: "ai-study-assistant",
    name: "AI Study Assistant",
    description: "Exam revision tool with personalized summaries, practice quizzes, and progress tracking.",
    longDescription: "Revision companion helping students prepare for national exams using customized study guides, topic summaries, and interactive quizzes.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "UX Design", "Gemini API", "Tailwind CSS"],
    liveUrl: "https://ai-study-assistant.vercel.app",
    githubUrl: "https://github.com/joel-atamba/ai-study-assistant",
    highlights: [
      "Calm, stress-free interface layout with readable type",
      "Dynamic quiz generator with answer explanations",
      "Interactive chat interface with rich markdown support",
      "Topic performance metrics tracking progress"
    ]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "stahiza-president",
    role: "President & Lead UI/UX Designer",
    company: "STAHIZA ICT Club",
    period: "2024 - Present",
    description: [
      "Led developers and designers, establishing a unified Figma workspace for club projects.",
      "Architected the visual design system and frontend layout of the club community portal.",
      "Conducted weekly workshops on Figma wireframing, UX patterns, and modern Tailwind CSS."
    ],
    skills: ["Figma", "UI/UX Design", "Leadership", "React", "Tailwind CSS"]
  }
];

export const CERTIFICATIONS_DATA: Certificate[] = [
  {
    id: "cs50",
    name: "CS50: Introduction to Computer Science",
    issuer: "Harvard University",
    date: "2025",
    credentialUrl: "https://cs50.harvard.edu",
    iconName: "Terminal"
  },
  {
    id: "fcc-responsive",
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    credentialUrl: "https://freecodecamp.org",
    iconName: "Layout"
  },
  {
    id: "google-ai",
    name: "Google AI Essentials",
    issuer: "Google",
    date: "2025",
    credentialUrl: "https://grow.google",
    iconName: "Brain"
  },
  {
    id: "code-with-mosh",
    name: "Mastering React & Node.js",
    issuer: "Code with Mosh",
    date: "2024",
    credentialUrl: "https://codewithmosh.com",
    iconName: "Code"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Emmanuel Ssebuliba",
    role: "Patron / ICT Department",
    company: "Standard High School Zzana (STAHIZA)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    content: "Joel has been an exceptional leader as ICT Club President. His ability to guide other developers, build the club portal, and deliver advanced code is inspiring. He is a natural-born software engineer."
  },
  {
    id: "t2",
    name: "Melissa Namazzi",
    role: "Secretary",
    company: "STAHIZA ICT Club",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    content: "Working with Joel on the Club Hub project was a masterclass in clean design and prompt execution. His passion for AI and full-stack development is infectious, and he's always ready to help anyone debug code."
  },
  {
    id: "t3",
    name: "Alex Kyobe",
    role: "Tech Collaborator",
    company: "STAHIZA Tech Devs",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    content: "Joel's work on PMart and the AI Revision tools shows deep technical capability. He doesn't just build UI; he thinks about API latency, DB index scaling, and premium animations. His future is incredibly bright."
  }
];
