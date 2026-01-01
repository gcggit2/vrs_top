import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'カプセルホテル運営企業｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。カプセルホテル運営企業の課題解決プロセスと成果をご紹介します。',
};

export default function CapsuleHotelProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-amber-600 text-white border-amber-600 mb-6">マーケティング</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              カプセルホテル運営企業
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/capsule-hotel/capsule-hotel.png" 
                    alt="カプセルホテル運営企業" 
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
                カプセルホテルを運営する会社です｡
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
                カプセルホテルのリスティング広告運用をコンサルティング支援しました｡
              </p>
              <p>
                <span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">広告代理店に委託されていましたが、社内のご担当者様がWeb広告の専門知識をお持ちでなかったため、「月次報告を聞くだけ」という状態</span>が続いていました。広告運用自体に大きな不満があるわけではないものの、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">本当に効果的な運用ができているのか判断できず、もどかしさを感じておられました</span>。
              </p>
              <p>
                そこで、まずは当社が代理店との商談に数回同席させていただき、現状の広告運用を詳しく分析しました。その結果、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">費用対効果の低いキーワードへの出稿や、コンバージョンにつながりにくい地域・閲覧端末への配信など、広告費の無駄打ちが一部あることが判明</span>しました。
              </p>
              <p>
                この分析結果をもとに、代理店と協議しながら運用方針を見直し。費用対効果の悪いキーワード、配信地域、閲覧端末、曜日、時間帯などを一つひとつ検証し、毎回の商談でPDCAを丁寧に回す運用スタイルへと転換。これにより、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">広告費を効率的に使いながら集客UPを実現</span>できました。
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Card 1 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">広告運用体制</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善前</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        報告を聞くだけ<br/>効果不明瞭
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
                        無駄を排除しPDCAを回す運用へ
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">担当者のスキル</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善前</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        専門知識がなく<br/>判断できない
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
                        代理店と対等に議論・判断可能に
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                さらに、ご担当者様とのお打ち合わせでは､広告運用の考え方や判断基準を丁寧に共有。データの見方や改善ポイントの見極め方などをお伝えすることで、マーケティング担当としてのスキルアップにも貢献しました。最終的には、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">ご担当者様が代理店と直接対等に話し合い、適切な判断ができる状態にまで成長</span>されました｡
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

