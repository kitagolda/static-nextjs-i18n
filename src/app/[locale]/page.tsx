import { getTranslations } from "@/i18n";

interface PageProps {
  params: { locale: string };
}

const Page = async ({ params: { locale } }: PageProps) => {
  const t = await getTranslations({ locale });

  // You can also provide a namespace to the getTranslations config
  // like so: getTranslations({ locale, namespace: "Index" })
  // And then use t("title")
  return <div>{t("Index.title")}</div>;
};

export default Page;
