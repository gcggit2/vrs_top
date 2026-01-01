import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'ビジネスマン向け講座（AIパート講師担当）｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。ビジネスマン向け講座（AIパート講師担当）の課題解決プロセスと成果をご紹介します。',
};

export default function BusinessWorkshopProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-[#00509d] text-white border-[#00509d] mb-6">AI</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              ビジネスマン向け講座（AIパート講師担当）
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/business-workshop/business-workshop.jpg" 
                    alt="ビジネスマン向け講座" 
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
                出世・キャリアップ・起業・副業などを目指すビジネスマン向けの講座を運営している会社です｡
                <br /><br />
                2025年､マインド面・ビジネススキル面に加えて「AIスキル」も講座内容に加わりました｡
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
                大手メルマガスタンド「まぐまぐ」にて大賞を約10年連続受賞した人気メルマガ発行者と、そのビジネスパートナーが主催するビジネス講座にて、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">AI講座パートの講師</span>を担当しております｡
              </p>
              <p>
                受講者は中小企業から上場企業に在籍されているビジネスマンが中心で、「会社の実務・出世・キャリアアップに活用できる超実践的なAI活用法」「個人で起業・副業する際に有効なAI活用法」という2点にフォーカスした内容を提供しています。
              </p>
              
              <div className="my-8 text-lg leading-relaxed">
                <span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">
                  本講義の最大の特徴は、単なる「AI最新情報」や「AI活用方法」の紹介にとどまらず、「ビジネスマンの出世・キャリアアップ・起業副業に本当に役立つAI活用法」という、地に足がついた実務的なAIスキルに特化している点です。
                </span>
              </div>

              <p>
                現在、巷にはYouTubeやさまざまなコミュニティでAI情報が溢れていますが、実際には実務レベルでは使えない「新機能」が大々的に紹介されたり、趣味半分のAI活用テクニックが有料講座やコミュニティでも扱われたりと、ビジネス実務で活用できる情報を収集する際のノイズが非常に大きいという構造的な問題があります。
              </p>
              <p>
                こうした状況を踏まえ、AI講義では「実務で本当に役立つ」ことだけに焦点を絞り、ビジネスマンの皆様が翌日からすぐに仕事で使えるAI活用スキルを、具体的な事例やデモンストレーションを交えながらお伝えしています。
              </p>

              {/* Comparison Cards */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Card 1 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">情報の選定基準</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Generally */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">一般的な傾向</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        新機能紹介や趣味レベルのテクニックなど、<span className="font-bold">ノイズが多い</span>
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

                    {/* Our Course */}
                    <div className="bg-red-50 rounded-lg p-4 border border-red-100 relative">
                      <span className="absolute top-0 left-0 bg-brand-red text-white text-[10px] px-2 py-0.5 rounded-br-lg font-bold">本講座</span>
                      <div className="mt-2 text-gray-900 font-bold text-sm">
                        「実務で本当に役立つ」ことに特化し、翌日から使えるスキルを厳選
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center">カリキュラムの鮮度</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {/* Generally */}
                    <div className="bg-gray-50 rounded-lg p-4 relative">
                      <span className="absolute top-0 left-0 bg-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-br-lg font-bold">一般的な傾向</span>
                      <div className="mt-2 text-gray-600 text-sm">
                        固定されたカリキュラム<br/>（情報が古くなりやすい）
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

                    {/* Our Course */}
                    <div className="bg-red-50 rounded-lg p-4 border border-red-100 relative">
                      <span className="absolute top-0 left-0 bg-brand-red text-white text-[10px] px-2 py-0.5 rounded-br-lg font-bold">本講座</span>
                      <div className="mt-2 text-gray-900 font-bold text-sm">
                        開催直前に最新情報を確認・反映し、受講生の要望に合わせてカスタマイズ
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                また、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">全5ヶ月にわたる講座ですが、AIの進化が非常に早いため、予定していた講座内容が古くなることもあります。そのため、大まかな講座ロードマップはありつつも、リアルタイムの講座開催前に、講師が毎回最新のAIアウトプット・動作を確認し、最新の内容をシェア</span>しています。
              </p>
              <p>
                さらには、アンケートや懇親会でいただいた声をもとに、次回の講座内容も臨機応変にカスタマイズするなど、<span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">リアル講義・実務特化ならではの価値</span>を提供することを心がけています。
              </p>
              <p>
                AIを実務活用して大幅な時短・仕事のクオリティUPに繋げる手法を習得していただき、受講者の出世・キャリアアップ・起業副業に貢献してまいります。
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
              {[1, 2, 3].map((num) => (
                <div key={num} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img 
                    src={`/projects/business-workshop/business-workshop${num}.png`}
                    alt={`支援実績イメージ ${num}`}
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

