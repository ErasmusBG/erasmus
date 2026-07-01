import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative flex min-h-[380px] w-full select-none items-center justify-center pointer-events-none lg:min-h-[480px] lg:justify-end">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[80px]" />

      <div className="relative aspect-square w-full max-w-[520px] lg:max-w-[600px]">
        <Image
          src="/images/hero.png"
          alt="Erasmus Platform Graphic"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
