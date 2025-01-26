import React from "react";

const Sandbox = () => {
  return (
    <div className="flex gap-2">
      <div className="px-4 bg-background">
        <p className="text-foreground">BASE</p>
      </div>
      <div className="px-4 bg-primary">
        <p className="text-primary-foreground">PRIMARY</p>
      </div>
      <div className="px-4 bg-secondary">
        <p className="text-secondary-foreground">SECONDARY</p>
      </div>
      <div className="px-4 bg-muted">
        <p className="text-muted-foreground">MUTED</p>
      </div>
      <div className="px-4 bg-card">
        <p className="text-card-foreground">CARD</p>
      </div>
      <div className="px-4 bg-destructive">
        <p className="text-destructive-foreground">DESTRUCTIVE</p>
      </div>
      <div className="px-4 bg-popover">
        <p className="text-popover-foreground">POPOVER</p>
      </div>
      <div className="px-4 bg-accent">
        <p className="text-accent-foreground">ACCENT</p>
      </div>

      <div className="relative group">
        <div className="rounded-full border-ring border py-4 px-3 h-[60px] flex gap-2 items-center  duration-300 cursor-pointer overflow-hidden">
          <div className="relative rounded-full bg-green-500 w-4 h-4">
            <div className="rounded-full absolute bg-green-500 animate-ping w-4 h-4"></div>
          </div>
          <p>Let&apos;s Connect!</p>
        </div>
        <div className="absolute opacity-0 group-hover:opacity-100 top-[60px] left-1/2 transform -translate-x-1/2 w-[150px] h-[60px] bg-blue-500 rounded-full transition-transform duration-300 ease-in-out group-hover:translate-y-[-100%] -z-10"></div>
      </div>
    </div>
  );
};

export default Sandbox;
