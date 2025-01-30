import techFinder from "../utils/techFinder";

export const projects = [
  {
    title: "adnexioHR",
    subtitle: "Developed time & attendance module for HR Management System",
    tech: [techFinder("React"), techFinder("Material UI")].filter(Boolean),
    logo: "/adnexio_logo.png",
    image: "/sample_image_1.jpg",
  },
  {
    title: "decoris",
    subtitle: "Bugfixing for backend",
    tech: [techFinder("Node.js"), techFinder("MongoDB")].filter(Boolean),
    logo: "/adnexio_logo.png",
    image: "/sample_image_1.jpg",
  },
];
