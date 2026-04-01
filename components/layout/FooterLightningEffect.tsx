/* Decorative animated lightning bolts for the Footer section background */

const BOLT_PATH = "M 45 0 L 12 65 L 32 65 L 2 120 L 58 55 L 35 55 Z";

export default function FooterLightningEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Shared SVG glow filter */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="footer-bolt-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="footer-bolt-glow-lg" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* ── Large background bolt (left side, gentle pulse) ── */}
      <svg
        viewBox="0 0 60 120"
        fill="none"
        className="absolute left-[4%] sm:left-[8%] top-1/2 -translate-y-1/2 h-[75%] max-h-64 w-auto -scale-x-100"
        style={{ animation: "lightning-pulse 3.5s ease-in-out infinite" }}
        aria-hidden="true"
      >
        <path d={BOLT_PATH} fill="#F59E0B" filter="url(#footer-bolt-glow-lg)" />
      </svg>

      {/* ── Flash bolt 1 — top-left area ── */}
      <svg
        viewBox="0 0 60 120"
        fill="none"
        className="absolute left-[12%] sm:left-[18%] top-[10%] h-[30%] max-h-28 w-auto -scale-x-100"
        style={{ animation: "lightning-flash 8s 1s ease-in-out infinite", opacity: 0 }}
        aria-hidden="true"
      >
        <path d={BOLT_PATH} fill="#FDE68A" filter="url(#footer-bolt-glow)" />
      </svg>

      {/* ── Flash bolt 2 — lower-left area, delayed ── */}
      <svg
        viewBox="0 0 60 120"
        fill="none"
        className="absolute left-[2%] sm:left-[4%] bottom-[15%] h-[25%] max-h-24 w-auto -scale-x-100"
        style={{ animation: "lightning-flash 8s 5s ease-in-out infinite", opacity: 0 }}
        aria-hidden="true"
      >
        <path d={BOLT_PATH} fill="#FDE68A" filter="url(#footer-bolt-glow)" />
      </svg>

      {/* ── Subtle horizontal arc lines ── */}
      <svg
        viewBox="0 0 300 10"
        fill="none"
        className="absolute left-0 top-1/3 w-1/2 sm:w-2/5 max-w-xs"
        style={{ animation: "lightning-flash 8s 3s ease-in-out infinite", opacity: 0 }}
        aria-hidden="true"
      >
        <polyline
          points="0,5 40,2 90,8 150,1 200,7 260,3 300,5"
          stroke="#FCD34D"
          strokeWidth="1.5"
          fill="none"
          filter="url(#footer-bolt-glow)"
        />
      </svg>
    </div>
  );
}
