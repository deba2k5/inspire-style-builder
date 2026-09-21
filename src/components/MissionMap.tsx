import { useEffect, useRef, useState } from "react";
import { ArrowRight, CalendarDays, Flag, Lock, MapPin } from "lucide-react";
import mapImage from "@/assets/mission-map.webp";

export type Edition = { id: string; year: string; title: string; text: string };

// All coordinates are in map pixels (the artwork is 1536 x 1024).
const MW = 1536;
const MH = 1024;

const stops = [
  { hub: [160, 250], label: [190, 78] },
  { hub: [500, 246], label: [512, 78] },
  { hub: [847, 258], label: [840, 78] },
  { hub: [1237, 250], label: [1197, 98] },
  { hub: [440, 662], label: [325, 800] },
  { hub: [1323, 586], label: [1293, 808] },
] as const;

// One leg per hop between stops; legs before the active stop light up.
// The last leg passes through the middle landmass without stopping.
const legs = [
  "M160 250 C260 232 400 258 500 246",
  "M500 246 C600 250 720 215 847 258",
  "M847 258 C950 230 1100 290 1237 250",
  "M1237 250 C1250 400 560 300 440 662",
  "M440 662 C600 600 700 640 907 626 C1050 610 1150 560 1323 586",
];

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

export function MissionMap({ editions }: { editions: Edition[] }) {
  const all = [...editions, { id: "2027", year: "2027", title: "The Next Chapter", text: "Bigger ideas. Bolder builders. A brighter tomorrow." }];
  const [active, setActive] = useState(all.length - 1);
  const scroller = useRef<HTMLDivElement>(null);
  const map = useRef<HTMLDivElement>(null);
  const first = useRef(true);
  const last = all.length - 1;
  const current = all[active]!;

  // On narrow screens the map scrolls sideways: keep the selected stop in view.
  useEffect(() => {
    const box = scroller.current, m = map.current;
    if (!box || !m || box.scrollWidth <= box.clientWidth) return;
    const x = (stops[active]!.hub[0] / MW) * m.offsetWidth;
    box.scrollTo({ left: x - box.clientWidth / 2, behavior: first.current ? "auto" : "smooth" });
    first.current = false;
  }, [active]);
  const isNext = active === last;

  return (
    <div className="mission">
      <p className="mm-hint md:hidden">Swipe the map <ArrowRight size={14} /></p>
      <div className="mm-scroll" ref={scroller}>
        <div className="mm-map" ref={map} style={{ aspectRatio: `${MW} / ${MH}` }}>
          <img src={mapImage} alt="Illustrated world map: six earlier DIVERSiON editions leading to DIVERSiON 2027" width={MW} height={MH} className="mm-img" />
          <div className="mm-vignette" />

          <svg viewBox={`0 0 ${MW} ${MH}`} className="mm-route" aria-hidden="true">
            <defs><filter id="mm-glow"><feGaussianBlur stdDeviation="5" /></filter></defs>
            {legs.map((d, i) => (
              <g key={d}>
                <path d={d} className={`leg ${i < active ? "done" : ""}`} />
                {i < active && <path d={d} className="leg-glow" filter="url(#mm-glow)" />}
              </g>
            ))}
            <circle r="9" className="mm-car"><animateMotion dur="16s" repeatCount="indefinite" path={legs.join(" ")} /></circle>
          </svg>

          {all.map((e, i) => {
            const s = stops[i]!;
            const on = i === active;
            return (
              <div key={e.id}>
                <button type="button" className={`mm-label ${on ? "on" : ""} ${i === last ? "next" : ""}`} style={{ left: pct(s.label[0], MW), top: pct(s.label[1], MH) }} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} aria-label={`${e.id} ${e.title}`}>
                  <span className="mm-brand">DIVERSiON</span>
                  <span className="mm-id">{i === last ? "2027" : e.id}</span>
                  <span className="mm-title">{e.title}</span>
                </button>
                <button type="button" className={`mm-pin ${on ? "on" : ""} ${i === last ? "next" : ""}`} style={{ left: pct(s.hub[0], MW), top: pct(s.hub[1], MH) }} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} aria-label={`Select ${e.id}`}>
                  {i === last ? <Flag size={14} /> : e.id}<b>{e.year}</b>
                </button>
              </div>
            );
          })}

          <p className="mm-note mm-note-l">One city.<br />Six<br />editions.</p>
          <p className="mm-note mm-note-r">Every<br />edition<br />changed<br />the map.</p>
          <p className="mm-note mm-note-br">New chapter<br />loading…</p>
          <div className="mm-banner"><span>The road to</span><strong>DIVERSiON 2027</strong><small>Six editions. One journey.</small></div>
        </div>
      </div>

      <div className="mm-panel">
        <div className="mm-brief" key={current.id}>
          <p className="mm-brief-top"><span>{isNext ? "Next mission" : `Mission 0${active + 1} · Complete`}</span>{isNext ? <Lock size={16} /> : <Flag size={16} />}</p>
          <h3><span className="mm-brief-id">{isNext ? "2027" : current.id}</span>{current.title}</h3>
          <p className="mm-brief-text">{current.text}</p>
          <div className="mm-brief-meta">
            <span><CalendarDays size={16} />{current.year}</span>
            <span>{isNext ? <MapPin size={16} /> : <Flag size={16} />}{isNext ? "Kolkata, India" : `Edition ${active + 1} of 6`}</span>
          </div>
        </div>
        <ol className="mm-picker" aria-label="Select an edition">
          {all.map((e, i) => (
            <li key={e.id}>
              <button type="button" className={`${i === active ? "on" : ""} ${i < active ? "past" : ""}`} onClick={() => setActive(i)} aria-pressed={i === active}>
                <strong>{i === last ? "27" : e.id}</strong><span>{e.year}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
