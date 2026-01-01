import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { newsData } from './data';

export const metadata: Metadata = {
  title: '活動報告・お知らせ｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの活動報告・お知らせ一覧です。セミナー開催情報、メディア掲載情報、プレスリリースなどを発信しています。',
};

export default function NewsIndex() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />

      {/* Hero Section */}
      <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-brand-red font-bold tracking-wider block mb-2">NEWS</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">活動報告・お知らせ</h1>
        </div>
      </div>

      {/* News List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {newsData.map((item) => (
              <article key={item.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0 group">
                <Link href={`/news/${item.id}`} className="block">
                  <div className="flex items-center gap-3 mb-1">
                    <time className="text-gray-500 font-mono text-sm">{item.date}</time>
                  </div>
                  <h2 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors mb-1">
                    {item.title}
                  </h2>
                  <div className="flex items-center text-brand-red font-bold text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-5px] group-hover:translate-x-0 duration-300">
                    記事を読む &rarr;
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium">
              &larr; トップページへ戻る
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

