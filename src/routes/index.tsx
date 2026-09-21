import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, BrainCircuit, CalendarDays, Code2, Globe2, MapPin, Trophy, Users, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/diversion-city-hero.jpg";
import buildersImage from "@/assets/diversion-builders.jpg";
import stageImage from "@/assets/diversion-stage.jpg";
import nightImage from "@/assets/diversion-night.jpg";

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
  { id: "D1", year: "2019", title: "The Beginning", text: "A small idea became a movement." },
  { id: "D2", year: "2020", title: "Going Virtual", text: "Breaking walls, reaching everywhere." },
  { id: "D3", year: "2021", title: "Bigger Community", text: "More builders. More ideas." },
  { id: "D4", year: "2022", title: "National Recognition", text: "The city found its voice." },
  { id: "D5", year: "2024", title: "Bolder Than Ever", text: "Record energy and innovation." },
  { id: "D6", year: "2026", title: "A Stronger Tomorrow", text: "A new generation arrived." },
];

const missions = [
  { number: "01", title: "Build", text: "Turn an idea into something real.", icon: Code2 },
  { number: "02", title: "Compete", text: "Take on the city's toughest challenges.", icon: Zap },
  { number: "03", title: "Win", text: "Earn prizes, recognition, and opportunities.", icon: Trophy },
  { number: "04", title: "Connect", text: "Meet builders, mentors, and industry.", icon: Users },
];

const tracks = [
  ["Tech District", "AI / ML / Software", "01"],
  ["The Underground", "Cybersecurity", "02"],
  ["Green Zone", "Sustainability", "03"],
  ["Future Lab", "Healthcare / Biotech", "04"],
  ["Circuit Yard", "IoT / Hardware", "05"],
];

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/15 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1480px] items-center justify-between px-5 lg:px-10">
          <a href="#top" className="font-graffiti text-2xl text-foreground">DIVERSiON</a>
          <nav className="hidden items-center gap-7 font-ui text-sm font-semibold uppercase md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#legacy">Legacy</a><a className="nav-link" href="#missions">Missions</a>
            <a className="nav-link" href="#tracks">Tracks</a><a className="nav-link" href="#prizes">Prizes</a>
            <a className="nav-link" href="#faq">FAQ</a>
          </nav>
          <Button asChild variant="city" size="sm"><a href="#register">Register now</a></Button>
        </div>
      </header>

      <section id="top" className="hero relative flex min-h-[92svh] items-center border-b border-foreground/15 pt-16">
        <img src={heroImage} alt="A neon-lit Kolkata-inspired city at dusk with a black sports car" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-shade absolute inset-0" />
        <span className="scribble left-note hidden lg:block">HACK<br/>BUILD<br/>COLLAB<br/>REPEAT</span>
        <span className="scribble right-note hidden lg:block">GOOD IDEAS<br/>BAD SLEEP</span>
        <div className="relative z-10 mx-auto w-full max-w-[1480px] px-5 py-20 lg:px-24">
          <div className="max-w-4xl">
            <p className="mb-3 font-ui text-sm font-bold uppercase text-accent">Techno India University presents</p>
            <h1 className="hero-title font-display uppercase leading-[.78]">
              <span className="block text-foreground">Diversion</span>
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
          <div className="legacy-grid relative grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
            {editions.map((edition, i) => <article key={edition.id} className="mission-poster" style={{ transform: `rotate(${i % 2 ? 1.2 : -1.2}deg)` }}>
              <div className="poster-photo"><img src={[buildersImage,nightImage,stageImage][i%3]} alt="DIVERSiON community memory" width={1200} height={912} loading="lazy" /><span>{edition.id}</span><b>{edition.year}</b></div>
              <h3>{edition.title}</h3><p>{edition.text}</p>
            </article>)}
          </div>
          <div className="mt-16 grid items-center gap-10 border-y border-foreground/15 py-12 lg:grid-cols-[.8fr_1.2fr]">
            <div className="poster-callout"><span>DIVERSiON</span><strong>2027</strong><p>Bigger ideas. Bolder builders.<br/>A brighter tomorrow.</p></div>
            <div><p className="font-display text-4xl uppercase md:text-6xl">Next stop:</p><p className="font-graffiti text-5xl text-primary md:text-7xl">DIVERSiON 2027</p>
              <div className="mt-8 grid gap-5 font-ui sm:grid-cols-3">
                <div className="info-line"><CalendarDays/><span><small>Dates</small>Coming soon</span></div>
                <div className="info-line"><MapPin/><span><small>Venue</small>Kolkata, India</span></div>
                <div className="info-line"><Users/><span><small>Expected</small>5,000+ builders</span></div>
              </div>
            </div>
          </div>
          <div className="stats-grid mt-10 grid grid-cols-2 border border-foreground/15 bg-card/80 md:grid-cols-5">
            {[['5,000+','Registrations'],['550+','Participants'],['200+','Colleges'],['100+','Projects'],['15+','Partners']].map(([value,label]) => <div key={label} className="border-foreground/15 px-3 py-7 text-center md:border-r last:border-r-0"><strong className="font-display text-3xl">{value}</strong><span className="mt-1 block font-ui text-xs uppercase text-foreground/60">{label}</span></div>)}
          </div>
        </div>
      </section>

      <section id="missions" className="border-y border-foreground/15 bg-secondary py-24">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
          <p className="section-kicker">Choose your</p><h2 className="section-title">Mission</h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {missions.map(({number,title,text,icon:Icon}) => <article key={title} className="group bg-secondary p-7 transition-colors hover:bg-card"><div className="flex items-center justify-between"><span className="font-ui text-sm text-primary">MISSION {number}</span><Icon className="text-primary"/></div><h3 className="mt-16 font-display text-5xl uppercase">{title}</h3><p className="mt-3 font-ui text-foreground/60">{text}</p><ArrowRight className="mt-8 transition-transform group-hover:translate-x-2"/></article>)}
          </div>
        </div>
      </section>

      <section id="tracks" className="map-grid py-24">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10"><p className="section-kicker">Explore the map</p><h2 className="section-title">City districts</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {tracks.map(([title,desc,num],i) => <article key={title} className={`district ${i===0 || i===3 ? 'lg:col-span-3' : 'lg:col-span-2'}`}><span>{num}</span><div><h3>{title}</h3><p>{desc}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="prizes" className="heist relative border-y border-primary/40 py-24 text-center">
        <div className="relative z-10 mx-auto max-w-5xl px-5"><p className="font-graffiti text-2xl text-accent">How big can you go?</p><h2 className="section-title mt-2">The heist</h2><p className="mt-8 font-display text-6xl text-primary md:text-9xl">₹ X,XX,XXX+</p><p className="font-ui text-lg font-bold uppercase">Prize pool reveal incoming</p>
          <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">{['Winner','Runner up','Third place'].map((place,i)=><div className="wanted" key={place}><span>0{i+1}</span><strong>{place}</strong><small>BOUNTY LOCKED</small></div>)}</div>
        </div>
      </section>

      <section className="road-texture py-24">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10"><div className="text-center"><p className="section-kicker">Evidence archive</p><h2 className="section-title">The city never sleeps</h2></div>
          <div className="photo-collage mt-14 grid gap-5 md:grid-cols-3"><figure><img src={buildersImage} alt="Builders collaborating at DIVERSiON" width={1200} height={912} loading="lazy"/><figcaption>550+ BUILDERS</figcaption></figure><figure><img src={stageImage} alt="Teams celebrating on the DIVERSiON stage" width={1200} height={912} loading="lazy"/><figcaption>100+ PROJECTS</figcaption></figure><figure><img src={nightImage} alt="The DIVERSiON community meeting in Kolkata" width={1200} height={912} loading="lazy"/><figcaption>ONE CITY</figcaption></figure></div>
        </div>
      </section>

      <section className="border-y border-foreground/15 bg-card py-20"><div className="mx-auto max-w-[1480px] px-5 text-center lg:px-10"><p className="section-kicker">The people who built the city</p><h2 className="section-title">Partners</h2><div className="mt-10 flex flex-wrap justify-center gap-4">{['TITLE PARTNER','TECH PARTNER','COMMUNITY','PLATFORM','ECOSYSTEM'].map(x=><div key={x} className="partner-sign">{x}</div>)}</div></div></section>

      <section id="faq" className="wall-texture py-24"><div className="mx-auto grid max-w-[1180px] gap-10 px-5 md:grid-cols-[.8fr_1.2fr]"><div><p className="section-kicker">Ask the city</p><h2 className="section-title">Street questions</h2><p className="mt-5 font-graffiti text-2xl text-primary">No gatekeeping.</p></div><Accordion type="single" collapsible className="border-t border-foreground/30">{[
        ['Who can join?','Students, makers, designers, and developers ready to build bold ideas together.'],['Where is it?','DIVERSiON 2027 takes place in Kolkata, India. The exact venue will be revealed soon.'],['How much does it cost?','Registration details and participation terms will be announced with the official launch.'],['What do I need to build?','Bring your curiosity and your crew. Challenges, tracks, and submission rules arrive before the event.']
      ].map(([q,a])=><AccordionItem key={q} value={q}><AccordionTrigger className="font-display text-xl uppercase no-underline hover:text-primary hover:no-underline">{q}</AccordionTrigger><AccordionContent className="font-ui text-base text-foreground/65">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section id="register" className="final-cta relative flex min-h-[70vh] items-center justify-center px-5 py-24 text-center"><div className="relative z-10"><p className="font-display text-5xl uppercase leading-none md:text-8xl">Your city.<br/>Your code.</p><p className="mt-3 font-graffiti text-4xl text-primary md:text-7xl">Your DIVERSiON.</p><p className="mx-auto mt-6 max-w-md font-ui text-foreground/65">The next chapter isn't history. You're about to write it.</p><Button asChild variant="city" size="lg" className="mt-9"><a href="mailto:hello@diversion.tech?subject=DIVERSiON%202027%20Registration">Enter the city <ArrowRight/></a></Button></div></section>
      <footer className="flex flex-col items-center justify-between gap-3 border-t border-foreground/15 px-5 py-6 font-ui text-xs uppercase text-foreground/50 md:flex-row lg:px-10"><span>© 2027 DIVERSiON</span><span>Made in Kolkata. Built for everywhere.</span></footer>
    </main>
  );
}
