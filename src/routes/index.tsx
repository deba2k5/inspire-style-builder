import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, BrainCircuit, CalendarDays, Code2, Globe2, Handshake, MapPin, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MissionMap } from "@/components/MissionMap";
import { FloatingNav } from "@/components/FloatingNav";
import { DistrictCarousel } from "@/components/DistrictCarousel";
import { AboutDiversion } from "@/components/AboutDiversion";
import { SiteFooter } from "@/components/SiteFooter";
import { MissionSelector } from "@/components/MissionSelector";
import { NightGallery } from "@/components/NightGallery";
import heroImage from "@/assets/diversion-city-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DIVERSiON 2027 — The City Is Your Codebase" },
      { name: "description", content: "Enter DIVERSiON 2027 in Kolkata: build, compete, connect, and write the city's next chapter." },
      { property: "og:title", content: "DIVERSiON 2027 — The City Is Your Codebase" },
      { property: "og:description", content: "A city-sized hackathon for builders ready to create real impact." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const editions = [
  { id: "D1", year: "2022", title: "The Beginning", text: "A small idea became a movement." },
  { id: "D2", year: "2023", title: "Bigger Community", text: "More builders. More ideas." },
  { id: "D3", year: "2024", title: "National Recognition", text: "The city found its voice." },
  { id: "D4", year: "2025", title: "Bolder Than Ever", text: "Record energy and innovation." },
  { id: "D5", year: "2026", title: "A Stronger Tomorrow", text: "A new generation arrived." },
];

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <FloatingNav />

      <section id="top" className="hero relative flex min-h-[92svh] items-center border-b border-foreground/15 pt-16">
        <img src={heroImage} alt="A neon-lit Kolkata-inspired city at dusk with a black sports car" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-shade absolute inset-0" />
        <span className="scribble left-note hidden lg:block">HACK<br/>BUILD<br/>COLLAB<br/>REPEAT</span>
        <span className="scribble right-note hidden lg:block">GOOD IDEAS<br/>BAD SLEEP</span>
        <div className="relative z-10 mx-auto w-full max-w-[1480px] px-5 py-20 lg:px-24">
          <div className="max-w-4xl">
            <p className="mb-3 font-ui text-sm font-bold uppercase text-accent">IEM ACM presents</p>
            <h1 className="hero-title uppercase leading-[.78]">
              <span className="game-wordmark block">Diversion</span>
              <span className="paint-text block text-primary">2027</span>
            </h1>
            <p className="mt-5 rotate-[-1deg] font-graffiti text-2xl text-foreground md:text-4xl">The city is your codebase</p>
            <p className="mt-5 max-w-lg font-ui text-lg text-foreground/80">Hack. Build. Network. Create Impact.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="city" size="lg"><a href="#register">Enter DIVERSiON <ArrowRight /></a></Button>
              <Button asChild variant="cityOutline" size="lg"><a href="#legacy">Explore the city <ArrowDown /></a></Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 right-5 hidden font-ui text-xs font-bold uppercase leading-7 text-foreground/70 md:block">Ideas<br/>People<br/>Tech<br/>Impact</div>
      </section>

      <section className="border-b border-foreground/15 bg-card">
        <div className="mx-auto grid max-w-[1480px] grid-cols-2 divide-x divide-y divide-foreground/10 md:grid-cols-4 md:divide-y-0">
          {[[BrainCircuit,"Think bigger"],[Code2,"Build bolder"],[Users,"Meet brighter"],[Globe2,"Make real impact"]].map(([Icon,label]) => {
            const PrincipleIcon = Icon as typeof BrainCircuit;
            return <div key={label as string} className="flex items-center justify-center gap-3 px-4 py-7"><PrincipleIcon className="text-primary"/><span className="font-ui text-sm font-semibold uppercase">{label as string}</span></div>;
          })}
        </div>
      </section>

      <section id="legacy" className="road-texture py-24">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="section-kicker">Mission select</p><h2 className="section-title">The road to <span className="font-graffiti text-primary">2027</span></h2></div>
            <p className="max-w-md font-ui text-foreground/65">From a small spark to a nationwide movement — every edition changed the map.</p>
          </div>
          <MissionMap editions={editions} />
          <AboutDiversion />
          <div className="mt-16 grid items-center gap-10 border-y border-foreground/15 py-12 lg:grid-cols-[.8fr_1.2fr]">
            <div className="poster-callout"><span className="game-wordmark-small">DIVERSiON</span><strong>2027</strong><p>Bigger ideas. Bolder builders.<br/>A brighter tomorrow.</p></div>
            <div><p className="font-display text-4xl uppercase md:text-6xl">Next stop:</p><p className="font-graffiti text-5xl text-primary md:text-7xl">DIVERSiON 2027</p>
              <div className="mt-8 grid gap-5 font-ui sm:grid-cols-3">
                <div className="info-line"><CalendarDays/><span><small>Dates</small>Coming soon</span></div>
                <div className="info-line"><MapPin/><span><small>Venue</small>IEM Gurukul, Sector V</span></div>
                <div className="info-line"><Users/><span><small>Expected</small>5,000+ builders</span></div>
              </div>
            </div>
          </div>
          <div className="stats-grid mt-10 grid grid-cols-2 border border-foreground/15 bg-card/80 md:grid-cols-5">
            {[['5,000+','Registrations'],['550+','Participants'],['200+','Colleges'],['100+','Projects'],['15+','Partners']].map(([value,label]) => <div key={label} className="border-foreground/15 px-3 py-7 text-center md:border-r last:border-r-0"><strong className="font-display text-3xl">{value}</strong><span className="mt-1 block font-ui text-xs uppercase text-foreground/60">{label}</span></div>)}
          </div>
        </div>
      </section>

      <section id="missions" className="mission-zone border-y border-foreground/15 py-24">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
          <div className="section-heading-row"><div><p className="section-kicker">Choose your</p><h2 className="section-title">Mission</h2></div><p>Four routes. One city. Pick the move that starts your story.</p></div>
          <MissionSelector />
        </div>
      </section>

      <section id="tracks" className="map-grid py-24">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10"><p className="section-kicker">Explore the map</p><h2 className="section-title">City districts</h2>
          <div className="mt-12"><DistrictCarousel /></div>
        </div>
      </section>

      <section id="prizes" className="heist relative border-y border-primary/40 py-24 text-center">
        <div className="relative z-10 mx-auto max-w-5xl px-5"><p className="font-graffiti text-2xl text-accent">How big can you go?</p><h2 className="section-title mt-2">The heist</h2><p className="mt-8 font-display text-6xl text-primary md:text-9xl">₹ X,XX,XXX+</p><p className="font-ui text-lg font-bold uppercase">Prize pool reveal incoming</p>
          <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">{['Winner','Runner up','Third place'].map((place,i)=><div className="wanted" key={place}><span>0{i+1}</span><strong>{place}</strong><small>BOUNTY LOCKED</small></div>)}</div>
        </div>
      </section>

      <section className="night-section py-24">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10"><div className="section-heading-row"><div><p className="section-kicker">Evidence archive</p><h2 className="section-title">The city never sleeps</h2></div><p>Seven frames from the streets, screens, and stages that keep DIVERSiON awake.</p></div>
          <NightGallery />
        </div>
      </section>

      <section className="partners-section border-y border-foreground/15 py-20"><div className="mx-auto max-w-[1480px] px-5 lg:px-10"><div className="partners-layout"><div><p className="section-kicker">The people who build the city</p><h2 className="section-title">Partners</h2><p className="partners-copy">Put your brand where the next generation is building. Support ambitious teams and be part of Kolkata's biggest maker night.</p><Button asChild variant="city" size="lg" className="mt-8"><a href="mailto:hello@diversion.tech?subject=Partner%20with%20DIVERSiON%202027">Apply now to be a partner <Handshake /></a></Button></div><div className="partner-board">{['TITLE PARTNER','TECH PARTNER','COMMUNITY','PLATFORM','ECOSYSTEM'].map((x,i)=><div key={x} className="partner-sign"><span>0{i+1}</span>{x}</div>)}</div></div></div></section>

      <section id="faq" className="wall-texture py-24"><div className="mx-auto grid max-w-[1180px] gap-10 px-5 md:grid-cols-[.8fr_1.2fr]"><div><p className="section-kicker">Ask the city</p><h2 className="section-title">Street questions</h2><p className="mt-5 font-graffiti text-2xl text-primary">No gatekeeping.</p></div><Accordion type="single" collapsible className="border-t border-foreground/30">{[
        ['Who can join?','Students, makers, designers, and developers ready to build bold ideas together.'],['Where is it?','DIVERSiON 2027 takes place at the IEM Gurukul Building, Sector V, Salt Lake, Kolkata. All roads lead there.'],['How much does it cost?','Registration details and participation terms will be announced with the official launch.'],['What do I need to build?','Bring your curiosity and your crew. Challenges, tracks, and submission rules arrive before the event.']
      ].map(([q,a], index)=><AccordionItem key={q} value={`question-${index}`}><AccordionTrigger className="font-display text-xl uppercase no-underline hover:text-primary hover:no-underline">{q}</AccordionTrigger><AccordionContent className="font-ui text-base text-foreground/65">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section id="register" className="final-cta relative flex min-h-[70vh] items-center justify-center px-5 py-24 text-center"><div className="relative z-10"><p className="font-display text-5xl uppercase leading-none md:text-8xl">Your city.<br/>Your code.</p><p className="game-wordmark-small mx-auto mt-5 w-max max-w-full text-3xl md:text-6xl">Your DIVERSiON.</p><p className="mx-auto mt-6 max-w-md font-ui text-foreground/65">The next chapter isn't history. You're about to write it.</p><Button asChild variant="city" size="lg" className="mt-9"><a href="mailto:hello@diversion.tech?subject=DIVERSiON%202027%20Registration">Enter the city <ArrowRight/></a></Button></div></section>
      <SiteFooter />
    </main>
  );
}
