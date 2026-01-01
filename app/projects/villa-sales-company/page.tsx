import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: '別荘販売会社｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。別荘販売会社の課題解決プロセスと成果をご紹介します。',
};

export default function VillaSalesCompanyProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-amber-600 text-white border-amber-600 mb-6">マーケティング</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              別荘販売会社
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/villa-sales-company/villa-sales-company.png" 
                    alt="別荘販売会社" 
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
                某別荘エリアにおいて､別荘を販売する会社です｡
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
                別荘販売会社様のリスティング広告運用について、費用対効果を最大化するためのコンサルティング支援しました。
              </p>
              <p>
                当初、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">広告代理店に運用を委託されていましたが、レポート上は良好な数値が報告される一方で、実際の費用対効果については疑問を感じていらっしゃる状態</span>でした。
              </p>
              <p>
                そこで、現状の広告運用を徹底的にヒアリング・分析したところ、大きな課題が浮き彫りになりました。<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">複数種類のコンバージョンが設定されており、それらが全て一括してまとめて報告されていたため、実際の数値よりも成果が良いように見える仕組みになっていた</span>のです。さらに、レポートの粒度が粗く、どの施策が効果的だったのか検証できないため、PDCAサイクルを回すことができない状態にありました。
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Card 1 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">成果指標（KPI）</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善前</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        複数コンバージョンを一括報告<br/>（実態が見えにくい）
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
                        「資料請求数・コスト」にフォーカスし明確化
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">運用体制</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善前</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        レポート粒度が粗く<br/>PDCAが回せない
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
                        定例商談同席で透明性の高い運用へ
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                この課題を解決するため、まず<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">「資料請求数」と「資料請求の獲得コスト」を最重要指標として明確に設定</span>し、これらの改善にフォーカスした広告運用へと抜本的に切り替えました。
              </p>
              <p>
                また、販売される別荘の商品単価に対して広告予算が明らかに不足していたため、広告データを丁寧に分析しながら段階的な予算増額を実施。
              </p>
              <p>
                さらに、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">広告代理店との定例商談に毎回同席し、細かな改善提案や進捗確認を行うことで、透明性の高い運用体制を構築</span>しました。
              </p>
              <p>
                こうした取り組みにより、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">資料請求数の着実な向上を実現し、費用対効果の見える化と確実な集客力の強化</span>に貢献することができました。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

