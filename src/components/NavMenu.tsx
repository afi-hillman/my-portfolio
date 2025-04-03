"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const themes = [
    { name: "light", colors: ["#99c221", "#fafbf5", "#41474c", "#e55812"] },
    { name: "dark", colors: ["#ff5277", "#0e141b", "#ffffff", "#43a9a3"] },
    { name: "earth", colors: ["#5a7e46", "#f5f1e6", "#2c2418", "#a65e2e"] },
  ];
  const { setTheme } = useTheme();

  return (
    <>
      <div
        className={`
          w-full flex justify-around items-center md:gap-10 gap-2 md:px-10
          transition-all duration-300 ease-in-out 
          overflow-hidden
          ${open ? "h-[200px]" : "h-0"}
        `}
      >
        {themes.map((item, index) => (
          <div
            key={index}
            className="rounded-md border border-border w-full h-40  cursor-pointer group hover:bg-muted transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-4"
            onClick={() => setTheme(item.name)}
          >
            <p>{item.name}</p>
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
      <div className="flex justify-between items-center py-[50px]">
        <Link href={"/"} className="flex items-center gap-1 group">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-ring mr-2 overflow-hidden">
            <Image
              src={"/self_picture.png"}
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
              <Link key={index} href={item.href}>
                <div className="py-3 px-5 group cursor-pointer">
                  <div className="relative flex items-center justify-between gap-1  after:absolute after:bottom-[-8px] after:left-0 after:h-1 after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
                    <p className="font-semibold">{item.prefix}</p>
                    <p>{item.label}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <ThemeSwitcher open={open} setOpen={setOpen} />
          <div
            className="md:hidden flex items-center justify-center w-12 h-12 ml-4 rounded-full bg-background-offset text-primary-foreground border border-ring hover:bg-muted duration-300"
            // onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;

const navItems = [
  { prefix: "01", label: "home", href: "/" },
  { prefix: "02", label: "experience", href: "/experience" },
  { prefix: "03", label: "about", href: "/about" },
  { prefix: "04", label: "blog", href: "/blog" },
];
