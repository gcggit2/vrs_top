import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '株式会社aini-kuさま｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。株式会社aini-kuさまの課題解決プロセスと成果をご紹介します。',
};

export default function AiniKuProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-brand-red text-white border-brand-red mb-6">AI×マーケ</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              株式会社aini-kuさま
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <Image 
                    src="/projects/aini-ku/aini-ku.png" 
                    alt="株式会社aini-kuさま" 
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
              <p className="mb-6">
                株式会社aini-kuさまは岐阜県・岐阜市を拠点に、分析力を強みとしたマーケティングによる企業支援事業、観光事業を行う企業です｡
              </p>
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-900">URL :</span>
                <a 
                  href="https://aini-ku.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-red hover:underline font-medium"
                >
                  https://aini-ku.com
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
                マーケティング支援をおこなう株式会社aini-kuさまに対して､AIマーケ研修を実施しました｡
              </p>
              <p>
                研修では､<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">AIの基礎的なリテラシー</span>から､<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">実践的なプロンプトテクニック</span>をまず網羅｡
              </p>
              <p>
                AI×マーケティングの面では､<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">3C分析における「市場調査」「見込客のお悩み調査」「直接競合・間接競合の洗い出し・分析」「自社調査」</span>を生成AIを活用して一気通貫で行う手法を取り扱い｡
              </p>
              <p>
                さらに､既存のランディングページ（LP）を読み込ませることで､”売れるLP制作ノウハウ”に基づいて､<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">LP改善箇所を特定・具体的な改善案を半自動で生成</span>する手法も扱いました｡
              </p>
              
              <div className="my-8 leading-relaxed">
                「<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">戦略を考えることに､より時間を使えるようになりました</span>｡AIに任せられるところはAIに任せて効率化しつつ､人が担うべき部分には､今まで以上にしっかり時間を使って成果を高めていきたいです」
                というお声をいただいています｡
              </div>
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
              {[1, 2, 3].map((num) => (
                <div key={num} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image 
                    src={`/projects/aini-ku/aini-ku${num}.png`}
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

