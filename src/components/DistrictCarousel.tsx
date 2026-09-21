import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, CircuitBoard, Cpu, HeartPulse, Leaf, Pause, Play, ShieldAlert, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import nightImage from "@/assets/diversion-night.jpg";
import stormImage from "@/assets/bg-purple-storm.jpg";
import palmImage from "@/assets/bg-palm-sunset.jpg";
import cloudsImage from "@/assets/bg-neon-clouds.jpg";
import stageImage from "@/assets/diversion-stage.jpg";

const districts = [
  { num: "01", name: "Tech District", track: "AI / ML / Software", icon: Cpu, image: nightImage, line: "Ship the brain of the city." },
  { num: "02", name: "The Underground", track: "Cybersecurity", icon: ShieldAlert, image: stormImage, line: "Lock it down. Break it open." },
  { num: "03", name: "Green Zone", track: "Sustainability", icon: Leaf, image: palmImage, line: "Build the city that lasts." },
  { num: "04", name: "Future Lab", track: "Healthcare / Biotech", icon: HeartPulse, image: cloudsImage, line: "Code that keeps people alive." },
  { num: "05", name: "Circuit Yard", track: "IoT / Hardware", icon: CircuitBoard, image: stageImage, line: "Wire the streets to life." },
];

export function DistrictCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);   // user's play / pause choice
  const [hovering, setHovering] = useState(false);   // temporary pause while interacting
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => { setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  useEffect(() => {
    if (!api) return;
    const sync = () => setIndex(api.selectedScrollSnap());
    sync();
    api.on("select", sync).on("reInit", sync);
    return () => { api.off("select", sync); api.off("reInit", sync); };
  }, [api]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(!!e?.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance: loops forever, but only while visible, not hovered/dragged, and the tab is in front.
  useEffect(() => {
    if (!api || !playing || hovering || !visible || reduced) return;
    const id = window.setInterval(() => { if (!document.hidden) api.scrollNext(); }, 3200);
    return () => window.clearInterval(id);
  }, [api, playing, hovering, visible, reduced]);

  return (
    <div className="district-carousel" ref={root} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onFocus={() => setHovering(true)} onBlur={() => setHovering(false)} onPointerDown={() => setHovering(true)} onPointerUp={() => setHovering(false)}>
      <div className="dc-bar">
        <p className="dc-count"><strong>{String(index + 1).padStart(2, "0")}</strong> / {String(districts.length).padStart(2, "0")}</p>
        <div className="dc-progress" aria-hidden="true"><span style={{ width: `${((index + 1) / districts.length) * 100}%` }} /></div>
        <div className="dc-arrows">
          <button type="button" onClick={() => setPlaying((v) => !v)} aria-label={playing ? "Pause auto-scroll" : "Play auto-scroll"} aria-pressed={!playing}>{playing && !reduced ? <Pause size={18} /> : <Play size={18} />}</button>
          <button type="button" onClick={() => api?.scrollPrev()} aria-label="Previous district"><ArrowLeft size={20} /></button>
          <button type="button" onClick={() => api?.scrollNext()} aria-label="Next district"><ArrowRight size={20} /></button>
        </div>
      </div>

      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="dc-viewport" aria-label="City districts">
        <CarouselContent className="-ml-5">
          {districts.map((d, i) => {
            const Icon = d.icon;
            return (
              <CarouselItem key={d.num} className="basis-[82%] pl-5 sm:basis-1/2 lg:basis-[36%] xl:basis-[30%]">
                <article className="dist-card" tabIndex={0} aria-label={`${d.name}: ${d.track}`}>
                  <img src={d.image} alt="" className="dist-img" loading="lazy" draggable={false} />
                  <div className="dist-tint" />
                  <div className="dist-scan" />
                  <i className="dist-corner tl" /><i className="dist-corner tr" /><i className="dist-corner bl" /><i className="dist-corner br" />

                  <header className="dist-top">
                    <span className="dist-tag">District</span>
                    <span className="dist-icon"><Icon size={20} /></span>
                  </header>

                  <span className="dist-num" aria-hidden="true">{d.num}</span>

                  <div className="dist-body">
                    <div className="dist-stars" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={20} className={s <= i ? "lit" : ""} style={{ transitionDelay: `${s * 70}ms` }} fill="currentColor" />
                      ))}
                    </div>
                    <h3>{d.name}</h3>
                    <p className="dist-track">{d.track}</p>
                    <p className="dist-line">{d.line}</p>
                    <span className="dist-cta">Enter district <ArrowRight size={16} /></span>
                  </div>
                </article>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
