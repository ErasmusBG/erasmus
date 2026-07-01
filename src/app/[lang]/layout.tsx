import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { getDictionary } from "@/app/get-dictionaries";
import { isValidLocale, locales, type Locale } from "@/i18n/locales";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang as Locale} dict={dict.nav} />
      <div className="relative z-10 flex flex-1 flex-col">{children}</div>
    </>
  );
}
