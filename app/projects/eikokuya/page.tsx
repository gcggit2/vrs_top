import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '英國屋（銀座英國屋）さま｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。英國屋（銀座英國屋）さまの課題解決プロセスと成果をご紹介します。',
};

export default function EikokuyaProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-brand-red text-white border-brand-red mb-6">AI×マーケ</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              英國屋（銀座英國屋）さま
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <Image 
                    src="/projects/eikokuya/eikoya.png" 
                    alt="英國屋（銀座英國屋）さま" 
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
                創業85年､フルオーダースーツブランド「銀座英國屋」を手掛ける株式会社英國屋さまは､フルオーダースーツの製造販売を行う会社です｡
                <br /><br />
                1940年に銀座で創業｡東京・大阪に店舗を展開しており､政財界のリーダーたちにも愛用されています｡
              </p>
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-900">URL :</span>
                <a 
                  href="https://eikokuya.co.jp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-red hover:underline font-medium"
                >
                  https://eikokuya.co.jp
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
                創業約85年、フルオーダースーツ製造販売で長年の信頼を築いてこられた銀座英國屋（株式会社英國屋）さまに対して､AIマーケ研修を実施しました｡
              </p>
              <p>
                研修では､AIの基礎的なリテラシーから､実践的なプロンプトテクニックをまず網羅｡
              </p>
              <p>
                AI×マーケティングの面では､SEOメディア運営における「記事構成」「本文執筆」「タイトル・meta description作成」「内部リンクの最適化」「画像の代替テキスト生成」「WordPress入稿」を半自動化する手法を取り扱い｡
              </p>
              <p>
                他にも「3C分析（市場調査・競合調査・自社調査）」「販売LPの改善」「採用LPの改善」など､マーケティングにAIを活用して利益UPに繋げる手法を､ヒアリング結果を踏まえて多数取り扱いました｡
              </p>
              
              <div className="my-8 text-lg leading-relaxed">
                <span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">
                  いずれもAI学習データ（ナレッジ）として､独自のマーケティングノウハウを駆使しているため､単なるプロンプトの工夫では実現できない品質のアウトプットを実現しています｡
                </span>
              </div>

              <p>
                また､英國屋の小林 英毅 社長は､新聞連載・取材にも日頃から対応されています｡新聞連載・取材対応に関しても､AI活用による変化を実感いただいております｡
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">新聞連載1,300文字の執筆</h3>
                  <div className="flex items-end justify-center gap-4 text-gray-600">
                    <div className="text-center">
                        <span className="block text-sm mb-1">想定</span>
                        <span className="text-xl font-bold">2時間</span>
                    </div>
                    <div className="pb-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <span className="block text-sm mb-1 text-brand-red font-bold">完了</span>
                        <span className="text-3xl font-black text-brand-red">30分</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">取材の事前質問に対する調査＆記述</h3>
                  <div className="flex items-end justify-center gap-4 text-gray-600">
                    <div className="text-center">
                        <span className="block text-sm mb-1">想定</span>
                        <span className="text-xl font-bold">3時間</span>
                    </div>
                    <div className="pb-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <span className="block text-sm mb-1 text-brand-red font-bold">完了</span>
                        <span className="text-3xl font-black text-brand-red">30分</span>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                AIマーケ研修に高い評価をいただき､研修後も引き続き「AIマーケ顧問」として伴走支援してまいります｡
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-brand-red block"></span>
              参考スクリーンショット
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image 
                    src={`/projects/eikokuya/eikokuya${num}.png`}
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
