/* Decorative animated lightning bolts for the Hero section background */

import { BOLT_PATH } from "@/components/shared/boltPath";

export default function LightningEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Shared SVG glow filter */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="bolt-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="bolt-glow-lg" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* ── Large background bolt (right side, gentle pulse) ── */}
      <svg
        viewBox="0 0 60 120"
        fill="none"
        className="absolute right-[4%] sm:right-[8%] top-1/2 -translate-y-1/2 h-[75%] max-h-96 w-auto"
        style={{ animation: "lightning-pulse 3.5s ease-in-out infinite" }}
        aria-hidden="true"
      >
        <path d={BOLT_PATH} fill="#F59E0B" filter="url(#bolt-glow-lg)" />
      </svg>

      {/* ── Flash bolt 1 — top-right area ── */}
      <svg
        viewBox="0 0 60 120"
        fill="none"
        className="absolute right-[12%] sm:right-[18%] top-[8%] h-[35%] max-h-44 w-auto"
        style={{ animation: "lightning-flash 8s 0s ease-in-out infinite", opacity: 0 }}
        aria-hidden="true"
      >
        <path d={BOLT_PATH} fill="#FDE68A" filter="url(#bolt-glow)" />
      </svg>

      {/* ── Flash bolt 2 — lower-right area, delayed ── */}
      <svg
        viewBox="0 0 60 120"
        fill="none"
        className="absolute right-[2%] sm:right-[4%] bottom-[12%] h-[28%] max-h-36 w-auto"
        style={{ animation: "lightning-flash 8s 4s ease-in-out infinite", opacity: 0 }}
        aria-hidden="true"
      >
        <path d={BOLT_PATH} fill="#FDE68A" filter="url(#bolt-glow)" />
      </svg>

      {/* ── Subtle horizontal arc lines ── */}
      <svg
        viewBox="0 0 300 10"
        fill="none"
        className="absolute right-0 top-1/3 w-1/2 sm:w-2/5 max-w-xs"
        style={{ animation: "lightning-flash 8s 2s ease-in-out infinite", opacity: 0 }}
        aria-hidden="true"
      >
        <polyline
          points="0,5 40,2 90,8 150,1 200,7 260,3 300,5"
          stroke="#FCD34D"
          strokeWidth="1.5"
          fill="none"
          filter="url(#bolt-glow)"
        />
      </svg>
    </div>
  );
}
