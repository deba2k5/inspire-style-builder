import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import buildersImage from "@/assets/diversion-builders.jpg";
import stageImage from "@/assets/diversion-stage.jpg";
import nightImage from "@/assets/diversion-night.jpg";
import buildNightImage from "@/assets/diversion-build-night.jpg";
import rooftopImage from "@/assets/diversion-rooftop.jpg";
import riversideImage from "@/assets/diversion-riverside.jpg";
import cityRainImage from "@/assets/diversion-city-rain.jpg";

const frames = [
  { image: buildersImage, alt: "Builders collaborating around laptops at DIVERSiON", title: "550+ builders", note: "Ideas turn real after midnight." },
  { image: buildNightImage, alt: "A student team building hardware together during the hackathon", title: "Build mode: on", note: "Code, circuits, and zero quit." },
  { image: stageImage, alt: "Teams celebrating together on the DIVERSiON stage", title: "100+ projects", note: "Every build gets its moment." },
  { image: rooftopImage, alt: "A winning student team celebrating with a trophy over Kolkata", title: "Victory unlocked", note: "The city remembers its builders." },
  { image: nightImage, alt: "The DIVERSiON community gathering in Kolkata at night", title: "One city", note: "Thousands of minds. One pulse." },
  { image: riversideImage, alt: "A neon Kolkata riverside gathering under the bridge", title: "Street connections", note: "Meet the crew beyond the screen." },
  { image: cityRainImage, alt: "A rain-soaked neon Kolkata street at sunset", title: "Next chapter", note: "DIVERSiON 2027 is loading." },
];

export function NightGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches), []);

  useEffect(() => {
    if (!api) return;
    const sync = () => setIndex(api.selectedScrollSnap());
    sync();
    api.on("select", sync).on("reInit", sync);
    return () => { api.off("select", sync); api.off("reInit", sync); };
  }, [api]);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(Boolean(entry?.isIntersecting)), { threshold: 0.3 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api || !playing || interacting || !visible || reduced) return;
    const timer = window.setInterval(() => { if (!document.hidden) api.scrollNext(); }, 3600);
    return () => window.clearInterval(timer);
  }, [api, playing, interacting, visible, reduced]);

  return (
    <div
      ref={root}
      className="night-gallery"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={() => setInteracting(false)}
      onPointerDown={() => setInteracting(true)}
      onPointerUp={() => setInteracting(false)}
    >
      <div className="ng-toolbar">
        <p><strong>{String(index + 1).padStart(2, "0")}</strong> / {String(frames.length).padStart(2, "0")} <span>Drag to explore</span></p>
        <div>
          <Button variant="cityOutline" size="icon" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Pause gallery" : "Play gallery"} aria-pressed={!playing}>
            {playing && !reduced ? <Pause /> : <Play />}
          </Button>
          <Button variant="cityOutline" size="icon" onClick={() => api?.scrollPrev()} aria-label="Previous photo"><ArrowLeft /></Button>
          <Button variant="city" size="icon" onClick={() => api?.scrollNext()} aria-label="Next photo"><ArrowRight /></Button>
        </div>
      </div>

      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} aria-label="DIVERSiON event moments">
        <CarouselContent className="-ml-5">
          {frames.map((frame, frameIndex) => (
            <CarouselItem key={frame.title} className="basis-[88%] pl-5 sm:basis-[64%] lg:basis-[44%]">
              <figure className={frameIndex === index ? "ng-frame is-current" : "ng-frame"}>
                <div className="ng-photo"><img src={frame.image} alt={frame.alt} width={1600} height={1008} loading="lazy" /></div>
                <figcaption><strong>{frame.title}</strong><span>{frame.note}</span></figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="ng-dots" aria-label="Choose a gallery slide">
        {frames.map((frame, dotIndex) => (
          <button key={frame.title} type="button" className={dotIndex === index ? "is-active" : ""} onClick={() => api?.scrollTo(dotIndex)} aria-label={`Go to photo ${dotIndex + 1}`} aria-current={dotIndex === index ? "true" : undefined} />
        ))}
      </div>
    </div>
  );
}
