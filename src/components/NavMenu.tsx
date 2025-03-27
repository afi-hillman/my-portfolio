"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const themes = [
    { name: "light", colors: ["#99c221", "#fafbf5", "#41474c", "#e55812"] },
    { name: "dark", colors: ["#ff5277", "#0e141b", "#ffffff", "#43a9a3"] },
  ];
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <>
      <div
        className={`
          w-full flex justify-around items-center gap-10 px-10
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
        <Link href={"/"}>
          <p className="hover:text-primary cursor-pointer">@afi-hillman</p>
        </Link>
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
          <ThemeSwitcher open={open} setOpen={setOpen} />
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
