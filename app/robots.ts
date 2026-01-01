import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://general-cg.com'; // 本番ドメイン

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/law', '/privacy', '/company-profile'], // noindexページはクロールも抑制（任意）
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

