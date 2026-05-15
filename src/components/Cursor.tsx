import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      style={{
        background: `radial-gradient(circle 320px at ${pos.x}px ${pos.y}px, oklch(0.78 0.15 75 / 0.10), transparent 70%)`,
      }}
    />
  );
}
