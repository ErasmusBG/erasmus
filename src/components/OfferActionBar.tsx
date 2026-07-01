"use client";

import type { Dictionary } from "@/app/get-dictionaries";

type OfferActionBarProps = {
  labels: Dictionary["offerProposal"]["actionBar"];
};

export default function OfferActionBar({ labels }: OfferActionBarProps) {
  const handlePrint = () => {
    window.print();
  };

  const handleAccept = () => {
    window.alert(labels.acceptAlert);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:left-auto sm:right-6 sm:flex-row print:hidden">
      <button
        type="button"
        onClick={handlePrint}
        className="glass inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-brand-gold/30 sm:flex-none"
      >
        <svg
          className="h-4 w-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.23a48.394 48.394 0 0112.326 0c1.07.215 1.837 1.149 1.837 2.23V15.75A2.25 2.25 0 0118.75 18h-1.09M6.34 18h11.32"
          />
        </svg>
        {labels.print}
      </button>
      <button
        type="button"
        onClick={handleAccept}
        className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand-gold px-5 py-3 text-sm font-bold text-navy shadow-gold-glow transition-all duration-300 hover:scale-[1.02] hover:bg-brand-gold-bright hover:shadow-gold-glow-lg sm:flex-none"
      >
        <svg
          className="h-4 w-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
        {labels.accept}
      </button>
    </div>
  );
}
