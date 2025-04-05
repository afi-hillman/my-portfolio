"use client";
import dynamic from "next/dynamic";

const MovingDotsBackground = dynamic(
  () => import("@/components/MovingDotsBackground"),
  {
    ssr: false,
  }
);

export default function MovingDotsWrapper({ className }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <MovingDotsBackground className={className} />
    </div>
  );
}
