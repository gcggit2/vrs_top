import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: '給与前払いサービス｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。給与前払いサービスの課題解決プロセスと成果をご紹介します。',
};

 AdvanceSalaryProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-amber-600 text-white border-amber-600 mb-6">マーケティング</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              給与前払いサービス
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/advance-salary/advance-salary.jpg" 
                    alt="給与前払いサービス" 
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
                給与前払いサービスをはじめ､福利厚生に関するさまざまなサービスを運営する企業です｡
                <br />
                企業の福利厚生としてサービスを導入いただき､社員が給与前払いを活用するという仕組みです｡
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
                給与前払いサービスを提供する企業様の更なる成長を見据えたマーケティング体制構築のため、集客施策全般のコンサルティング支援を行いました。
              </p>
              <p>
                同社は営業力を武器に成長を遂げてこられましたが、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">経営層・スタッフともにマーケティングに精通した人材がおらず、今後のスケールを実現するためにはマーケティング施策の強化が不可欠な状況</span>でした。
              </p>
              <p>
                そこで当社では、まず現状把握のため丁寧なヒアリングと分析を実施。認知から契約に至るカスタマージャーニーの各接点を詳細に調査したところ、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">「Webサイトの導線設計」「サービス登録フローの使いやすさ」「リスティング広告の配信」「オフライン施策との連携」など、優先度が高いにもかかわらず手を付けられていない改善ポイントが膨大に見つかりました</span>。これらの施策に優先順位を付け、手軽に着手でき即効性が高く、かつ売上インパクトの大きい施策から順次実行。
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Card 1 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">マーケティング体制</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善前</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        担当者不在・施策未着手<br/>機会損失が膨大
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
                        優先順位をつけ順次実行<br/>プロジェクトマネージャー業務代行で推進
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">事業ゴール</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">改善前</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        売却を目指す段階
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
                        M&A（会社売却）成功
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                マーケティング担当者が不在で人手が不足していたため、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">当社にて「リスティング広告運用の代行」「Webサイトリニューアル」「広告用LP制作」なども幅広く巻き取りました</span>。
              </p>
              <p>
                さらに、各施策に最適な専門会社の紹介・選定も行うなど、プロジェクトマネージャー業務ごと代行させていただきました。
              </p>
              <p>
                営業部門の尽力とマーケティング施策による相乗効果もあり、給与前払いサービスを利用する企業側・スタッフ側双方の集客向上に大きく貢献することができました。当社は契約期間満了に伴い支援を終了いたしましたが、その数ヶ月後、同社は<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">目的としていたM&A（会社売却）に成功</span>されました。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

