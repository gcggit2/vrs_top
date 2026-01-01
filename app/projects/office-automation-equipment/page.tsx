import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OA機器販売企業｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。OA機器販売企業の課題解決プロセスと成果をご紹介します。',
};

export default function OfficeAutomationEquipmentProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-[#00509d] text-white border-[#00509d] mb-6">AI</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              OA機器販売企業
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/office-automation-equipment/office-automation-equipment.jpg" 
                    alt="OA機器販売企業" 
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
                OA機器（コピー機など）を販売する企業です｡
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
                OA機器販売企業にて「業務効率化のためのAI活用」をテーマに研修を実施しました。
              </p>
              <p>
                <span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">AIによるマニュアル自動生成、社内質問対応のチャットボット化、社内研修カリキュラム・コンテンツの自動作成など</span>、実務に即したAI活用方法を説明。
              </p>
              <p>
                参加者が自社業務にAIを取り入れることで、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">人が直接顧客と向き合う時間を増やし、長期的な関係構築や業務クオリティの向上</span>につながっています。
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

