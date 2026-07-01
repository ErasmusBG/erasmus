import type { Dictionary } from "@/dictionaries/types";
import HeroVisual from "@/components/HeroVisual";

type HeroDict = Dictionary["hero"];

type HeroSectionProps = {
  hero: HeroDict;
};

function StatIcon({ id }: { id: string }) {
  const className = "h-5 w-5 text-brand-cyan-light";

  if (id === "partners") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    );
  }

  if (id === "destinations") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    );
  }

  if (id === "mobilities") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    );
  }

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-brand-silver" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      className="relative px-4 pb-4 pt-8 md:pt-10 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_75%_35%,rgba(14,165,233,0.05),transparent)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-12 lg:gap-6">
          <div className="text-center lg:col-span-6 lg:pr-2 lg:text-left xl:pr-4">
            <p className="mb-3 inline-flex items-center rounded-full border border-brand-gold/25 bg-brand-gold/10 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-widest text-brand-gold sm:mb-4 sm:px-4 sm:text-xs">
              {hero.badge}
            </p>

            <h1
              id="hero-heading"
              className="text-[1.65rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[2.85rem]"
            >
              {hero.titlePrefix}{" "}
              <span className="text-gradient-gold">{hero.titleHighlight}</span>
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand-silver sm:mt-4 sm:text-base lg:mx-0 lg:max-w-md xl:max-w-lg">
              {hero.subtitle}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#request-mobility"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-gold-bright via-brand-gold to-[#B8962E] px-6 py-3 text-sm font-bold text-midnight shadow-gold-glow transition-all duration-300 hover:scale-[1.02] hover:from-brand-gold-bright hover:to-brand-gold hover:shadow-gold-glow-lg sm:w-auto sm:px-7 sm:text-base"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#destinations"
                className="glass inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-midnight-light/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] sm:w-auto sm:px-7 sm:text-base"
              >
                {hero.secondaryCta}
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroVisual />
          </div>
        </div>

        <div className="mt-7 lg:mt-8">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
            {hero.stats.map((stat) => (
              <div
                key={stat.id}
                className="cosmic-card flex min-h-[4.25rem] items-center gap-2.5 rounded-xl p-2.5 shadow-cyan-glow sm:min-h-[4.75rem] sm:gap-3 sm:rounded-2xl sm:p-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-cyan/25 bg-brand-cyan/10 sm:h-10 sm:w-10">
                  <StatIcon id={stat.id} />
                </div>
                <p className="text-left text-[0.7rem] font-semibold leading-snug text-white sm:text-xs lg:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
