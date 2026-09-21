import palmImage from "@/assets/bg-palm-sunset.jpg";

const domains = ["Web Development", "Web3", "Artificial Intelligence", "AR / VR", "Cloud Computing", "& Beyond"];

export function AboutDiversion() {
  return (
    <article className="about" aria-labelledby="about-title">
      <div className="about-poster">
        <img src={palmImage} alt="" className="about-poster-img" loading="lazy" />
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
      </div>
    </article>
  );
}
