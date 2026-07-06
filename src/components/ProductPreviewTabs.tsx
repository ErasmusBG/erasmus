"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Dictionary } from "@/dictionaries/types";

type ProductPreviewDict = Dictionary["productPreview"];

type ProductPreviewTabsProps = {
  dict: ProductPreviewDict;
};

type TabMedia = {
  id: string;
  images: readonly [string, ...string[]];
};

const TAB_MEDIA: readonly TabMedia[] = [
  {
    id: "tab1",
    images: [
      "/images/product-preview/2.png",
      "/images/product-preview/3.png",
      "/images/product-preview/4.png",
    ],
  },
  {
    id: "tab2",
    images: ["/images/product-preview/5.png", "/images/product-preview/6.png"],
  },
  {
    id: "tab3",
    images: ["/images/product-preview/1.png", "/images/product-preview/7.png"],
  },
  {
    id: "tab4",
    images: ["/images/product-preview/8.png", "/images/product-preview/9.png"],
  },
] as const;

type PreviewTab = {
  id: string;
  menu: string;
  title: string;
  description: string;
  images: readonly [string, ...string[]];
};

function buildTabs(dict: ProductPreviewDict): PreviewTab[] {
  return [
    {
      id: TAB_MEDIA[0].id,
      menu: dict.tab1_menu,
      title: dict.tab1_title,
      description: dict.tab1_desc,
      images: TAB_MEDIA[0].images,
    },
    {
      id: TAB_MEDIA[1].id,
      menu: dict.tab2_menu,
      title: dict.tab2_title,
      description: dict.tab2_desc,
      images: TAB_MEDIA[1].images,
    },
    {
      id: TAB_MEDIA[2].id,
      menu: dict.tab3_menu,
      title: dict.tab3_title,
      description: dict.tab3_desc,
      images: TAB_MEDIA[2].images,
    },
    {
      id: TAB_MEDIA[3].id,
      menu: dict.tab4_menu,
      title: dict.tab4_title,
      description: dict.tab4_desc,
      images: TAB_MEDIA[3].images,
    },
  ];
}

type ShowcaseProps = {
  tab: PreviewTab;
  tabIndex: number;
  activeImageIndex: number;
  onImageChange: (index: number) => void;
};

function TabCategoryBadge({
  label,
  active = true,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <span
      className={`mb-3 inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
        active
          ? "border border-sky-500/20 bg-sky-500/10 text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.15)]"
          : "border border-sky-500/10 bg-sky-500/5 text-sky-400/75"
      }`}
    >
      {label}
    </span>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function TabShowcase({
  tab,
  tabIndex,
  activeImageIndex,
  onImageChange,
}: ShowcaseProps) {
  const currentImage = tab.images[activeImageIndex] ?? tab.images[0];
  const hasThumbnails = tab.images.length > 1;
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <div className="cosmic-card relative overflow-hidden rounded-2xl border border-brand-cyan/20 bg-midnight-light/60 p-2 shadow-cyan-glow sm:p-3 md:rounded-3xl md:p-4">
      <div
        className="pointer-events-none absolute -bottom-8 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-brand-cyan/20 blur-[60px]"
        aria-hidden="true"
      />

      <div className="relative">
        <button
          type="button"
          onClick={() => openLightbox(currentImage)}
          className="group relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-brand-cyan/25 bg-midnight/80 shadow-cyan-glow transition-transform duration-300 hover:scale-[1.01]"
          aria-label={`Expand ${tab.title} preview`}
        >
          <Image
            key={`${tab.id}-${currentImage}`}
            src={currentImage}
            alt={`${tab.title} — ${activeImageIndex + 1} / ${tab.images.length}`}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-contain object-center p-1 transition-opacity duration-300 sm:p-2"
            priority={tabIndex === 0 && activeImageIndex === 0}
          />
          <span
            className="pointer-events-none absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/[0.04]"
            aria-hidden="true"
          />
        </button>

        {hasThumbnails && (
          <div
            className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-4 sm:gap-3 [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label={`${tab.menu} screenshots`}
          >
            {tab.images.map((src, index) => {
              const isActive = index === activeImageIndex;

              return (
                <button
                  key={src}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${tab.title} screenshot ${index + 1}`}
                  onClick={() => onImageChange(index)}
                  className={`relative min-h-11 min-w-[4.5rem] shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 sm:min-w-[5.5rem] ${
                    isActive
                      ? "border-brand-cyan/60 shadow-cyan-glow"
                      : "border-white/15 bg-white/5 hover:border-brand-cyan/35"
                  }`}
                >
                  <div className="relative aspect-[16/10] w-[4.5rem] sm:w-[5.5rem]">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="88px"
                      className="object-cover object-top"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {isMounted &&
        isLightboxOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md md:p-8"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${tab.title} full screen preview`}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:right-8 md:top-8"
              aria-label="Close preview"
            >
              <CloseIcon />
            </button>

            <div
              className="relative mx-auto w-full max-w-5xl animate-scale-up"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[min(85vh,56rem)] w-full overflow-hidden rounded-xl border border-white/10 bg-midnight/40 shadow-2xl">
                <Image
                  src={lightboxImage}
                  alt={`${tab.title} full screen preview`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

export default function ProductPreviewTabs({ dict }: ProductPreviewTabsProps) {
  const tabs = buildTabs(dict);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeTab = tabs[activeTabIndex];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeTabIndex]);

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section
      className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8"
      aria-labelledby="product-preview-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <h2
            id="product-preview-heading"
            className="text-2xl font-bold text-white sm:text-3xl md:text-4xl"
          >
            {dict.sectionTitle}
          </h2>
          <p className="mt-3 text-base text-slate-400 sm:mt-4 sm:text-lg">
            {dict.sectionSubtitle}
          </p>
        </header>

        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="order-2 lg:order-1">
            <div
              className="mb-5 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label={dict.sectionTitle}
            >
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTabIndex === index}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => handleTabChange(index)}
                  className={`min-h-11 shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                    activeTabIndex === index
                      ? "border-brand-cyan/50 bg-brand-cyan/15 text-white shadow-cyan-glow"
                      : "border-white/10 bg-white/5 text-brand-silver hover:border-brand-cyan/30 hover:text-white"
                  }`}
                >
                  {tab.menu}
                </button>
              ))}
            </div>

            <div
              className="hidden space-y-2 lg:block"
              role="tablist"
              aria-label={dict.sectionTitle}
            >
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTabIndex === index}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}-desktop`}
                  onClick={() => handleTabChange(index)}
                  className={`group w-full rounded-2xl border p-4 text-left transition-all duration-300 md:p-5 ${
                    activeTabIndex === index
                      ? "cosmic-card border-brand-cyan/40 bg-white/[0.07] shadow-cyan-glow"
                      : "border-white/10 bg-white/[0.03] hover:border-brand-cyan/25 hover:bg-white/[0.05]"
                  }`}
                >
                  <TabCategoryBadge
                    label={tab.menu}
                    active={activeTabIndex === index}
                  />
                  <p className="text-base font-bold text-white md:text-lg">
                    {tab.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {tab.description}
                  </p>
                </button>
              ))}
            </div>

            <div
              className="cosmic-card rounded-2xl border border-white/10 p-4 lg:hidden"
              role="tabpanel"
              id={`panel-${activeTab.id}`}
              aria-labelledby={`tab-${activeTab.id}`}
            >
              <TabCategoryBadge label={activeTab.menu} />
              <h3 className="text-lg font-bold text-white">{activeTab.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {activeTab.description}
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <TabShowcase
              tab={activeTab}
              tabIndex={activeTabIndex}
              activeImageIndex={activeImageIndex}
              onImageChange={setActiveImageIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
