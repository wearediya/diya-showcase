import type { MetadataRoute } from "next";

import { ROUTES, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.flatMap((path) =>
    (["fr", "en"] as const).map((lang) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: {
          fr: `${SITE_URL}/fr${path}`,
          en: `${SITE_URL}/en${path}`,
        },
      },
    })),
  );
}
