import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OfferActionBar from "@/components/OfferActionBar";
import { getDictionary } from "@/app/get-dictionaries";
import { isValidLocale } from "@/i18n/locales";

const panelClassName =
  "glass offer-section rounded-2xl p-4 sm:p-6 md:p-8 print:rounded-none print:border print:border-slate-300 print:bg-white print:shadow-none";

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
    title: dict.metadata.offer.title,
    description: dict.metadata.offer.description,
  };
}

export default async function OfferPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const offer = dict.offerProposal;

  return (
    <>
      <OfferActionBar labels={offer.actionBar} />

      <main className="offer-document mx-auto max-w-4xl px-4 py-8 pb-28 sm:px-6 sm:py-10 sm:pb-28 md:py-14 print:max-w-none print:px-0 print:py-0 print:pb-0 print:text-black">
        <header className={`${panelClassName} mb-6 sm:mb-8`}>
          <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-6 print:border-slate-300 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold print:text-slate-600">
                {offer.header.badge}
              </p>
              <h1 className="mt-2 text-xl font-bold text-white print:text-slate-900 sm:text-2xl md:text-3xl">
                {offer.header.title}
              </h1>
              <p className="mt-2 text-base font-medium text-brand-silver print:text-slate-700 sm:text-lg">
                {offer.header.subtitle}
              </p>
            </div>
            <div className="shrink-0 text-left sm:text-right">
              <p className="text-xl font-bold text-white print:text-slate-900 sm:text-2xl">
                Erasmus
                <span className="text-brand-gold print:text-slate-800">Links</span>
              </p>
              <p className="mt-1 text-xs text-brand-silver print:text-slate-600">
                {offer.header.brandTagline}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {offer.meta.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 print:border-slate-200 print:bg-slate-50"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold print:text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-white print:text-slate-900 sm:text-base">
                  {item.value}
                </p>
                <p className="mt-0.5 text-xs text-brand-silver print:text-slate-600 sm:text-sm">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </header>

        <section
          className={`${panelClassName} mb-6 sm:mb-8`}
          aria-labelledby="blueprint-heading"
        >
          <h2
            id="blueprint-heading"
            className="mb-2 text-lg font-bold text-white print:text-slate-900 sm:text-xl md:text-2xl"
          >
            {offer.blueprint.headingPrefix}{" "}
            <span className="text-gradient-gold">{offer.blueprint.headingHighlight}</span>
          </h2>
          <p className="mb-6 text-sm text-brand-silver print:text-slate-700 sm:mb-8 sm:text-base">
            {offer.blueprint.subtitle}
          </p>

          <ol className="relative space-y-0">
            <div
              className="absolute bottom-4 left-[1.125rem] top-4 w-px bg-gradient-to-b from-brand-gold/60 via-brand-gold/30 to-transparent print:left-4 print:bg-slate-300"
              aria-hidden="true"
            />
            {offer.blueprint.timeline.map((entry, index) => (
              <li
                key={`${entry.day}-${index}`}
                className="offer-timeline-item relative flex gap-4 pb-6 last:pb-0 sm:gap-5 sm:pb-8"
              >
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-gold/50 bg-navy text-xs font-bold text-brand-gold shadow-gold-glow print:border-slate-400 print:bg-white print:text-slate-800 print:shadow-none sm:h-9 sm:w-9">
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold print:text-slate-500">
                    {entry.day}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-white print:text-slate-900 sm:text-base md:text-lg">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-xs text-brand-silver print:text-slate-700 sm:text-sm">
                    {entry.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className={`${panelClassName} mb-6 sm:mb-8`}
          aria-labelledby="evidence-heading"
        >
          <h2
            id="evidence-heading"
            className="mb-2 text-lg font-bold text-white print:text-slate-900 sm:text-xl md:text-2xl"
          >
            {offer.evidence.headingPrefix}{" "}
            <span className="text-gradient-gold">{offer.evidence.headingHighlight}</span>
          </h2>
          <p className="mb-5 text-sm text-brand-silver print:text-slate-700 sm:mb-6 sm:text-base">
            {offer.evidence.subtitle}
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {offer.evidence.items.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-brand-gold/20 bg-brand-gold/5 p-4 print:border-slate-300 print:bg-slate-50 sm:p-5"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/20 print:bg-slate-200"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-3.5 w-3.5 text-brand-gold print:text-slate-700"
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
                  <h3 className="text-sm font-semibold text-white print:text-slate-900 sm:text-base">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-brand-silver print:text-slate-700 sm:text-sm">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className={`${panelClassName} mb-6 sm:mb-8`}
          aria-labelledby="pricing-heading"
        >
          <h2
            id="pricing-heading"
            className="mb-2 text-lg font-bold text-white print:text-slate-900 sm:text-xl md:text-2xl"
          >
            {offer.pricing.headingPrefix}{" "}
            <span className="text-gradient-gold">{offer.pricing.headingHighlight}</span>
          </h2>
          <p className="mb-5 text-sm text-brand-silver print:text-slate-700 sm:mb-6 sm:text-base">
            {offer.pricing.subtitle}
          </p>

          <div className="overflow-x-auto overflow-y-hidden rounded-xl border border-white/10 print:border-slate-300">
            <table className="w-full min-w-[320px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 print:border-slate-300 print:bg-slate-100">
                  <th
                    scope="col"
                    className="px-3 py-3 font-semibold text-white print:text-slate-900 sm:px-6"
                  >
                    {offer.pricing.table.lineItem}
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3 font-semibold text-white print:text-slate-900 sm:table-cell sm:px-6"
                  >
                    {offer.pricing.table.description}
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-right font-semibold text-white print:text-slate-900 sm:px-6"
                  >
                    {offer.pricing.table.amount}
                  </th>
                </tr>
              </thead>
              <tbody>
                {offer.pricing.rows.map((row) => (
                  <tr
                    key={row.item}
                    className="offer-table-row border-b border-white/10 print:border-slate-200"
                  >
                    <td className="px-3 py-3 font-medium text-white print:text-slate-900 sm:px-6 sm:py-4">
                      {row.item}
                      <p className="mt-1 text-xs font-normal text-brand-silver print:text-slate-600 sm:hidden">
                        {row.description}
                      </p>
                    </td>
                    <td className="hidden px-3 py-3 text-brand-silver print:text-slate-700 sm:table-cell sm:px-6 sm:py-4">
                      {row.description}
                    </td>
                    <td className="px-3 py-3 text-right font-semibold text-white print:text-slate-900 sm:px-6 sm:py-4">
                      {row.amount}
                    </td>
                  </tr>
                ))}
                <tr className="bg-brand-gold/10 print:bg-slate-100">
                  <td
                    colSpan={2}
                    className="px-3 py-3 text-sm font-bold text-white print:text-slate-900 sm:px-6 sm:py-4 sm:text-base"
                  >
                    {offer.pricing.grossTotalLabel}
                  </td>
                  <td className="px-3 py-3 text-right text-base font-bold text-brand-gold print:text-slate-900 sm:px-6 sm:py-4 sm:text-lg">
                    {offer.pricing.grossTotal}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-4 py-3 text-xs font-medium text-brand-gold print:border-slate-400 print:bg-slate-50 print:text-slate-800 sm:mt-5 sm:text-sm">
            {offer.pricing.fundingNote}
          </p>
        </section>

        <footer className="offer-section border-t border-white/10 pt-5 text-center print:border-slate-300 sm:pt-6">
          <p className="text-xs text-brand-silver print:text-slate-600 sm:text-sm">
            {offer.documentFooter.validity}
          </p>
          <p className="mt-2 text-[0.65rem] text-brand-silver/70 print:text-slate-500 sm:text-xs">
            {offer.documentFooter.confidential}
          </p>
        </footer>
      </main>
    </>
  );
}
