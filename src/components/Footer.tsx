import logo from "@/assets/superior-band-logo.jpg";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--gold)]/20 py-12">
      <div className="container mx-auto flex flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Superior Band" className="h-10 w-10 rounded-full ring-1 ring-[var(--gold)]/40" />
          <div>
            <div className="font-display text-lg leading-none">Superior Band</div>
            <div className="font-cinematic text-[10px] tracking-[0.3em] text-foreground/50">HYDERABAD · INDIA</div>
          </div>
        </div>
        <div className="font-cinematic text-[10px] tracking-[0.3em] text-foreground/40">
          © {new Date().getFullYear()} SUPERIOR BAND OFFICIAL — ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
