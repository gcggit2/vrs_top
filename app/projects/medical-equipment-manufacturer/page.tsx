import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: '医療機器メーカー｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。医療機器メーカーの課題解決プロセスと成果をご紹介します。',
};

export default function MedicalEquipmentManufacturerProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-brand-red text-white border-brand-red mb-6">AI×マーケ</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              医療機器メーカー
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/medical-equipment-manufacturer/medical-equipment-manufacturer.jpg" 
                    alt="医療機器メーカー" 
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
                医療機器を提供するメーカー企業です｡
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
                医療機器メーカーのマーケティング部門・デジタル部門に対し、業務効率化を目的としたAI研修を実施いたしました。
              </p>
              <p>
                研修では、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">プレゼン資料や会議資料の自動生成、録音データからの議事録作成、さらにメルマガの企画立案から本文作成、配信データ分析による改善提案</span>まで、実務に即したAI活用法を取り扱い｡
              </p>
              <p>
                その結果、パワポ資料・議事録作成の作業時間を大幅に短縮し、メルマガ作成時間も約30％削減を実現しています｡
              </p>

              {/* Achievement Cards */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">パワポ資料・議事録作成</h3>
                  <div className="flex items-center justify-center gap-4 text-gray-600">
                    <div className="text-center">
                      <span className="block text-sm mb-1 text-gray-500">導入前</span>
                      <span className="text-md font-bold">手動作成</span>
                    </div>
                    <div className="pb-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <span className="block text-sm mb-1 text-brand-red font-bold">導入後</span>
                      <span className="text-xl font-black text-brand-red">大幅短縮</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">メルマガ作成時間</h3>
                  <div className="flex items-center justify-center gap-4 text-gray-600">
                    <div className="text-center">
                      <span className="block text-sm mb-1 text-gray-500">導入前</span>
                      <span className="text-md font-bold">通常所要時間</span>
                    </div>
                    <div className="pb-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <span className="block text-sm mb-1 text-brand-red font-bold">導入後</span>
                      <span className="text-xl font-black text-brand-red">約30％削減</span>
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

