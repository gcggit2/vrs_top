import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '大喜建設（AD HOUSE）さま｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。大喜建設（AD HOUSE）さまの課題解決プロセスと成果をご紹介します。',
};

export default function AdHouseProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-brand-red text-white border-brand-red mb-6">AI×マーケ</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              大喜建設（AD HOUSE）さま
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <Image 
                    src="/projects/ad-house/ad-house.png" 
                    alt="大喜建設（AD HOUSE）さま" 
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
                株式会社 大喜建設さま（兵庫県たつの市）は､こだわりの詰まった一棟しかない丸ごとオートクチュールの家「AD HOUSE」を手掛けています｡
                <br /><br />
                創業から約50年｡自由な表現と緻密なデザインで､住み継がれる家、施主様だけのオリジナルな家を設計・施工されています｡
              </p>
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-900">URL :</span>
                <a 
                  href="https://ad-house.co.jp/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-red hover:underline font-medium"
                >
                  https://ad-house.co.jp/
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
                株式会社 大喜建設さま（兵庫県たつの市）は､こだわりの詰まった一棟しかない丸ごとオートクチュールの家「AD HOUSE」を手掛けています｡
              </p>
              <p>
                現地での対面研修ということで､兵庫県たつの市まで伺って､AIマーケ研修を実施しました｡
              </p>
              <p>
                研修では､生成AIの基礎知識から､Gemini・NotebookLMの機能・使い方までを実演して解説｡
              </p>
              <p>
                マーケティング・集客面では､「AD HOUSE」の魅力を発信する業務を､AIを活用して効果的に行なう方法を取り扱いました｡
              </p>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <ul className="space-y-3">
                    {[
                        'Instagram・Facebookの投稿⽂作成',
                        'メルマガ作成',
                        'ブログ記事・コラム記事作成',
                        'お知らせ文章の作成',
                        '簡易的なWebページ制作',
                        'AD HOUSEの魅力を動画化して､来店者にPRする方法'
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-brand-red mt-1.5 text-xs">●</span>
                            <span className="font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
              </div>

              <p>
                建設会社の発信では､住宅・施工のお写真をもとに､いかに魅力を伝えるかがポイントです｡そこで本研修では、
              </p>
              
              <div className="my-4 text-lg leading-relaxed">
                <span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">
                  写真データをAIが的確に読み取り、施主様・大喜建設様のこだわりポイントを自然な文章でアウトプットする「写真データ×AI活用」という手法に特に工夫を凝らしました。
                </span>
              </div>
              
              <p>
                これにより、美しい施工写真が持つストーリーや技術的なこだわりを、より多くの方に分かりやすく届けられる仕組みを構築できます｡
              </p>

              <p>
                研修後も引き続き､「AD HOUSE」の効果的な魅力発信を伴走サポートしてまいります｡
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
                  <Image 
                    src={`/projects/ad-house/ad-house${num}.png`}
                    alt={`支援実績イメージ ${num}`}
                    width={800}
                    height={600}
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

