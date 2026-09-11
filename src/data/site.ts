/* ==================================================================
 *  VGEC ROBOTICS CLUB — SINGLE SOURCE OF TRUTH
 * ------------------------------------------------------------------
 *  Everything on the website is driven by this file.
 *  To update the site, edit the data below — you never need to touch
 *  the components. To swap images, drop files in /public and point the
 *  paths here (e.g. "/images/team/alex.jpg"). Placeholder images use
 *  picsum.photos so the layout looks real before you add your own.
 * ================================================================== */

export type NavItem = { id: string; label: string };

export type Social = {
  label: string;
  href: string;
  icon: "instagram" | "linkedin" | "github" | "youtube" | "twitter" | "facebook";
};

export type Stat = { value: string; label: string };

export type Domain = {
  /* icon = any lucide-react icon name mapped in Domains.tsx */
  icon: string;
  title: string;
  description: string;
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  status: "Active" | "Completed" | "In R&D";
};

export type Member = {
  name: string;
  role: string;
  image: string;
  socials?: Social[];
};

export type Mentor = {
  name: string;
  title: string;
  department: string;
  image: string;
};
export type GalleryImage = { src: string; caption: string };

export const site = {
  /* ---------- identity ---------- */
  club: {
    name: "IRIS Robotics Club VGEC",
    shortName: "IRIS",
    college: "Vishwakarma Government Engineering College",
    tagline: "We Build Machines That Think.",
    heroSubtitle:
      "The official robotics club of VGEC — designing autonomous systems, competition robots, and the engineers who build them.",
    established: "2025",
    email: "irisroboclub@vgecg.ac.in",
    location: "E block, Vishwakarma Government Engineering College, Chandkheda, Ahmedabad",
    // BASE_URL keeps the logo path correct at any deploy sub-path
    logo: `${import.meta.env.BASE_URL}favicon.svg`,
  },

  /* ---------- navigation (drives the navbar + smooth scroll) ---------- */
  nav: [
    { id: "about", label: "About" },
    { id: "domains", label: "Domains" },
    { id: "projects", label: "Projects" },
    { id: "gallery", label: "Gallery" },
    { id: "members", label: "Team" },
    { id: "contact", label: "Contact" },
  ] as NavItem[],

  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/iris_roboticsclub?stkn=MW5xNm1iOHIyNHh6eA==",
      icon: "instagram",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/iris-robotics-club-8576193b3?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/irisroboticsclubvgec",
      icon: "github",
    },
  ] as Social[],

  /* ---------- hero stats ---------- */
  

  /* ---------- about ---------- */
  about: {
    heading: "Engineering the autonomous future",
    body: [
      "IRIS Robotics Club VGEC is a student-run engineering community where curiosity turns into hardware. We bring together builders across mechanical, electronics, and software disciplines to design robots that solve real problems.",
      "From line-followers to autonomous rovers,  — we learn by building. No experience required, only the will to make things move.",
    ],
    mission:
      "To make hands-on robotics accessible to every VGEC student and to compete with the best teams in the country.",
    vision:
      "A platform where every idea can become a working machine, and every member graduates as a builder.",
  },

  /* ---------- domains / focus areas ---------- */
  domains: [
    
    {
      icon: "Cpu",
      title: "Embedded Systems",
      description:
        "Microcontrollers, sensors, and real-time firmware — the low-level brains behind every build.",
    },
    {
      icon: "Cog",
      title: "Mechanical Design",
      description:
        "CAD, fabrication, and mechanisms engineered for strength, speed, and precision.",
    },
    {
      icon: "Bot",
      title: "Software Systems",
      description:
        "Computer vision, path planning, and reinforcement learning that let our robots perceive and decide. Robot Operating System pipelines for navigation, SLAM, and multi-robot coordination.",
    },
    
    
  ] as Domain[],

  /* ---------- projects ---------- */
  projects: [
    {
      name: "PathFinder",
      tagline: "Maze Solver",
      description:
        "An autonomous maze-solving robot that uses sensors and intelligent path-planning algorithms to navigate complex mazes and find the shortest route.",
      image: `${import.meta.env.BASE_URL}images/projects/maze-solver.jpg`,
      tags: ["IR Sensors", "Path Planning", "Microcontroller"],
      status: "Completed",
    },
    {
      name: "BalanceBot",
      tagline: "Self-Balancing Line Following Robot",
      description:
        "A self-balancing line-following robot that combines real-time motion control and sensor feedback to maintain stability while accurately following a designated path.",
      image: `${import.meta.env.BASE_URL}images/projects/self-balancing-line-follower.jpg`,
      tags: ["IMU", "PID Control", "Line Sensors"],
      status: "Completed",
    },
    {
      name: "TrackBot",
      tagline: "Line Follower",
      description:
        "An autonomous line-following robot that uses IR sensors and real-time control to accurately detect and follow a predefined path.",
      image: `${import.meta.env.BASE_URL}images/projects/line-follower.jpg`,
      tags: ["IR Sensors", "PID Control", "Microcontroller"],
      status: "Completed",
    },
    {
      name: "SpeedRover",
      tagline: "RC Car",
      description:
        "A Bluetooth-controlled RC car powered by ESP32, designed for wireless control with responsive motor driving and smooth maneuverability.",
      image: `${import.meta.env.BASE_URL}images/projects/rc-car.jpg`,
      tags: ["ESP32", "Bluetooth", "Motor Control"],
      status: "Completed",
    },
  ] as Project[],

  /* ---------- gallery ---------- */
  gallery: [
    { src: `${import.meta.env.BASE_URL}images/gallery/gallery-1.jpg`, caption: "" },
    { src: `${import.meta.env.BASE_URL}images/gallery/gallery-2.jpg`, caption: "" },
    { src: `${import.meta.env.BASE_URL}images/gallery/gallery-3.jpg`, caption: "" },
    { src: `${import.meta.env.BASE_URL}images/gallery/gallery-4.jpg`, caption: "" },
  ] as GalleryImage[],

  /* ---------- core team members ---------- */
  members: [
    {
      name: "Harsh Kapadiya",
      role: "President (Technical)",
      image: `${import.meta.env.BASE_URL}images/team/harsh-kapadiya.jpg`,
    },
    {
      name: "Suhaan Vaidh",
      role: "President (Management)",
      image: `${import.meta.env.BASE_URL}images/team/suhaan-vaidh.jpg`,
    },
    {
      name: "Kathan Patel",
      role: "Secretary",
      image: `${import.meta.env.BASE_URL}images/team/kathan-patel.jpg`,
    },
    {
      name: "Ashish Thalod",
      role: "Treasurer",
      image: `${import.meta.env.BASE_URL}images/team/ashish-thalod.jpg`,
    },
  ] as Member[],

  /* ---------- faculty mentors ---------- */
  mentors: [
    {
      name: "Dr. Pragnesh K. Brahmbhatt",
      title: "Convener",
      department: "Head of Department, Mechanical",
      image: "",
    },
    {
      name: "Dr. Hetal A. Joshiara",
      title: "Coordinator",
      department: "Associate Professor, Computer Engineering",
      image: "",
    },
    {
      name: "Dr. Shahid S. Modasiya",
      title: "Technical & Financial Advisor",
      department: "Associate Professor, E&C Engineering",
      image: "",
    },
    {
      name: "Dr. Vaseem G. Qureshi",
      title: "Advisor",
      department: "Assistant Professor, English",
      image: "",
    },
    {
      name: "Prof. Amit R. Agrawal",
      title: "Co-Coordinator",
      department: "Assistant Professor, E&C",
      image: "",
    },
  ] as Mentor[],

  
  /* ---------- join / recruitment ---------- */
  join: {
    heading: "Ready to build the future?",
    body: "We recruit every semester across all branches and years. No prior experience needed — just bring your curiosity. We'll teach you the rest.",
    perks: [
      "Hands-on access to our fully equipped robotics lab",
      "Mentorship from seniors and faculty experts",
      "Compete in national & international competitions",
      "Build a portfolio that gets you hired",
    ],
    ctaLabel: "Apply to Join",
    ctaHref: "#contact",
  },

  /* ---------- contact ---------- */
  contact: {
    heading: "Get in touch",
    body: "Questions, sponsorship, or collaboration? Drop us a line and our team will get back to you.",
    // The site's own form (see Contact.tsx) posts straight into this Google Form's
    // responses — visitors never see Google's UI, just our styled form.
    // 1) googleFormId: the id from your form's viewform URL
    //    https://docs.google.com/forms/d/e/<THIS PART>/viewform
    // 2) entry.* ids: open the form -> ⋮ menu -> "Get pre-filled link" -> fill each
    //    field with something recognizable -> "Get link" -> copy it -> the
    //    entry.123456789 number next to each field is what goes below.
    googleFormId: "1FAIpQLSf9eyU6nyM29Asjq29PbFem8ok1WMK3Eq85BmfluwVmrVBJ9A",
    googleFormFallbackUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSf9eyU6nyM29Asjq29PbFem8ok1WMK3Eq85BmfluwVmrVBJ9A/viewform?usp=dialog",
    fields: {
      name: "entry.764059287",
      email: "entry.474111155",
      subject: "entry.805197608",
      message: "entry.805958587",
    },
  },
};

export type Site = typeof site;
