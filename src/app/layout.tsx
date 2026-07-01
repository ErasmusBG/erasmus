import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ErasmusLinks | Premium European Mobility Partner Network",
  description:
    "Integrating fragmented local providers into complete mobility solutions for schools, VET, and NGOs across Europe.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const lang = headersList.get("x-locale") ?? "en";

  return (
    <html lang={lang} className={`${inter.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col font-sans text-white">
        <div
          className="pointer-events-none fixed inset-0 overflow-hidden print:hidden"
          aria-hidden="true"
        >
          <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] animate-float-blob rounded-full bg-brand-cyan/8 blur-[120px]" />
          <div className="absolute -right-24 top-1/3 h-[32rem] w-[32rem] animate-float-blob-delayed rounded-full bg-brand-cyan-light/6 blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] animate-float-blob-slow rounded-full bg-brand-cyan/6 blur-[120px]" />
        </div>

        {children}
      </body>
    </html>
  );
}
