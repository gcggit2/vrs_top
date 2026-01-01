import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '株式会社ココナラさま（東証グロース上場）｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。株式会社ココナラさま（東証グロース上場）の課題解決プロセスと成果をご紹介します。',
};

export default function CoconalaProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-brand-red text-white border-brand-red mb-6">AI×マーケ</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              株式会社ココナラさま（東証グロース上場）
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <Image 
                    src="/projects/coconala/coconala.png" 
                    alt="株式会社ココナラさま" 
                    width={600}
                    height={400}
                    className="w-full h-auto"
                />
            </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-brand-red block"></span>
              クライアント概要
            </h2>
            <div className="leading-loose text-gray-700">
              <p className="mb-12">
                東証グロース上場のココナラさまは､スキルマーケットプレイス事業・エージェント事業・SaaS事業などを展開されています｡
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-brand-red block"></span>
                URL
              </h2>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://coconala.co.jp/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-red hover:underline font-medium text-lg"
                >
                  https://coconala.co.jp/
                </a>
                <a 
                  href="https://coconala.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-red hover:underline font-medium text-lg"
                >
                  https://coconala.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Details */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-brand-red block"></span>
              支援内容
            </h2>
            
            <div className="space-y-8 leading-loose text-gray-700">
              <p>
                株式会社ココナラ様（<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">社長室</span>・<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">AI関連部門</span>）に対して、アドバイザリー・壁打ち支援およびプロンプト制作を支援しています。
              </p>
              <p>
                生成AI・AI人材に関する事業において、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">市場感・現場感を踏まえた壁打ちや、サービス改善における伸びしろの知見共有、信頼できるAI人材のご紹介など</span>をサポート。
              </p>
              <p>
                プロンプト制作においては、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">企画書作成・マニュアル作成といった汎用プロンプトから、メルマガ作成・SEO記事作成・台本作成などマーケティングの専門知見が必要なプロンプトまで、多数制作</span>させていただいております。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-brand-red block"></span>
              参考スクリーンショット
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div key={num} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image 
                    src={`/projects/coconala/coconala${num}.png`}
                    alt={`支援実績イメージ ${num}`}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

