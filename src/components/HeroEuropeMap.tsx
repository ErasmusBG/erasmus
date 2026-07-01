export default function HeroEuropeMap() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08)_0%,transparent_65%)]" />
      <svg
        viewBox="0 0 900 700"
        className="h-[85%] w-[120%] max-w-none opacity-[0.18] sm:opacity-[0.22] lg:opacity-[0.28]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mapGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.2" />
          </linearGradient>
          <filter id="mapBlur">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        <path
          d="M420 120 C480 100 540 110 580 150 C620 130 680 140 720 180 C760 200 780 250 770 300 C790 340 780 400 740 440 C700 480 640 500 580 490 C520 510 460 500 420 470 C380 490 320 480 280 450 C240 470 180 460 150 420 C110 400 100 350 120 300 C100 250 120 200 160 170 C200 140 260 130 320 140 C360 110 390 115 420 120 Z"
          stroke="url(#mapGlow)"
          strokeWidth="1.5"
          fill="rgba(56,189,248,0.04)"
          filter="url(#mapBlur)"
        />

        <path
          d="M380 200 L420 180 L460 200 L480 240 L450 280 L400 270 L370 230 Z"
          stroke="rgba(56,189,248,0.35)"
          strokeWidth="1"
          fill="rgba(14,165,233,0.06)"
        />
        <path
          d="M500 220 L540 200 L580 230 L570 280 L520 290 L490 250 Z"
          stroke="rgba(56,189,248,0.35)"
          strokeWidth="1"
          fill="rgba(14,165,233,0.06)"
        />
        <path
          d="M300 280 L340 260 L370 300 L350 350 L300 340 Z"
          stroke="rgba(56,189,248,0.3)"
          strokeWidth="1"
          fill="rgba(14,165,233,0.05)"
        />
        <path
          d="M580 320 L620 300 L660 330 L650 380 L600 390 L570 350 Z"
          stroke="rgba(56,189,248,0.3)"
          strokeWidth="1"
          fill="rgba(14,165,233,0.05)"
        />

        {[
          [420, 180],
          [540, 220],
          [620, 180],
          [340, 280],
          [580, 340],
          [480, 380],
          [360, 380],
          [650, 260],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="rgba(56,189,248,0.15)" />
            <circle cx={cx} cy={cy} r="3" fill="#38BDF8" opacity="0.7" />
          </g>
        ))}

        <path
          d="M420 180 L540 220 M540 220 L620 180 M420 180 L340 280 M540 220 L580 340 M340 280 L480 380"
          stroke="rgba(56,189,248,0.2)"
          strokeWidth="0.75"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
}
