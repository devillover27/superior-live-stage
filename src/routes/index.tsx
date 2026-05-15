import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { LiveShow } from "@/components/LiveShow";
import { Events } from "@/components/Events";
import { Music } from "@/components/Music";
import { Artists } from "@/components/Artists";
import { Nightlife } from "@/components/Nightlife";
import { Story } from "@/components/Story";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Superior Band Official — Where Music Becomes An Experience" },
      {
        name: "description",
        content:
          "Hyderabad's premier live music collective. 15 voices, 1 stage, unlimited madness. Book Superior Band for your next unforgettable night.",
      },
      { property: "og:title", content: "Superior Band Official" },
      { property: "og:description", content: "Where music becomes an experience. Live concert collective from Hyderabad." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Loader />
      <Cursor />
      <Hero />
      <About />
      <LiveShow />
      <Events />
      <Music />
      <Artists />
      <Nightlife />
      <Story />
      <Booking />
      <Footer />
    </main>
  );
}
