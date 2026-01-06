import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google';
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://general-cg.com'), // 本番ドメイン
  title: "ジェネラルコンサルティンググループ株式会社",
  description: "価値ある商品・サービスを広め、「幸せ」が循環する社会を創る。ジェネラルコンサルティンググループ株式会社は、コストダウン・売上UPの両面から、貴社の利益を増やします。",
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <GoogleTagManager gtmId="GTM-PX9WTDV" />
      <body
        className={`${notoSansJP.variable} antialiased font-sans text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
