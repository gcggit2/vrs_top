import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { ContactProvider } from "@/context/ContactContext";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://versence.jp'), // 本番ドメイン
  title: "ヴェルセンス株式会社",
  description: "物理的・精神的ウェルビーイングを社会に実装することを目指すヴェルセンス株式会社。心身の健康と豊かさを追求し、持続可能な社会の実現に貢献します。",
  alternates: {
    canonical: '/',
  },
  robots: {
    index: false, // サイト全体をnoindexに設定
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} antialiased font-sans text-gray-800`}
      >
        <ContactProvider>
          {children}
        </ContactProvider>
      </body>
    </html>
  );
}
