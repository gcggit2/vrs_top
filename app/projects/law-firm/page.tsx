import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '弁護士法人（法律事務所）さま｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。弁護士法人（法律事務所）さまの課題解決プロセスと成果をご紹介します。',
};

export default function LawFirmProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-amber-600 text-white border-amber-600 mb-6">マーケティング</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              弁護士法人（法律事務所）さま
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/law-firm/lawyer.jpg" 
                    alt="弁護士法人（法律事務所）さま" 
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
                企業側ではなく､個人側に寄り添う弁護士法人（法律事務所）です｡
                <br /><br />
                労働問題､男女問題､交通事故などさまざまな分野で､個人をサポートしています｡
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
                弁護士法人の創業段階から､マーケティング部門を全て巻き取り､実質的なマーケティング幹部として伴走するというコンサルティング支援を行いました｡
              </p>
              
              <div className="my-8 text-lg leading-relaxed">
                <span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">
                  結果、創業から2年で年商3.9億円に至りました｡
                </span>
              </div>

              <p>
                まず着手したのは、参入する法律領域における<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">徹底的な3C分析</span>です。市場調査・競合調査・自社調査を丁寧に実施し、勝ち筋を見極めました。この分析結果をもとに、主な集客施策として「リスティング広告」と「SEOメディア（コンテンツマーケティング）」の2つに注力することを決定。見込客からの問い合わせを獲得するためのLP（ランディングページ）も作り込みました。
              </p>
              <p>
                リスティング広告は、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">月額予算30万円ほどの小規模からスタート</span>。費用対効果を注視しながら、広告運用の改善・LP改善、そして現場の弁護士・事務員との連携を丁寧に重ねることで、最終的には費用対効果の目標値をクリアしながら<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">月額予算1,000万円超の規模まで拡大</span>し､安定運用することに成功しました。
              </p>
              <p>
                これを実現した<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">最大の秘訣</span>は､単なる「問い合わせの獲得数・獲得単価」よりも「弁護士面談の獲得数・面談獲得単価」「受任の獲得数・受任単価」を重視して､そこにフォーカスした広告運用・現場と連携したPDCA推進にあります｡
              </p>
              <p>
                並行して、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">SEOメディア</span>のディレクションも担当。戦略策定からキーワード選定、ライターの採用・面接・ノウハウレクチャー・記事添削まで、すべての業務を主導しました。徐々にメディアが育ち、月間100万PVほどに成長。運営コストを考慮すると、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">驚異的な顧客獲得コストでの集客を実現</span>できました。
              </p>
              <p>
                これらの過程では、Webマーケティング施策による問い合わせ獲得から、弁護士による面談を経ての受任まで、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">一気通貫で各指標をモニタリングする仕組み</span>も構築。途中、何度も費用対効果が悪化する局面がありましたが、すぐに分析・PDCA推進できる体制が整っていたため、その都度適切な対策を実行できました｡
              </p>
              <p>
                さらに、1つ目の法律領域での事業が軌道に乗ったことを受け、他の法律領域のリサーチ・参入も丁寧に推進。最終的には<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">5つの分野に参入し、そのうち3分野で黒字集客</span>できる体制を築くことに成功しました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery - 省略 (画像がないため) */}

      <Footer />
    </main>
  );
}

