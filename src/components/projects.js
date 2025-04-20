import techFinder from "../utils/techFinder";

export const projects = [
  {
    id: 1,
    url: "adnexioHR",
    link: "https://adnexio.jobs/",
    title: "adnexioHR",
    subtitle:
      "Developed time & attendance module for HR Management System of INVOKE's in-house product, collaboration with Tencent.",
    tech: [
      techFinder("React"),
      techFinder("Material UI"),
      techFinder("REST API"),
    ].filter(Boolean),
    logo: "/adnexio_logo.png",
    image: "/project_adnexio_time_attendance.png",
    description: (
      <div className="flex flex-col gap-8">
        <p>
          The Time and Attendance Module is a feature-rich, access-controlled
          system designed for authenticated users under a subscription model. It
          captures user clock-in and clock-out events, pairing them with
          contextual metadata such as geolocation and system time to provide
          reliable and tamper-proof records.
        </p>
        <p>
          To implement location tracking, I utilized the JavaScript{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Geolocation API
          </code>{" "}
          in conjunction with the{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Permissions API
          </code>{" "}
          to determine whether location access had been granted, denied, or
          remained in prompt state. This allowed me to provide conditional UX
          flows and precise error handling based on permission status. The
          captured coordinates were also stored to help identify and verify
          access points.
        </p>
        <p>
          For time tracking, I implemented a live timer using{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            useEffect
          </code>{" "}
          and <code>setInterval</code>, which calculates elapsed seconds in
          real-time using{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            differenceInSeconds
          </code>{" "}
          from the{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            date-fns
          </code>{" "}
          library. The timer is initialized from the persisted{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            clockin.created_at
          </code>{" "}
          timestamp, and auto-clears if both clock-in and clock-out data already
          exist, avoiding unnecessary computations.
        </p>
      </div>
    ),
    description2: (
      <div className="flex flex-col gap-8">
        <p>
          Beyond basic time logging, the module introduces status tracking and
          productivity tagging. Each attendance entry can hold contextual notes
          to capture user intent or reasons for irregularities. I designed this
          to assist in qualitative analysis of quantitative data — such as
          identifying patterns in late arrivals or overtime.
        </p>
        <p>
          The employment status handling includes logic for flagging incomplete
          hours, overtime, and other edge cases. These rules are applied
          dynamically based on a user&apos;s configured schedule and are
          represented in both the UI and the backend data model. To support
          decision-making, I integrated a real-time dashboard for admins, where
          they can view individual and organizational attendance analytics.
        </p>
        <p>
          The system is optimized for both desktop and mobile users, with a
          responsive layout and minimal network overhead. All features were
          designed with scalability in mind — particularly the timer logic,
          which remains lightweight even with frequent re-renders, and the
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Geolocation API
          </code>
          , which degrades gracefully if permissions are not granted.
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
      "Backend bug fixes & optimizations for INVOKE's in-house digital marketing solution product.",
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
          Over the course of four weeks, I worked on backend bug fixes and code
          refactoring for an in-house product, focusing on addressing existing
          issues while simultaneously learning the required tech stack. The
          project is accessible only to authorized users through a paid
          subscription model, with no public preview available. The system was
          built on a Node.js backend, and as a frontend developer, I had to
          quickly ramp up on backend technologies, without any formal handover.
          This was a challenging experience, but it contributed significantly to
          my transition toward full-stack development.
        </p>
        <p>
          One of the first issues I tackled was the consolidation of the{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Content
          </code>{" "}
          and{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Planner
          </code>{" "}
          models. These were previously separate but returned overlapping data.
          I refactored them into a new{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Dashboard
          </code>{" "}
          model, allowing the frontend to make a single API call to retrieve all
          required data, improving performance and simplifying the frontend
          code.
        </p>
      </div>
    ),
    description2: (
      <div className="flex flex-col gap-8">
        <p>
          Another key improvement involved introducing new keys and models to
          support the frontend&apos;s need for additional data. By adding these
          new fields and linking them to the necessary models, I ensured the
          frontend could access and display the required information
          dynamically. This required an understanding of how to structure the
          database and APIs in a way that balanced both performance and
          flexibility.
        </p>
        <p>
          One of the more technical aspects of the refactoring was optimizing
          nested data population. I refactored the existing code to utilize
          Mongoose&apos;s aggregation pipeline. This allowed me to handle
          complex queries more efficiently, reducing unnecessary database calls
          and making the overall data retrieval process faster.
        </p>
        <p>
          Finally, I implemented a content filtering system to restrict access
          to data based on the user&apos;s agency or client. This ensured that
          users could only view content relevant to them, while allowing other
          users to see content that was outside their scope. This was achieved
          by adding a filtering mechanism in the backend, which applied
          user-specific parameters to content queries. This change enhanced data
          security and tailored the user experience to different roles within
          the system.
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
    subtitle:
      "A corporate website built with Next.js, Tailwind, and Directus for fully editable content management.",
    tech: [
      techFinder("Next.js"),
      techFinder("Tailwind"),
      techFinder("Directus"),
      techFinder("Shadcn"),
    ].filter(Boolean),
    logo: "/parkson_credit_logo.png",
    image: "/project_parkson_credit.png",
    description: (
      <div className="flex flex-col gap-8">
        <p>
          Built and maintained multiple key pages for the Parkson Credit
          corporate website, including sections like{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Customer Service
          </code>
          ,{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Corporate & Consumer Enquiries
          </code>
          ,{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Corporate Address
          </code>
          ,{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Governance
          </code>
          ,{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            CSR
          </code>
          , and{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Career
          </code>
          . The project was developed using{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Next.js
          </code>{" "}
          for performance and routing,{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Tailwind CSS
          </code>{" "}
          for styling, and{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            shadcn/ui
          </code>{" "}
          for base UI components.
        </p>
        <p>
          I emphasized reusability by creating shared components and utility
          functions to populate pages like{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Sustainability & CSR
          </code>{" "}
          and{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Compliance & Corporate Governance
          </code>
          . These components dynamically render content using the{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            map()
          </code>{" "}
          method in JavaScript, making it simple for non-technical users to add
          or manage content through Directus CMS.
        </p>
        <p>
          The corporate address page includes a dynamic location integration
          powered by the{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Google Maps API
          </code>
          . The coordinates are embedded into an{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            &lt;iframe&gt;
          </code>{" "}
          for visual map rendering.
        </p>
      </div>
    ),
    description2: (
      <div className="flex flex-col gap-8">
        <p>
          The navigation menu includes contextual behavior logic—certain pages
          display dropdowns conditionally based on the current route (e.g.{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            /corporate
          </code>
          ,{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            /consumer
          </code>
          ,{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            /career
          </code>
          ). The entire navigation structure is driven by state and routing
          checks, providing users with a relevant and streamlined navigation
          experience.
        </p>
        <p>
          For form handling across multiple pages, I implemented{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            React Hook Form
          </code>{" "}
          with{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Zod
          </code>{" "}
          for schema validation. These forms support file attachments, which are
          uploaded to an{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            AWS S3 bucket
          </code>
          . Upon successful submission, a confirmation email—complete with the
          uploaded attachments—is sent via{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            Nodemailer
          </code>
          .
        </p>
        <p>
          I also implemented a dual-language toggle (English ↔ Malay), where the
          selected language is stored in{" "}
          <code className="px-1 py-0.5 rounded bg-muted text-muted-foreground">
            cookies
          </code>{" "}
          via a toggle UI component. This language preference persists across
          navigation, ensuring the correct language content is loaded on every
          route change.
        </p>
        <p>
          Directus CMS plays a central role in this project by housing all site
          content. Every piece of text or data is editable by the client,
          eliminating the need for developer intervention for future content
          changes. This integration significantly streamlined the content update
          process for the client’s internal team.
        </p>
      </div>
    ),

    gif: "/parkson_preview_1.gif",
  },
];
