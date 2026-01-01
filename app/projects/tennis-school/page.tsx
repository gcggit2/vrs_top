import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '都内テニススクールさま｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。都内テニススクールさまの課題解決プロセスと成果をご紹介します。',
};

export default function TennisSchoolProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-brand-red text-white border-brand-red mb-6">AI×マーケ</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              都内テニススクールさま
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <Image 
                    src="/projects/tennis-school/tennis-school.jpeg" 
                    alt="都内テニススクールさま" 
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
                東京23区にある硬式テニススクールです｡
                <br /><br />
                大人へのレッスン提供のほか､キッズ・ジュニア向けレッスンもおこなっています｡
              </p>
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
                都内テニススクール様の集客数UPを目的に「AIマーケ顧問」として､主にマーケティング・集客面を支援しています。
              </p>
              <p>
                フィットネスクラブに併設されたテニススクールでしたが、支援開始時点ではテニススクール専用のWebサイトが存在しませんでした。そこでまず、同一商圏内のテニススクールを丁寧に洗い出し、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">3C分析（市場調査・競合調査・自社調査）</span>を徹底的に実施しました。
              </p>
              <p>
                調査の結果、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">競合テニススクールの多くはWeb集客に十分なリソースを割けていないことが判明。このことから、見込客のニーズを踏まえて適切にコンテンツ設計されたWebサイトを用意するだけで、一定の集客効果が見込めると判断</span>しました。
              </p>
              <p>
                さらに、3C分析の過程で「近隣より金額が安いのに、少人数制なのでたくさんボールを打てる。一般的なスクールよりも､技術指導が手厚い」という大きな強みがあることが明らかになりました。この強みは<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">見込客のニーズとも合致</span>していたため、これらを強く訴求する方向性で施策を展開しました。
              </p>
              <p>
                Webマーケティング施策を大々的に実行していないものの、近隣に複数のテニススクールがある中で、検索順位は順調に向上。<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">「エリア名 + テニススクール」という最重要キーワードにおいて、Google検索2位に安定表示</span>されるに至りました（1位は当エリアの有名スクール）。
              </p>
              <p>
                同一エリア内でテニススクールを検討される方は、ほぼ必ず複数のスクールを比較検討されると考えられます。また、Google1位を狙うための工数・費用を考慮すると、これ以上の順位向上を狙う優先度は高くないと判断しました｡
              </p>
              <p>
                現在はさらなる集客向上のため、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">「Webサイト閲覧から体験レッスン申込率の向上」「体験レッスンから本契約率の向上」「口コミ・紹介による集客の強化」</span>を順次進めており、テニススクール様の持続的な成長をサポートしております。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery - 省略 */}

      <Footer />
    </main>
  );
}

