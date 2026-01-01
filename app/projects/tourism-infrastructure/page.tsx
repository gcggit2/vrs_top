import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '観光インフラ会社（東証プライム上場）｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。観光インフラ会社（東証プライム上場）の課題解決プロセスと成果をご紹介します。',
};

 TourismInfrastructureProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-amber-600 text-white border-amber-600 mb-6">マーケティング</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              観光インフラ会社（東証プライム上場）
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/tourism-infrastructure/tourism-infrastructure.jpg" 
                    alt="観光インフラ会社（東証プライム上場）" 
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
                東証プライム上場の観光インフラ会社です｡
                <br /><br />
                社長直轄のプロジェクトとして1年3ヶ月､社長室メンバーと共同して業務遂行しました｡
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
                東証プライム上場の観光インフラ会社の社長室プロジェクトとして、全社Webマーケティング施策の統括支援を行いました。
              </p>
              <p>
                同社では、各部署にマーケティング担当者が配置されているものの、各事業のマーケティング施策がバラバラに稼働しており、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">広告代理店やWeb制作会社への依頼も部署ごとに異なる状態でした。さらに、部署間での知見共有ができておらず、組織全体としてのマーケティング効率が大きく損なわれていました</span>。こうした課題を解決するため、社長室プロジェクトとして全社のマーケティング施策を一元管理することになりましたが、社長室メンバーに<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">Webマーケティングのプロフェッショナルがいない</span>という状況から、当社にご相談をいただきました。
              </p>
              <p>
                まず、社長室メンバーと共同で全社Webマーケティング施策に関する課題を洗い出し、大きな方向性として「1.各事業を俯瞰しての全体最適化」「2.個別の事業における売上最大化」「3.社内体制の強化」の3点に絞り込みました。
              </p>
              <p>
                当ページでは､「2.個別の事業における売上最大化」のみ掘り下げます｡
              </p>
              <p>
                当時は社内改革として､社長室メンバーが各部署の担当者に代わって10社以上の広告代理店とやり取りし、広告配信に関する商談も行っていましたが、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">Web広告の知見が不足しているため、代理店からの報告を鵜呑みにせざるを得ない状況</span>が続いていました。
              </p>
              <p>
                そこで当社では、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">全代理店との商談に同席</span>し、各事業におけるWeb広告配信の成果検証を徹底的に行いました。その結果、多数の改善ポイントが見つかりました｡
              </p>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <ul className="space-y-3">
                    {[
                        '広告配信の目的と代理店と握っている目標指標のズレ（代理店に有利な目標設定になっている）',
                        '広告配信結果の報告内容が大まかで、詳細な改善施策を検討するには情報が不足している',
                        '費用対効果が見込めない箇所に広告が配信されており、広告費のムダが発生している',
                        '広告代理店とLP制作会社が別々で連携できておらず、LPがボトルネックとなり広告費用対効果を高められない',
                        '広告予算が少ない事業は、広告代理店が運用を放置しがち。費用対効果は良好なので広告費を増額すればさらなる売上・利益UPが見込めるのに機会損失が大きい',
                        'そもそも費用対効果がモニタリングする仕組みが整っていない'
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-brand-red mt-1.5 text-xs">●</span>
                            <span className="font-medium text-sm md:text-base">{item}</span>
                        </li>
                    ))}
                </ul>
              </div>

              <p>
                各事業・各代理店の状況に合わせて、これらのポイントを一つひとつ改善を実施。また、代理店の数が多すぎて収拾がつかない状態だったため、運用テクニック・対応のきめ細やかさ・コミュニケーションの取りやすさなどを総合的に判断し、代理店の数を絞り込み、可能なものは依頼先の代理店・LP制作会社も統合しました。
              </p>
              <p>
                これにより、社長室と各代理店とのコミュニケーションが大幅に効率化され、さらに当社も各代理店からの月次報告の商談に同席して第三者の視点から一緒に改善施策を考え、PDCAを回すことで、各事業の広告費用対効果向上・集客向上に貢献いたしました｡
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

