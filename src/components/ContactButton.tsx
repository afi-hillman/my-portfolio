import React from "react";

const ContactButton = () => {
  return (
    <a href="mailto:afi.hillman17@gmail.com">
      <div className="bg-primary rounded-full border-ring border py-4 px-3 text-background h-[60px] flex gap-2 items-center hover:bg-primary-offset  duration-300 cursor-pointer transform transition-transform hover:-rotate-12 origin-bottom-left w-fit">
        <div className="relative rounded-full bg-green-500 w-4 h-4">
          <div className="rounded-full absolute bg-green-500 animate-ping w-4 h-4"></div>
        </div>
        <p>Let&apos;s Connect!</p>
      </div>
    </a>
  );
};

export default ContactButton;
