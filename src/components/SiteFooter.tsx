import { ExternalLink, Github, Instagram, Linkedin, Mail, MapPin, Navigation, Twitter, Youtube } from "lucide-react";
import kolkataMap from "@/assets/kolkata-iem-map.webp";

const PLACE = "IEM Gurukul Building, Sector V, Salt Lake, Kolkata";
const OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PLACE)}`;
const ROUTE_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(PLACE)}`;

// TODO: replace each "#" with DIVERSiON's real profile URL.
const socials = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "X (Twitter)", icon: Twitter, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
  { label: "GitHub", icon: Github, href: "#" },
];

const links = [["The road", "#legacy"], ["Missions", "#missions"], ["Districts", "#tracks"], ["Prizes", "#prizes"], ["FAQ", "#faq"], ["Register", "#register"]];

export function SiteFooter() {
  return (
    <footer id="footer" className="site-footer">
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
        <p className="section-kicker">Find the city</p>
        <h2 className="section-title">All roads lead to <span className="font-graffiti text-primary">IEM</span></h2>

        <div className="ft-map-wrap">
          <a className="ft-map" href={OPEN_URL} target="_blank" rel="noopener noreferrer" aria-label={`Open ${PLACE} in Google Maps`}>
            <img src={kolkataMap} alt="DIVERSiON 2027 Kolkata route map: Airport, Howrah, Sealdah, Esplanade, Garia and EM Bypass routes all leading to IEM Gurukul Building, Sector V" width={1536} height={1024} loading="lazy" />
            <span className="ft-open"><ExternalLink size={16} /> Open in Google Maps</span>
          </a>

          <aside className="ft-card">
            <p className="ft-card-kicker">Destination</p>
            <h3>IEM Kolkata</h3>
            <p className="ft-card-sub">Gurukul Building</p>
            <p className="ft-address"><MapPin size={18} />Sector V, Salt Lake,<br />Kolkata, West Bengal</p>
            <div className="ft-actions">
              <a href={ROUTE_URL} target="_blank" rel="noopener noreferrer" className="ft-btn primary"><Navigation size={16} /> Get directions</a>
              <a href={OPEN_URL} target="_blank" rel="noopener noreferrer" className="ft-btn"><ExternalLink size={16} /> View on map</a>
            </div>
            <p className="ft-note">Different routes. Same destination.</p>
          </aside>
        </div>

        <div className="ft-grid">
          <div>
            <a href="#top" className="game-wordmark-small text-3xl">DIVERSiON</a>
            <p className="ft-blurb">A city-sized hackathon for builders ready to create real impact. Made in Kolkata. Built for everywhere.</p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="ft-head">Explore</p>
            <ul>{links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
          </nav>
          <div>
            <p className="ft-head">Follow the crew</p>
            <ul className="ft-social">
              {socials.map(({ label, icon: Icon, href }) => (
                <li key={label}><a href={href} aria-label={label} title={label}><Icon size={20} /></a></li>
              ))}
              <li><a href="mailto:hello@diversion.tech" aria-label="Email" title="Email"><Mail size={20} /></a></li>
            </ul>
            <p className="ft-mail">hello@diversion.tech</p>
          </div>
        </div>

        <div className="ft-bottom">
          <span>© 2027 DIVERSiON · Techno India University</span>
          <span>Same city. Bigger dreams.</span>
        </div>
      </div>
    </footer>
  );
}
