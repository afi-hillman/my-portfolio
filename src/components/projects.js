import techFinder from "../utils/techFinder";

export const projects = [
  {
    title: "adnexioHR",
    subtitle: "Developed time & attendance module for HR Management System",
    tech: [techFinder("React"), techFinder("Material UI")].filter(Boolean),
    logo: "/adnexio_logo.png",
    image: "/project_adnexio_time_attendance.png",
  },
  {
    title: "decoris",
    subtitle: "Bugfixing for backend",
    tech: [techFinder("Node.js"), techFinder("MongoDB")].filter(Boolean),
    logo: "/decoris_logo.svg",
    image: "/project_decoris.png",
  },
];
