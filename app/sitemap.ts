import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://versence.jp'; // 本番ドメイン

  // 静的ページ
  const routes = [
    '', // top
    '/company-profile',
    '/law',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes];
}
