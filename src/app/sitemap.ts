import type { MetadataRoute } from "next";

const base =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://coach.thecommercialathlete.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["", "/how-it-works", "/pricing", "/about", "/faq", "/contact"];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.7
  }));
}
