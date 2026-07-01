export default function EuStarsAccent() {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    const cx = 50 + 38 * Math.cos(angle);
    const cy = 50 + 38 * Math.sin(angle);
    return { cx, cy };
  });

  return (
    <div
      className="pointer-events-none absolute right-[8%] top-[12%] hidden opacity-[0.12] sm:block lg:right-[14%] lg:top-[10%] lg:opacity-[0.15]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="h-24 w-24 lg:h-32 lg:w-32">
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="rgba(212,175,55,0.35)"
          strokeWidth="0.5"
          fill="none"
        />
        {stars.map((star, i) => (
          <polygon
            key={i}
            points={`${star.cx},${star.cy - 2.5} ${star.cx + 0.8},${star.cy - 0.8} ${star.cx + 2.5},${star.cy - 0.8} ${star.cx + 1.2},${star.cy + 0.6} ${star.cx + 1.8},${star.cy + 2.5} ${star.cx},${star.cy + 1.4} ${star.cx - 1.8},${star.cy + 2.5} ${star.cx - 1.2},${star.cy + 0.6} ${star.cx - 2.5},${star.cy - 0.8} ${star.cx - 0.8},${star.cy - 0.8}`}
            fill="rgba(255,255,255,0.5)"
          />
        ))}
      </svg>
    </div>
  );
}
