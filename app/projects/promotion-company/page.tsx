import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'プロモーション代行会社｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。プロモーション代行会社の課題解決プロセスと成果をご紹介します。',
};

export default function PromotionCompanyProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-brand-red text-white border-brand-red mb-6">AI×マーケ</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              プロモーション代行会社
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/promotion-company/promotion-company.jpeg" 
                    alt="プロモーション代行会社" 
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
                特定の商品・サービスに関するプロモーション一式を代行する会社です｡
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
                プロモーション代行会社に対して､AIマーケ研修を実施しました｡
              </p>
              <p>
                研修では､AIの基礎的なリテラシーから､実践的なプロンプトテクニックをまず網羅｡
              </p>
              <p>
                AI×マーケティングの面では､<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">施策のアイデア出し・Web広告配信結果の分析と改善施策出し・LP改善・メルマガ執筆・SEO記事作成など､プロモーション業務全般のAI活用方法</span>を扱いました｡さらに､安価かつ効率的な会員サイト構築・社内メンバー間で獲得した知見・ノウハウをAIで効率的に共有し合う仕組みづくりなども支援しております｡
              </p>
              <p>
                結果として､<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">これまでは全て手動でやっていた業務の多くをAIで半自動化でき､クオリティを維持したまま大幅な時短を実現</span>しました｡
              </p>
              
              <div className="my-8 leading-relaxed">
                「<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">人員を増やさずとも､これまでより多くのプロモーションを同時に手掛けられるようになった</span>」
                と高い評価をいただいています｡
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery - 省略 */}

      <Footer />
    </main>
  );
}

