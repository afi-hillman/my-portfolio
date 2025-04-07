"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
// import MobileNavMenu from "./MobileNavMenu";

const NavMenu = () => {
  const [openTheme, setOpenTheme] = useState(false);
  const themes = [
    { name: "light", colors: ["#5a7e46", "#f5f1e6", "#2c2418", "#a65e2e"] },
    { name: "dark", colors: ["#ff5277", "#0e141b", "#ffffff", "#43a9a3"] },
  ];
  const { setTheme } = useTheme();

  return (
    <div className="border-b border-border mx-auto px-4 md:px-8 mb-10">
      <div
        className={`
          w-full transition-all duration-300 ease-in-out 
          overflow-hidden
          ${openTheme ? "h-[140px]" : "h-0"}
        `}
      >
        <div className="flex items-center justify-end mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className="cursor-pointer"
            onClick={() => setOpenTheme(false)}
          >
            <path
              fill="currentColor"
              d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
            />
          </svg>
        </div>
        <div className="w-full flex justify-around items-center md:gap-10 gap-2 md:px-10">
          {themes.map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-border w-full h-fit py-4 cursor-pointer group hover:bg-muted transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-4"
              onClick={() => setTheme(item.name)}
            >
              <div className="py-1 px-4 rounded-xl border border-border bg-muted text-text-offset">
                <p>{item.name}</p>
              </div>
              <div className="flex items-center gap-2">
                {item?.colors?.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="rounded-full w-4 h-4 border border-border"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center py-[1em]">
        <Link href={"/"} className="flex items-center gap-1 group">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-ring mr-2 overflow-hidden">
            <Image
              src={"/self_picture.jfif"}
              alt="logo"
              width={120}
              height={120}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <p className="group-hover:text-primary cursor-pointer">@afihillman</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="bg-transparent"
            >
              <path
                fill="#1DA1F2"
                fillRule="evenodd"
                d="M15.418 5.643a1.25 1.25 0 0 0-1.34-.555l-1.798.413a1.25 1.25 0 0 1-.56 0l-1.798-.413a1.25 1.25 0 0 0-1.34.555l-.98 1.564c-.1.16-.235.295-.395.396l-1.564.98a1.25 1.25 0 0 0-.555 1.338l.413 1.8a1.25 1.25 0 0 1 0 .559l-.413 1.799a1.25 1.25 0 0 0 .555 1.339l1.564.98c.16.1.295.235.396.395l.98 1.564c.282.451.82.674 1.339.555l1.798-.413a1.25 1.25 0 0 1 .56 0l1.799.413a1.25 1.25 0 0 0 1.339-.555l.98-1.564c.1-.16.235-.295.395-.395l1.565-.98a1.25 1.25 0 0 0 .554-1.34L18.5 12.28a1.25 1.25 0 0 1 0-.56l.413-1.799a1.25 1.25 0 0 0-.554-1.339l-1.565-.98a1.25 1.25 0 0 1-.395-.395zm-.503 4.127a.5.5 0 0 0-.86-.509l-2.615 4.426l-1.579-1.512a.5.5 0 1 0-.691.722l2.034 1.949a.5.5 0 0 0 .776-.107z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
        <div className="flex items-center">
          <div className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                onClick={(e) => item.disabled && e.preventDefault()}
                className={item.disabled ? "pointer-events-none relative" : ""}
              >
                <div
                  className={`py-3 px-5 group cursor-${
                    item.disabled ? "not-allowed" : "pointer"
                  }`}
                >
                  <div
                    className={`
          relative flex items-center justify-between gap-1
          ${item.disabled ? "text-gray-400" : ""}
          ${
            !item.disabled
              ? "after:absolute after:bottom-[-8px] after:left-0 after:h-1 after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"
              : ""
          }
        `}
                  >
                    <p className="font-semibold">{item.prefix}</p>
                    <p>{item.label}</p>
                  </div>
                </div>
                {item.disabled && (
                  <Image
                    src={"/work-in-progress.png"}
                    width={32}
                    height={32}
                    alt="work-in-progress icon"
                    className="absolute -top-3 right-0 rotate-12"
                  />
                )}
              </Link>
            ))}
          </div>
          <ThemeSwitcher open={openTheme} setOpen={setOpenTheme} />
          {/* hide mobile nav, waiting to use framer motion to animate it */}
          {/* <MobileNavMenu /> */}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;

const navItems = [
  { prefix: "01", label: "home", href: "/", disabled: false },
  { prefix: "02", label: "about", href: "/about", disabled: true },
  {
    prefix: "03",
    label: "achievements",
    href: "/achievements",
    disabled: true,
  },
  { prefix: "04", label: "newsletter", href: "/newsletter", disabled: true },
];
