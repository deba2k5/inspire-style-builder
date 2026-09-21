import { useEffect, useState } from "react";
import { Users } from "lucide-react";

// Free, keyless hit counter (https://abacus.jasoncameron.dev). Each browser is counted once.
const API = "https://abacus.jasoncameron.dev";
const NAMESPACE = "diversion-2027-iem-acm";
const KEY = "launch";
const SEEN = "diversion-visitor-counted";

async function readCount(): Promise<number | null> {
  let counted = false;
  try { counted = localStorage.getItem(SEEN) === "1"; } catch { /* storage blocked: count every load */ }
  try {
    const res = await fetch(`${API}/${counted ? "get" : "hit"}/${NAMESPACE}/${KEY}`);
    if (!res.ok) return null;
    const { value } = (await res.json()) as { value?: number };
    if (!counted) { try { localStorage.setItem(SEEN, "1"); } catch { /* ignore */ } }
    return typeof value === "number" ? value : null;
  } catch {
    return null;
  }
}

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let live = true;
    readCount().then((n) => live && setCount(n));
    return () => { live = false; };
  }, []);

  const digits = String(count ?? 0).padStart(6, "0").split("");

  return (
    <div className="visitors" role="status" aria-label={count === null ? "Visitor count loading" : `${count.toLocaleString()} visitors`}>
      <p className="visitors-label"><Users size={16} /> Visitors in the city</p>
      <div className={`visitors-odo ${count === null ? "loading" : ""}`} aria-hidden="true">
        {digits.map((d, i) => <span key={i}>{count === null ? "–" : d}</span>)}
      </div>
    </div>
  );
}
