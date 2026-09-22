import { useState } from "react";
import { ArrowUpRight, Code2, Trophy, Users, Zap } from "lucide-react";
import buildImage from "@/assets/diversion-build-night.jpg";
import competeImage from "@/assets/diversion-city-rain.jpg";
import winImage from "@/assets/diversion-rooftop.jpg";
import connectImage from "@/assets/diversion-riverside.jpg";

const missions = [
  { number: "01", title: "Build", text: "Turn an idea into something real.", action: "Start creating", href: "#tracks", icon: Code2, image: buildImage },
  { number: "02", title: "Compete", text: "Take on the city's toughest challenges.", action: "Choose a track", href: "#tracks", icon: Zap, image: competeImage },
  { number: "03", title: "Win", text: "Earn prizes, recognition, and opportunities.", action: "See the bounty", href: "#prizes", icon: Trophy, image: winImage },
  { number: "04", title: "Connect", text: "Meet builders, mentors, and industry.", action: "Join the crew", href: "#register", icon: Users, image: connectImage },
];

export function MissionSelector() {
  const [active, setActive] = useState(0);

  return (
    <div className="mission-selector">
      <div className="mission-list" role="tablist" aria-label="Choose a mission">
        {missions.map((mission, index) => {
          const Icon = mission.icon;
          return (
            <button
              key={mission.number}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls={`mission-panel-${mission.number}`}
              id={`mission-tab-${mission.number}`}
              className={active === index ? "is-active" : ""}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <span>{mission.number}</span>
              <Icon size={20} />
              <strong>{mission.title}</strong>
            </button>
          );
        })}
      </div>

      {missions.map((mission, index) => (
        <article
          key={mission.number}
          id={`mission-panel-${mission.number}`}
          role="tabpanel"
          aria-labelledby={`mission-tab-${mission.number}`}
          hidden={active !== index}
          className="mission-feature"
        >
          <img src={mission.image} alt="" width={1600} height={1008} loading="lazy" />
          <div className="mission-feature-shade" />
          <div className="mission-feature-copy">
            <p>Mission {mission.number} · Ready</p>
            <h3>{mission.title}</h3>
            <span>{mission.text}</span>
            <a href={mission.href}>{mission.action}<ArrowUpRight size={20} /></a>
          </div>
        </article>
      ))}
    </div>
  );
}
