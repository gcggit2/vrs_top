import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'レジャー施設｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。レジャー施設の課題解決プロセスと成果をご紹介します。',
};

export default function LeisureFacilitiesProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-amber-600 text-white border-amber-600 mb-6">マーケティング</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              レジャー施設
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/leisure-facilities/leisure-facilities.png" 
                    alt="レジャー施設" 
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
                アトラクション、バーベキュー場、キャンプ場などが一体となったレジャー施設です｡
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
                アトラクション、バーベキュー場、キャンプ場などが一体となったレジャー施設様のWeb広告運用をコンサルティング支援しました｡
              </p>
              <p>
                来場数の拡大を目指す中で、これまで広告代理店に全てお任せしていた状態でしたが、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">「クリック率と新規ユーザー数」という指標設定により、実際の来場数や費用対効果への貢献度が見えづらい状況</span>が続いていました。
              </p>
              <p>
                リアル施設への来場というビジネスモデル上、Web広告の効果測定が難しい面があるものの、より納得感のある指標設定が必要だと考え、目標設定・KPI設計の段階から一緒に取り組ませていただきました。具体的には、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">Web広告経由での「クーポンページ到達」を重要指標として設定し、そこから来場率・来場数を推計する仕組みを構築</span>。これにより、費用対効果に連動しやすいWeb広告運用へと転換できました。
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Card 1 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">指標（KPI）</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善前</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        クリック率・新規ユーザー数<br/>（来場が見えない）
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
                        クーポンページ到達を計測し<br/>来場数・対費用効果を可視化
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">発注体制</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善前</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        運用・制作が別々で<br/>連携不足
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
                        1社に統合し連携強化<br/>PDCAサイクルを迅速化
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                また、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">広告運用会社とLP制作会社が別々の体制で連携が取れていなかった点も課題</span>として浮上。施策全体の効果を最大化するため、依頼先を1つの会社に統合しました。
              </p>
              <p>
                さらに、これまで2ヶ月に1回だった広告代理店からの報告会を月1回ペースに変更し、当社も毎回の商談に同席することで、丁寧なPDCAを実現。
              </p>
              <p>
                このような取り組みを通じて、来場数の増加に貢献できました。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

