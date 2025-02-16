import techFinder from "../utils/techFinder";

export const projects = [
  {
    id: 1,
    title: "adnexioHR",
    subtitle: "Developed time & attendance module for HR Management System",
    tech: [techFinder("React"), techFinder("Material UI")].filter(Boolean),
    logo: "/adnexio_logo.png",
    image: "/project_adnexio_time_attendance.png",
    description: (
      <div>
        <p>
          An employee time and attendance feature where it registers the
          user&apos;s clock in and clock out time, along with status and
          location from where the user accessed it from.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum.
        </p>
      </div>
    ),
    gif: "/sample_gif.gif",
  },
  {
    id: 2,
    title: "decoris",
    subtitle: "Backend bug fixes & optimizations",
    tech: [
      techFinder("Node.js"),
      techFinder("MongoDB"),
      techFinder("GraphQL"),
      techFinder("Typescript"),
    ].filter(Boolean),
    logo: "/decoris_logo.svg",
    image: "/project_decoris.png",
    gif: "/sample_gif_2.gif",
  },
  {
    id: 3,
    title: "Parkson Credit",
    subtitle: "Frontend development",
    tech: [techFinder("Next.js"), techFinder("Tailwind")].filter(Boolean),
    logo: "/decoris_logo.svg",
    image: "/project_decoris.png",
    gif: "/sample_gif.gif",
  },
];
