export function Equalizer({ bars = 24, className = "" }: { bars?: number; className?: string }) {
  return (
    <div className={`flex h-12 items-end gap-[3px] ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="bar-eq w-[3px] rounded-full bg-gradient-to-t from-[var(--gold)] via-[var(--ember)] to-[var(--violet-glow)]"
          style={{
            height: `${30 + Math.random() * 70}%`,
            animationDelay: `${(i % 8) * 0.08}s`,
            animationDuration: `${0.8 + (i % 5) * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}
