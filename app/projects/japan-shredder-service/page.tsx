import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '日本シュレッダーサービスさま｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。日本シュレッダーサービスさまの課題解決プロセスと成果をご紹介します。',
};

 JapanShredderServiceProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-brand-red text-white border-brand-red mb-6">AI×マーケ</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              日本シュレッダーサービスさま
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/japan-shredder-service/japan-shredder-service.png" 
                    alt="日本シュレッダーサービスさま" 
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
                日本シュレッダーサービスさまは､創業90年､機密文書の情報抹消サービスを提供しています｡
                <br /><br />
                機密文書情報抹消の専門サービスとして6,000社以上のお客さまをサポートした実績があります｡
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="font-bold text-gray-900">URL :</span>
                  <a 
                    href="https://www.masshou.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-red hover:underline font-medium"
                  >
                    https://www.masshou.com
                  </a>
                </div>
                <div className="flex items-center gap-4 pl-[calc(3.5rem)]">
                  <a 
                    href="https://kimitsu110.jp" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-red hover:underline font-medium"
                  >
                    https://kimitsu110.jp
                  </a>
                </div>
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
                創業約90年、機密文書の情報抹消サービスで長年の信頼を築いてこられた株式会社日本シュレッダーサービス様に、SEO記事作成を半自動化するAIツール・プロンプトを制作いたしました。
              </p>
              
              <div className="my-8 text-lg leading-relaxed">
                <span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">
                  深く作り込まれたSEO記事を作成する際､通常は1本あたり10〜20時間ほどかかります｡そのため､工数の大きさゆえに記事作成の頻度UP・維持に苦慮される企業は多く､日本シュレッダーサービスさまも同様の課題を抱えてらっしゃいました｡
                </span>
              </div>

              <p>
                そのため今回､記事クオリティを維持あるいは更に高めたうえで､50％以上の時短を見込めるAIツール・プロンプトを制作｡具体的には､日本シュレッダーサービスさまのSEO記事制作フローに即した形で「<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">1. SEO記事の構成を半自動で作り込み</span>」「<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">2. SEO記事の構成に基づいて､SEO最適化された記事本文を半自動で執筆</span>」という2種類のAIツール・プロンプトを制作いたしました｡
              </p>
              <p>
                「弊社のSEOメディア運営・記事作成フローに最適化したプロンプトを作成いただき、心より感謝いたします。考えずに進められるステップが多いので、とても助かります」というお声をいただいております｡
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
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img 
                    src={`/projects/japan-shredder-service/japan-shredder-service${num}.png`}
                    alt={`支援実績イメージ ${num}`}
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

