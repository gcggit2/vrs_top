import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '株式会社Blue Skyさま｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。株式会社Blue Skyさまの課題解決プロセスと成果をご紹介します。',
};

 BlueSkyProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-brand-red text-white border-brand-red mb-6">AI×マーケ</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              株式会社Blue Skyさま
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/blue-sky/blue-sky.png" 
                    alt="株式会社Blue Skyさま" 
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
                株式会社Blue Skyさまは､ブランド輸入雑貨の日本正規代理店です｡
                <br /><br />
                イタリア（ミラノ）発祥､犬用の高級ハーネスなどを輸入販売されています｡
              </p>
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-900">URL :</span>
                <a 
                  href="https://bluesky-import.co.jp/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-red hover:underline font-medium"
                >
                  https://bluesky-import.co.jp/
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
                株式会社Blue Sky様の集客数UPを目的に「AIマーケ顧問」として、AI活用・集客数UPを支援しています｡
              </p>
              
              <div className="my-8 text-lg leading-relaxed">
                <span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">
                  初回のお打ち合わせで､リスティング広告において費用対効果が見込めない配信が大きな出血ポイントになっていることが判明。すぐに配信設定を見直し、広告費のムダ打ちを毎月30〜40万円削減できる計算となりました。
                </span>
              </div>

              <p>
                さらに、Web広告やWebサイトといった”部分”だけでなく、認知から商品購入・リピートに至る過程まで”一気通貫”で分析を実施。これにより、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">ボトルネックとなっている箇所や伸びしろの大きいポイントを特定し、改善の優先順位を明確化</span>できました。現在は､優先度の高い改善施策の順次実行を伴走サポートしています｡
              </p>
              <p>
                また､AI活用に関しても､日々の業務で発生するご質問・相談に気軽に対応しております。
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
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img 
                    src={`/projects/blue-sky/blue-sky${num}.png`}
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

