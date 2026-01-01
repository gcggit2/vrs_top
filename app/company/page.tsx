import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '会社概要｜ジェネラルコンサルティンググループ株式会社',
  description: 'ジェネラルコンサルティンググループ株式会社の会社概要ページです。マーケティングとAIの知見を融合し、企業の成長を包括的に支援します。',
};

export default function Company() {
  const strengths = [
    {
      number: '01',
      title: 'マーケティング・AIの知見',
      titleMobile: (
        <>
          マーケティング・<br className="md:hidden"/>AIの知見
        </>
      ),
      description: 'マーケティング領域では、経営層・コンサルタント両方の立場で、新規事業立ち上げ・既存事業の売上改善に多数かかわってきました。',
      extra: 'AI領域でも、単なる「最新のAI活用法」ではなく「実務の成果に直結するAIスキル」を扱っています。',
      conclusion: 'そのため、単なる「マーケティング代理店」「AI研修会社」とは、内容の質と深さが全く異なります。',
      achievements: [
        'マーケティング担当幹部として法律事務所を創業。年商3.9億円に',
        '東証プライム上場企業の社長室にて、全社Web広告戦略の統括をコンサル支援',
        'ココナラ（東証グロース上場）ほか、複数社のAI活用を支援',
        '約400名の経営者が在籍する「新経営戦略塾」にてAI講師を担当'
      ],
      extraAchievements: [],
      image: '/company/company1.jpeg'
    },
    {
      number: '02',
      title: '理論と実践知の融合',
      description: '当社では､本質的なコンサルティングには実践経験が不可欠と考えます。\n\nビジネス課題を解決するためには､実践を伴わない理論（机上の空論）ベースの課題解決ではなく、「理論」と「実践から得た知見」を融合して取り組むことが必要です｡',
      extra: '当社では､自社運営の各事業に加え､関連会社での実店舗ビジネス､オンライン講座､無形商品の販売など､さまざまな実践知を得られる仕組みを有しています｡',
      image: '/company/company2.jpeg'
    },
    {
      number: '03',
      title: 'プロフェッショナルとの協業',
      titleEn: 'Professional Collaboration',
      description: 'あえて正社員を雇用せず、各施策のプロフェッショナルと共に実務を遂行します。優秀な人材ほど独立志向が強いこの業界では、質の高い依頼先を見つけるのが困難です｡',
      details: '当社は、厳選した外部プロフェッショナルとの協業体制により、この課題を解決しています。これによりお客様は､信頼できる窓口を通じて、最適なプロフェッショナルに仕事を任せられます｡',
      conclusion: 'パートナーの案件獲得と当社の専門性確保を両立し、三方良しの構造を実現しています。',
      image: '/company/company3.jpeg'
    }
  ];

  const values = [
    '自らが心にゆとりを持ち、最善の判断と行動を心がける',
    '関わる全ての人の”幸せ”を最優先に考え行動する',
    '短期視点と中長期視点を併せ持つ',
    '理論と実践の融合による、本質的な知見を大切にする',
    '不変の価値を見極め、最新の技術で時代に適応する'
  ];

  const companyInfo = [
    { label: '社名', value: 'ジェネラルコンサルティンググループ株式会社' },
    { label: '代表者名', value: '代表取締役　槙 優真' },
    { 
      label: '本社所在地', 
      value: (
        <>
          〒221-0056<br />
          神奈川県横浜市神奈川区金港町7-3<br />
          金港ビル7階
        </>
      ) 
    },
    { label: '設立年月日', value: '2017年2月7日' },
    { label: '連絡先', value: 'MAIL : info@general-cg.com' },
    { label: 'URL', value: <a href="https://general-cg.com/" className="text-brand-red hover:underline">https://general-cg.com/</a> },
    { 
      label: '事業内容', 
      value: (
        <ul className="list-disc list-inside">
          <li>マーケティングコンサル事業</li>
          <li>AIコンサル事業</li>
        </ul>
      ) 
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      <h1 className="sr-only">会社紹介</h1>

      {/* Strength Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <span className="text-brand-red font-bold tracking-widest block mb-3 text-sm">OUR FEATURES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">当社の特徴</h2>
          </div>

          <div className="space-y-32">
            {strengths.map((s, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-start gap-12 md:gap-20`}>
                <div className="md:w-1/2">
                  <div className="flex items-baseline gap-4 mb-8 border-b border-gray-100 pb-6">
                    <span className="text-6xl font-black text-gray-100 leading-none">{s.number}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {(s as any).titleMobile ? (s as any).titleMobile : s.title}
                    </h3>
                  </div>
                  <div className="text-gray-600 leading-loose space-y-6">
                    <div className="font-medium text-lg text-gray-800 whitespace-pre-wrap">{s.description}</div>
                    
                    {(s as any).extra && <div className="font-medium text-lg text-gray-800 whitespace-pre-wrap">{(s as any).extra}</div>}
                    
                    {(s as any).details && <div className="font-medium text-lg text-gray-800 whitespace-pre-wrap">{(s as any).details}</div>}
                    

                    {s.conclusion && <p className="font-medium text-lg text-gray-800">{s.conclusion}</p>}
                    
                    {s.achievements && s.achievements.length > 0 && (
                      <ul className="space-y-3 mt-4 bg-gray-50 p-6 rounded-xl">
                        {s.achievements.map((a, ai) => (
                          <li key={ai} className="flex items-start gap-3 text-sm">
                            <span className="text-brand-red mt-1.5 text-xs">●</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="md:w-1/2 sticky top-24">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-brand-red/5 transform translate-x-4 translate-y-4 rounded-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl z-10 aspect-[4/3]">
                      <Image 
                        src={s.image} 
                        alt={s.title} 
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values / Principles Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-24">
            <div className="bg-white p-6 md:p-14 rounded-xl border border-gray-200 flex flex-col justify-center text-center">
              <span className="text-brand-red font-bold tracking-widest mb-6 block opacity-80">MISSION</span>
              <h3 className="text-base md:text-2xl font-bold leading-relaxed md:leading-snug text-gray-900 tracking-tight">
                <span className="inline-block">価値ある商品・サービスを広め、</span>
                <span className="md:hidden block mb-1" />
                <span className="inline-block">「心にゆとりある社会」を創る</span>
              </h3>
            </div>
            <div className="bg-white p-6 md:p-14 rounded-xl border border-gray-200 flex flex-col justify-center text-center">
              <span className="text-brand-red font-bold tracking-widest mb-6 block opacity-80">VISION</span>
              <h3 className="text-base md:text-2xl font-bold leading-relaxed md:leading-snug text-gray-900 tracking-tight">
                <span className="inline-block">マーケティングとAIの力を融合し、</span>
                <span className="md:hidden block mb-1" />
                <span className="inline-block">「成果」と「時間」の両方を生み出す</span>
              </h3>
            </div>
          </div>

          {/* Values */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span className="text-brand-red font-bold tracking-widest block mb-3 text-sm">VALUES</span>
              <h3 className="text-3xl font-bold text-gray-900">行動指針</h3>
            </div>
            <div className="grid gap-4">
              {values.map((v, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-lg border border-gray-200">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 text-brand-red font-bold rounded-full text-lg">
                    {i + 1}
                  </span>
                  <p className="font-bold text-gray-800 text-lg">{v}</p>
                </div>
              ))}
            </div>
          </div>
          
           {/* Principles Snippet */}
            <div className="max-w-4xl mx-auto">
                <div className="p-10 md:p-16 bg-white border border-gray-200 rounded-xl">
                    <div className="text-center mb-10">
                        <span className="text-brand-red font-bold tracking-widest block mb-3 text-sm">PRINCIPLES</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">経営指針</h3>
                    </div>
                    <div>
                        <p className="text-gray-600 leading-loose mb-8">
                            当社は、あらゆる人間活動の究極的な目的は「個人・社会の”幸せ”」の実現にあると考えています。
                        </p>
                        <p className="text-gray-600 leading-loose mb-8">
                            幸せの形は人それぞれですが、その根底には「心のゆとり」が必要不可欠であると考えます。
                        </p>
                        <p className="text-gray-600 leading-loose">
                            AIとマーケティングによる支援も、そのための1つの手段に過ぎません。目の前の課題を解決し、不安を取り除くことで、関わる人々が心穏やかに過ごせる時間を増やす。社会のニーズや環境が変化しても、この本質的な価値を追求し続けます。
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
