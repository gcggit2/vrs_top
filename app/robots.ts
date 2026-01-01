import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://general-consulting.co.jp'; // 仮のドメイン。本番環境に合わせて変更してください。

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/law', '/privacy', '/company-profile'], // noindexページはクロールも抑制（任意）
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

