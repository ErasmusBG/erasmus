import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/get-dictionaries";
import { isValidLocale, type Locale } from "@/i18n/locales";
import ProductPreviewTabs from "@/components/ProductPreviewTabs";
import HeroSection from "@/components/HeroSection";

const destinationSlugs = [
  "italy",
  "spain",
  "malta",
  "portugal",
  "cyprus",
  "estonia",
  "turkey",
] as const;

const serviceAccents = [
  "from-brand-cyan/20 to-transparent",
  "from-brand-cyan-light/15 to-transparent",
  "from-brand-cyan/15 to-transparent",
  "from-brand-cyan-light/20 to-transparent",
] as const;

const inputClassName =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-brand-silver/50 transition-colors focus:border-brand-gold/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 sm:text-sm";

const labelClassName = "mb-2 block text-sm font-medium text-white";

const cardHoverClassName =
  "transition-all duration-300 hover:scale-[1.02] hover:border-brand-cyan/30";

function PillarIcon({ id }: { id: string }) {
  if (id === "for-schools") {
    return (
      <svg
        className="h-7 w-7 text-brand-cyan sm:h-8 sm:w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    );
  }

  if (id === "for-vet") {
    return (
      <svg
        className="h-7 w-7 text-brand-cyan sm:h-8 sm:w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    );
  }

  return (
    <svg
      className="h-7 w-7 text-brand-cyan sm:h-8 sm:w-8"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const dict = await getDictionary(lang);

  return {
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const {
    hero,
    pillars,
    coreServices,
    destinations,
    evidencePack,
    leadForm,
    footer,
    productPreview,
  } = dict;

  return (
    <main className="flex flex-1 flex-col">
      <HeroSection hero={hero} />

      <ProductPreviewTabs dict={productPreview} />

      <section
        className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8"
        aria-labelledby="value-proposition-heading"
      >
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <h2
              id="value-proposition-heading"
              className="text-2xl font-bold text-white sm:text-3xl md:text-4xl"
            >
              {pillars.headingPrefix}{" "}
              <span className="text-gradient-gold">{pillars.headingHighlight}</span>
            </h2>
            <p className="mt-3 text-base text-brand-silver sm:mt-4 sm:text-lg">
              {pillars.subtitle}
            </p>
          </header>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {pillars.items.map((pillar) => (
              <article
                key={pillar.id}
                id={pillar.id}
                className={`glass group rounded-2xl p-4 shadow-cyan-glow md:p-8 ${cardHoverClassName}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-cyan/25 bg-brand-cyan/10 transition-colors duration-300 group-hover:border-brand-cyan/40 group-hover:bg-brand-cyan/15 sm:mb-5 sm:h-14 sm:w-14">
                  <PillarIcon id={pillar.id} />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan-light">
                  {pillar.audience}
                </p>
                <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">
                  {pillar.title}
                </h3>
                <p className="text-sm text-brand-silver sm:text-base">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8"
        aria-labelledby="core-services-heading"
      >
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <h2
              id="core-services-heading"
              className="text-2xl font-bold text-white sm:text-3xl md:text-4xl"
            >
              {coreServices.headingPrefix}{" "}
              <span className="text-gradient-gold">
                {coreServices.headingHighlight}
              </span>
            </h2>
            <p className="mt-3 text-base text-brand-silver sm:mt-4 sm:text-lg">
              {coreServices.subtitle}
            </p>
          </header>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {coreServices.items.map((service, index) => (
              <article
                key={service.title}
                className={`glass group relative overflow-hidden rounded-2xl p-4 shadow-cyan-glow md:p-8 ${cardHoverClassName}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${serviceAccents[index]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="mb-4 h-1 w-12 rounded-full bg-brand-cyan shadow-cyan-glow" />
                  <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-silver sm:text-base">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="destinations"
        className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8"
        aria-labelledby="destinations-heading"
      >
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <h2
              id="destinations-heading"
              className="text-2xl font-bold text-white sm:text-3xl md:text-4xl"
            >
              {destinations.headingPrefix}{" "}
              <span className="text-gradient-gold">{destinations.headingHighlight}</span>
            </h2>
            <p className="mt-3 text-base text-brand-silver sm:mt-4 sm:text-lg">
              {destinations.subtitle}
            </p>
          </header>
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            {destinations.items.map((destination) => (
              <div
                key={destination.name}
                className={`cosmic-card flex cursor-default items-center justify-center gap-2 rounded-full px-4 py-3 shadow-cyan-glow sm:gap-3 sm:px-6 ${cardHoverClassName}`}
              >
                <span className="text-xl sm:text-2xl" aria-hidden="true">
                  {destination.flag}
                </span>
                <span className="text-xs font-semibold text-white sm:text-sm">
                  {destination.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="quality-framework"
        className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8"
        aria-labelledby="evidence-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="glass-strong overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
              <div className="p-4 sm:p-8 md:p-12 lg:p-14">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-gold sm:mb-4">
                  {evidencePack.badge}
                </p>
                <h2
                  id="evidence-heading"
                  className="text-2xl font-bold text-white sm:text-3xl md:text-4xl"
                >
                  {evidencePack.headingPrefix}{" "}
                  <span className="text-gradient-gold">
                    {evidencePack.headingHighlight}
                  </span>
                </h2>
                <p className="mt-4 text-sm text-brand-silver sm:mt-5 sm:text-base">
                  {evidencePack.paragraph1}
                </p>
                <p className="mt-3 text-sm text-brand-silver sm:mt-4 sm:text-base">
                  {evidencePack.paragraph2}
                </p>
              </div>
              <div className="border-t border-white/10 bg-white/[0.02] p-4 sm:p-8 md:p-12 lg:border-l lg:border-t-0 lg:p-14">
                <ul className="space-y-5 sm:space-y-6">
                  {evidencePack.items.map((item) => (
                    <li key={item.title} className="flex gap-3 sm:gap-4">
                      <div
                        className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-3.5 w-3.5 text-brand-gold"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white sm:text-base">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs text-brand-silver sm:text-sm">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="request-mobility"
        className="px-4 py-12 pb-24 sm:px-6 sm:py-16 sm:pb-28 md:py-20 lg:px-8"
        aria-labelledby="form-heading"
      >
        <div className="mx-auto max-w-3xl">
          <header className="mb-8 text-center sm:mb-10">
            <h2
              id="form-heading"
              className="text-2xl font-bold text-white sm:text-3xl md:text-4xl"
            >
              {leadForm.headingPrefix}{" "}
              <span className="text-gradient-gold">{leadForm.headingHighlight}</span>
            </h2>
            <p className="mt-3 text-base text-brand-silver sm:mt-4 sm:text-lg">
              {leadForm.subtitle}
            </p>
          </header>
          <form
            className={`glass rounded-2xl p-4 sm:rounded-3xl sm:p-8 md:p-10 ${cardHoverClassName}`}
            action="#"
            method="post"
          >
            <div className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="organization-type" className={labelClassName}>
                  {leadForm.organizationType}
                </label>
                <select
                  id="organization-type"
                  name="organizationType"
                  required
                  className={`${inputClassName} appearance-none`}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-navy text-brand-silver">
                    {leadForm.organizationTypePlaceholder}
                  </option>
                  <option value="school" className="bg-navy">
                    {leadForm.organizationTypes.school}
                  </option>
                  <option value="vet" className="bg-navy">
                    {leadForm.organizationTypes.vet}
                  </option>
                  <option value="ngo" className="bg-navy">
                    {leadForm.organizationTypes.ngo}
                  </option>
                  <option value="municipality" className="bg-navy">
                    {leadForm.organizationTypes.municipality}
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="destination-hub" className={labelClassName}>
                  {leadForm.destinationHub}
                </label>
                <select
                  id="destination-hub"
                  name="destinationHub"
                  required
                  className={`${inputClassName} appearance-none`}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-navy text-brand-silver">
                    {leadForm.destinationHubPlaceholder}
                  </option>
                  {destinations.items.map((destination, index) => (
                    <option
                      key={destination.name}
                      value={destinationSlugs[index]}
                      className="bg-navy"
                    >
                      {destination.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label htmlFor="group-size" className={labelClassName}>
                    {leadForm.groupSize}
                  </label>
                  <input
                    type="number"
                    id="group-size"
                    name="groupSize"
                    min={1}
                    max={500}
                    required
                    placeholder={leadForm.groupSizePlaceholder}
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label htmlFor="estimated-budget" className={labelClassName}>
                    {leadForm.estimatedBudget}
                  </label>
                  <input
                    type="text"
                    id="estimated-budget"
                    name="estimatedBudget"
                    required
                    placeholder={leadForm.estimatedBudgetPlaceholder}
                    className={inputClassName}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-name" className={labelClassName}>
                  {leadForm.contactName}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="contactName"
                  required
                  placeholder={leadForm.contactNamePlaceholder}
                  className={inputClassName}
                  autoComplete="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label htmlFor="contact-email" className={labelClassName}>
                    {leadForm.contactEmail}
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="contactEmail"
                    required
                    placeholder={leadForm.contactEmailPlaceholder}
                    className={inputClassName}
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className={labelClassName}>
                    {leadForm.contactPhone}
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="contactPhone"
                    required
                    placeholder={leadForm.contactPhonePlaceholder}
                    className={inputClassName}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 min-h-12 w-full rounded-full bg-brand-gold px-6 py-4 text-sm font-bold text-navy shadow-gold-glow transition-all duration-300 hover:scale-[1.02] hover:bg-brand-gold-bright hover:shadow-gold-glow-lg sm:px-8 sm:text-base"
              >
                {leadForm.submit}
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
          <p className="text-xs text-brand-silver sm:text-sm">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
          <p className="text-xs text-brand-silver sm:text-sm">{footer.tagline}</p>
        </div>
      </footer>
    </main>
  );
}
