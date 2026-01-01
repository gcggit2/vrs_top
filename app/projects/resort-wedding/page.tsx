import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'リゾートウエディング施設｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。リゾートウエディング施設の課題解決プロセスと成果をご紹介します。',
};

 ResortWeddingProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-amber-600 text-white border-amber-600 mb-6">マーケティング</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              リゾートウエディング施設
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/resort-wedding/resort-wedding.png" 
                    alt="リゾートウエディング施設" 
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
                リゾート地にあるウエディング施設です｡
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
                リゾート地のウエディング施設様のリスティング広告運用をコンサルティング支援しました。
              </p>
              <p>
                以前は<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">広告代理店に運用を依頼されていましたが、</span><span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">少額予算だったこともあり、運用のチューニングがほとんど行われず、放置状態</span>。詳しくヒアリングを行ったところ、ウエディングという商材の客単価を考えると、明らかに費用対効果が良好であり、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">大きな機会損失が発生していることが判明</span>しました。
              </p>
              <p>
                そこで、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">目標となる数値を一緒に設計し、広告費を増額することを提案</span>。適切な運用チューニングを実施した結果、大幅な集客向上に貢献できました。
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Card 1 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">広告運用（代理店）</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善前</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        少額予算で放置状態<br/>（機会損失）
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex justify-center relative z-10">
                      <div className="bg-white rounded-full p-1 border border-gray-200 text-brand-red shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* After */}
                    <div className="bg-red-50 rounded-lg p-4 border border-red-100 relative">
                      <span className="absolute top-0 left-0 bg-brand-red text-white text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善後</span>
                      <div className="mt-2 text-gray-900 font-bold text-sm">
                        予算増額・適切チューニングで集客向上
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">顧客層の拡大</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善前</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        地元客がメイン<br/>県外客が少ない
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex justify-center relative z-10">
                      <div className="bg-white rounded-full p-1 border border-gray-200 text-brand-red shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* After */}
                    <div className="bg-red-50 rounded-lg p-4 border border-red-100 relative">
                      <span className="absolute top-0 left-0 bg-brand-red text-white text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善後</span>
                      <div className="mt-2 text-gray-900 font-bold text-sm">
                        専用LP制作で県外客の獲得ルート構築
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                また、これまで地元のお客様の利用がメインで、県外からのお客様が少ないという課題もありました。そのため、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">県外のお客様に向けたランディングページの制作を提案・実施</span>。地元のお客様ほどの費用対効果は出ないものの、結果として<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">県外からのお客様を獲得する新たなルートの構築にも成功</span>しました。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

