/* Decorative animated lightning bolts for the Footer section background */

import { BOLT_PATH } from "@/components/shared/boltPath";

export default function FooterLightningEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Ambient glow blob */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

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
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* ── Large background bolt (right side, gentle pulse, mirrored) ── */}
      <svg
        viewBox="0 0 60 120"
        fill="none"
        overflow="visible"
        className="absolute right-[4%] sm:right-[8%] top-1/2 -translate-y-1/2 h-[75%] max-h-64 w-auto scale-x-100"
        style={{ animation: "lightning-pulse 3.5s 1.75s ease-in-out infinite" }}
        aria-hidden="true"
      >
        <path d={BOLT_PATH} fill="#F59E0B" filter="url(#footer-bolt-glow-lg)" />
      </svg>

      {/* ── Flash bolt — top-right area ── */}
      <svg
        viewBox="0 0 60 120"
        fill="none"
        className="absolute right-[12%] sm:right-[18%] top-[10%] h-[30%] max-h-28 w-auto scale-x-100"
        style={{ animation: "lightning-flash 8s 4s linear infinite", opacity: 0 }}
        aria-hidden="true"
      >
        <path d={BOLT_PATH} fill="#FDE68A" filter="url(#footer-bolt-glow)" />
      </svg>

    </div>
  );
}
