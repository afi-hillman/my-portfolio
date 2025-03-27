"use client";
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const NavMenu = () => {
  return (
    <div className="flex justify-between items-center py-[50px]">
      <Link href={"/"}>
        <p className="hover:text-primary cursor-pointer">@afi-hillman</p>
      </Link>
      <div className="flex items-center">
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
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default NavMenu;

const navItems = [
  { prefix: "01", label: "home", href: "/" },
  { prefix: "02", label: "experience", href: "/experience" },
  { prefix: "03", label: "about", href: "/about" },
  { prefix: "04", label: "blog", href: "/blog" },
];
