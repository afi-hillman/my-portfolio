"use client";
import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <div className="flex justify-between items-center py-[50px]">
      <Link href={"/"}>
        <p className="hover:text-[#ffb703] cursor-pointer">@afi-hillman</p>
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
        <div className="flex items-center justify-center w-12 h-12 ml-4 rounded-full bg-background-offset text-primary-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            className="cursor-pointer"
          >
            <path
              fill="currentColor"
              d="M15.5 8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m7.5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m1.5 6.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M20.5 25a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M15.809 2.001c-4.319 0-8.219 2.212-10.743 5.052c-2.5 2.813-3.78 6.407-2.52 9.181c.337.74.74 1.288 1.212 1.666c.478.382 1.003.57 1.545.621c1.048.1 2.16-.315 3.147-.715l.399-.164c.88-.362 1.667-.686 2.38-.766c.394-.044.73-.007 1.022.122c.29.128.578.366.847.797c.413.66.663 1.562.874 2.625c.076.383.148.792.222 1.213c.123.705.252 1.44.415 2.131c.265 1.123.642 2.24 1.306 3.154c.676.93 1.634 1.63 3.011 1.93c2.731.598 5.532-.647 7.616-2.953c2.09-2.312 3.51-5.736 3.51-9.65c0-7.867-6.377-14.244-14.243-14.244M3.457 15.821c-1.017-2.236-.042-5.405 2.356-8.103C8.187 5.048 11.829 3 15.809 3c7.314 0 13.244 5.93 13.244 13.244c0 3.676-1.335 6.858-3.253 8.98c-1.923 2.127-4.382 3.145-6.66 2.647c-1.129-.247-1.879-.803-2.416-1.542c-.548-.755-.887-1.72-1.142-2.796c-.158-.671-.275-1.343-.393-2.02c-.075-.427-.15-.857-.236-1.289c-.213-1.074-.49-2.133-1.007-2.96c-.356-.57-.788-.959-1.29-1.181c-.498-.22-1.023-.26-1.538-.201c-.866.097-1.8.483-2.662.84l-.382.156c-1.017.413-1.908.72-2.677.647a1.85 1.85 0 0 1-1.015-.407c-.318-.254-.635-.66-.925-1.299"
            />
          </svg>
        </div>
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
