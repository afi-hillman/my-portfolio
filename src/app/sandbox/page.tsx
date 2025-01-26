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
    </div>
  );
};

export default Sandbox;
