import Providers from "./providers";

const LOCALES = ["en", "es"];

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}

async function getMessages(locale: string) {
  const messageModule = await import(`@/i18n/messages/${locale}.json`);

  return messageModule.default;
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const messages = await getMessages(params.locale);
  return (
    <html lang={params.locale}>
      <Providers messages={messages} locale={params.locale}>
        {children}
      </Providers>
    </html>
  );
}
