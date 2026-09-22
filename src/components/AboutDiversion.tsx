import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cityImage from "@/assets/diversion-city-rain.jpg";

const domains = ["Web Development", "Web3", "Artificial Intelligence", "AR / VR", "Cloud Computing", "& Beyond"];

export function AboutDiversion() {
  return (
    <article className="about" aria-labelledby="about-title">
      <div className="about-poster">
        <img src={cityImage} alt="" className="about-poster-img grade-photo" width={1600} height={1008} loading="lazy" />
        <div className="about-poster-shade" />
        <p className="about-eyebrow">IEM ACM presents</p>
        <h3 id="about-title" className="about-title">
          <span>Diversion</span>
          <b>2K27</b>
        </h3>
        <p className="about-tag">Hack. Build. Network. Create Impact.</p>
        <ul className="about-chips" aria-label="Domains">
          {domains.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </div>

      <div className="about-copy">
        <div className="about-intro" aria-label="Build the impossible in Kolkata">
          <span>We are here to</span>
          <strong className="about-type">build the impossible_</strong>
          <small>in Kolkata.</small>
        </div>
        <section>
          <span className="about-chapter">01 · The dream</span>
          <p>Do you remember a time when your imagination was a universe without limits, where any idea could be pieced together to form a masterpiece? For years, Diversion has been the echo of that childhood dream, a space crafted year after year to honour the builder within you. We have consistently believed that the most profound innovations begin as fragments of a daring vision, and with each edition, we have laid the groundwork for brilliance.</p>
        </section>
        <section>
          <span className="about-chapter">02 · The legacy</span>
          <p>Now, Diversion 2k27 continues this legacy. We don't just give you a platform; we hand you the very components of creation. This is a fast-paced, idea-fueled hackathon where creativity meets cutting-edge technology in domains like Web Development, Web3, Artificial Intelligence, AR/VR, Cloud Computing, and beyond.</p>
        </section>
        <section>
          <span className="about-chapter">03 · The crew</span>
          <p>Whether you’re a developer, designer, blockchain trailblazer, or relentless problem-solver, you’ll discover an inclusive arena to turn bold visions into groundbreaking realities.</p>
        </section>
        <blockquote className="about-quote">
          It is a place for those with a fire in their hearts, an arena to channel that burning ambition into something tangible, something triumphant. It is your opportunity to direct that inner fire and forge a victory that is uniquely yours.
        </blockquote>
        <div className="about-actions">
          <Button asChild variant="city" className="about-round-link">
            <a href="#register"><span>Enter<br />DIVERSiON</span><ArrowUpRight /></a>
          </Button>
          <Button asChild variant="cityOutline" className="about-round-link secondary">
            <a href="#tracks"><span>Explore<br />the city</span><ArrowDownRight /></a>
          </Button>
        </div>
      </div>
    </article>
  );
}
