import React from "react";

const ContactButton = () => {
  return (
    <div className="rounded-full border-ring border py-4 px-3 h-[60px] flex gap-2 items-center hover:bg-ring hover:text-primary-foreground duration-300 cursor-pointer transform transition-transform hover:-rotate-12 origin-bottom-left">
      <div className="relative rounded-full bg-green-500 w-4 h-4">
        <div className="rounded-full absolute bg-green-500 animate-ping w-4 h-4"></div>
      </div>
      <p>Let&apos;s Connect!</p>
    </div>
  );
};

export default ContactButton;
