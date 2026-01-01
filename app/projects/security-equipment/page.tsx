import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'セキュリティ機器販売企業｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。セキュリティ機器販売企業の課題解決プロセスと成果をご紹介します。',
};

export default function SecurityEquipmentProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-[#00509d] text-white border-[#00509d] mb-6">AI</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              セキュリティ機器販売企業
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/security-equipment/security-equipment.png" 
                    alt="セキュリティ機器販売企業" 
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
                セキュリティ機器の販売会社です｡
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
                セキュリティ機器販売企業にて、営業部門・サポート部門を対象としたAI活用研修を実施 しました。
              </p>
              <p>
                営業面では、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">見込客に最適化された提案資料をAIが自動生成する仕組みや、訪問前の企業分析・トークネタ提案、顧客との商談をAIとシミュレーションできる営業ロープレ</span>を取り扱い｡
              </p>
              <p>
                サポート面では、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">顧客からの問い合わせに対する返信文もAIで自動生成</span>する方法も取り扱い｡これにより、営業準備時間の大幅な短縮と提案書クオリティの均一化を推進｡商談成約率の向上とサポート窓口業務の効率化を実現しています。
              </p>

              {/* Achievement Cards */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Card 1 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">営業準備・提案</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善前</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        資料作成・リサーチに時間がかかり、質にばらつき
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
                        AIによる自動生成・ロープレで効率化・質向上
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">顧客サポート</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善前</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        返信文作成に工数がかかる
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
                        AI自動生成で窓口業務を効率化
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

