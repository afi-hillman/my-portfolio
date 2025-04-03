import techFinder from "../utils/techFinder";

export const projects = [
  {
    id: 1,
    url: "adnexioHR",
    link: "https://adnexio.jobs/",
    title: "adnexioHR",
    subtitle:
      "Developed time & attendance module for HR Management System of INVOKE's in-house product",
    tech: [techFinder("React"), techFinder("Material UI")].filter(Boolean),
    logo: "/adnexio_logo.png",
    image: "/project_adnexio_time_attendance.png",
    description: (
      <div className="flex flex-col gap-8">
        <p>
          An employee time and attendance feature where it registers the
          user&apos;s clock in and clock out time, along with status and
          location from where the user accessed it from. The project is
          accessible only to authorized users through a paid subscription model,
          with no public preview available.
        </p>
        <p>
          The Time and Attendance Module is a sophisticated web application
          designed to revolutionize workforce time tracking and productivity
          monitoring. At its core, the system provides employees with an
          intuitive interface to log their work hours precisely, featuring a
          real-time timer that allows users to start and stop their work
          duration with ease. A unique aspect of the application is its
          geolocation tracking, which adds an extra layer of verification to
          clock-in and clock-out processes, ensuring accurate and transparent
          time reporting.
        </p>
      </div>
    ),
    description2: (
      <div className="flex flex-col gap-8">
        <p>
          The module goes beyond simple time tracking by offering comprehensive
          status monitoring and detailed reporting capabilities. Employees can
          add contextual notes to their time entries, providing additional
          insights into their work activities. The system intelligently tracks
          various employment statuses such as overtime, late arrivals,
          incomplete hours, and completed work hours. This rich set of features
          allows both employees and administrators to gain deep insights into
          workforce productivity, work patterns, and potential areas for
          improvement.
        </p>
        <p>
          For administrators, the module presents a powerful dashboard that
          consolidates time tracking data across the entire organization. The
          centralized view enables management to monitor employee work hours,
          analyze productivity trends, and make data-driven workforce management
          decisions. With its responsive design supporting both mobile and
          desktop platforms, the Time and Attendance Module offers a flexible,
          user-friendly solution that streamlines time tracking, supports
          accurate payroll processing, and promotes transparency in workplace
          time management.
        </p>
      </div>
    ),
    gif: "/time_attendance_preview_1.gif",
    gif2: "/time_attendance_preview_2.gif",
  },
  {
    id: 2,
    url: "decoris",
    link: "https://agy.decoris.io/",
    title: "decoris",
    subtitle:
      "Backend bug fixes & optimizations for INVOKE's in-house digital marketing solution product",
    tech: [
      techFinder("Node.js"),
      techFinder("MongoDB"),
      techFinder("GraphQL"),
      techFinder("Typescript"),
    ].filter(Boolean),
    logo: "/decoris_logo.svg",
    image: "/project_decoris.png",
    description: (
      <div className="flex flex-col gap-8">
        <p>
          Worked on bug fixes for the backend of the product for about 4 weeks
          while learning all the new tech stacks used in the product. The
          project is accessible only to authorized users through a paid
          subscription model, with no public preview available.
        </p>
      </div>
    ),
    gif: "/decoris_preview_1.gif",
  },
  {
    id: 3,
    url: "parkson-credit",
    link: "https://parksoncredit.com.my/",
    title: "Parkson Credit",
    subtitle: "Primary frontend developer for Parkson Credit website",
    tech: [techFinder("Next.js"), techFinder("Tailwind")].filter(Boolean),
    logo: "/parkson_credit_logo.png",
    image: "/project_parkson_credit.png",
    description: (
      <div className="flex flex-col gap-8">
        <p>
          Developed multiple pages for Parkson Credit website such as customer
          service forms, corporate and consumer enquiry forms, corporate address
          page, governance page, CSR page, career page and navigation menu.
        </p>
      </div>
    ),
    gif: "/parkson_preview_1.gif",
  },
];
