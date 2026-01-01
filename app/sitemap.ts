import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://general-consulting.co.jp'; // 仮のドメイン

  // 静的ページ
  const routes = [
    '', // top
    '/profile',
    '/consulting',
    '/ai-marke-training',
    '/ai-training',
    '/company',
    '/news',
    '/projects',
    '/reviews/1', // ページネーションの1ページ目
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes];
}

