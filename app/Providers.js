"use client";
import { useRef } from "react";
import { animate } from "framer-motion";
import { TransitionRouter } from "next-transition-router";

export default function Providers({ children }) {
  const coverRef = useRef(null);

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        const anim = animate(
          coverRef.current,
          { x: ["100%", "0%"] },
          { duration: 0.6, ease: [0.76, 0, 0.24, 1], onComplete: next }
        );
        return () => anim.stop();
      }}
      enter={(next) => {
        const anim = animate(
          coverRef.current,
          { x: ["0%", "100%"] },
          { duration: 0.6, ease: [0.76, 0, 0.24, 1], onComplete: next }
        );
        return () => anim.stop();
      }}
    >
      <div
        ref={coverRef}
        className="fixed inset-0 bg-black z-54 pointer-events-none"
        style={{ transform: "translateX(100%)" }}
      />
      {children}
    </TransitionRouter>
  );
}