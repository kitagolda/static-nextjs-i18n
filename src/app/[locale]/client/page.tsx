"use client";

import { useTranslations } from "next-intl";

const ClientPage = () => {
  const t = useTranslations("ClientPage");
  return <div>{t("title")}</div>;
};

export default ClientPage;
