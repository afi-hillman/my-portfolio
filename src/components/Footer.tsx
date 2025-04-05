"use client";
import { useState } from "react";

const Footer = () => {
  const [easterEgg, setEasterEgg] = useState(false);
  return (
    <div className="border-t border-[#E5E5E5] py-8 mt-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="text-sm flex items-center gap-2">
          <p>© 2025 Afi Hillman |</p>
          {easterEgg ? (
            <div
              onMouseLeave={() => setEasterEgg(false)}
              className="flex items-center gap-2"
            >
              <p>Malaysia Boleh!</p>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#dd2e44"
                  d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"
                />
                <path
                  fill="#eee"
                  d="M.555 29h34.891A3.97 3.97 0 0 0 36 27H0c0 .732.211 1.409.555 2M0 23h36v2H0zm0-4h36v2H0zm0-4h36v2H0zm0-4h36v2H0zm.555-4A3.96 3.96 0 0 0 0 9h36c0-.732-.211-1.41-.555-2z"
                />
                <path fill="#010066" d="M18 5H4a4 4 0 0 0-4 4v10h18z" />
                <path
                  fill="#ffcc4d"
                  d="M9.534 17.233a5.234 5.234 0 0 1-.001-10.466c.715 0 1.397.146 2.018.405A5.96 5.96 0 0 0 8 6a6 6 0 0 0 0 12a5.96 5.96 0 0 0 3.551-1.172a5.2 5.2 0 0 1-2.017.405"
                />
                <path
                  fill="#ffcc4d"
                  d="m12.922 8.829l.334 1.62l1.003-1.315l-.402 1.604l1.475-.749l-1.059 1.271l1.654-.035l-1.505.686l1.505.686l-1.654-.035l1.059 1.271l-1.475-.749l.402 1.605l-1.003-1.316l-.334 1.621l-.334-1.621l-1.003 1.316l.402-1.605l-1.475.749l1.058-1.271l-1.653.035l1.505-.686l-1.505-.686l1.653.035l-1.058-1.271l1.475.749l-.402-1.604l1.003 1.315z"
                />
              </svg>
            </div>
          ) : (
            <div onMouseEnter={() => setEasterEgg(true)}>
              <p>Based in Kuala Lumpur</p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {/* <a
            className="cursor-pointer hover:-translate-y-2 transition-all duration-300"
            href="https://www.instagram.com/afi.hillman/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="hover:text-primary"
            >
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
          </a> */}
          <a
            className="cursor-pointer hover:-translate-y-2 transition-all duration-300"
            href="https://x.com/afiswe"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="hover:text-primary"
            >
              <path
                fill="currentColor"
                d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
              />
            </svg>
          </a>
          <a
            className="cursor-pointer hover:-translate-y-2 transition-all duration-300"
            href="https://www.linkedin.com/in/afi-hillman/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="hover:text-primary"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
          </a>
          <a
            className="cursor-pointer hover:-translate-y-2 transition-all duration-300"
            href="https://github.com/afi-hillman"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="hover:text-primary"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
