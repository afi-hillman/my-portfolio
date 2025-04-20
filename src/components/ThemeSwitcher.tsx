"use client";

interface ThemeToggleProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ open, setOpen }) => {
  return (
    <div
      className="flex items-center justify-center w-12 h-12 ml-4 rounded-full cursor-pointer bg-background-offset text-primary-foreground border border-border hover:bg-muted duration-300"
      onClick={() => setOpen(!open)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.5 5.5h1c1.105 0 2 .395 2 1.5v2a2 2 0 0 1-2 2h-7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1m5-15.5V4a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z"
        />
      </svg>
    </div>
  );
};

export default ThemeToggle;
