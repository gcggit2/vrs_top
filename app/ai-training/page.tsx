import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI基礎研修｜全職種の生産性UPで人手不足を解決｜ジェネラルコンサルティンググループ',
  description: 'AI基礎研修。全職種の生産性UPで、人手不足も解決。業務を最大85%時短する超実践的カリキュラム。当社代表による2ヶ月伴走支援付き。',
};

export default function AiTrainingPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "AI基礎研修",
                "provider": {
                  "@type": "Organization",
                  "name": "ジェネラルコンサルティンググループ株式会社",
                  "founder": "槙 優真"
                },
                "description": "全職種の生産性UPで、人手不足も解決するAI基礎研修。",
                "offers": {
                  "@type": "Offer",
                  "price": "400000",
                  "priceCurrency": "JPY",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "400000",
                    "priceCurrency": "JPY",
                    "referenceQuantity": {
                      "@type": "QuantitativeValue",
                      "value": "1",
                      "unitCode": "C62" // Person
                    }
                  }
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "ChatGPT以外も扱ってもらえますか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "はい、基本カリキュラムでChatGPT・Gemini・Claudeなどに対応可能です。NotebookLMやGensparkなどの他ツールについても、研修後の伴走サポートなどでレクチャー可能です。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "AIを使いこなすには､プログラミングスキルが必須ですか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "いいえ､不要です｡AIへの指示は全て日本語なので､自分の意図を伝えられる語彙力があれば大丈夫です｡理系スキルがいらないので､文系の人にこそオススメです｡"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "簡単な業務だけでなく「頭を使う業務」もAIで自動化できますか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "できます｡AIの凄いところは､これまで実現できなかった「頭を使う業務」を自動化できる点にあります｡さらに､貴社オリジナルのノウハウ・データをAIに学習させることで､貴社業務に特化したアウトプットも実現できます｡"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "まだ本格的には依頼を検討していないのですが､相談可能ですか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "可能です｡「気軽に相談したい」「壁打ち相手になってほしい」など､ライトな内容でも､お気軽にお問い合わせくださいませ｡"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "単発でのAIレクチャーもお願いできますか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "可能です｡お気軽にご相談ください｡"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "オフライン（対面）での実施も可能ですか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "可能です｡お気軽にご相談ください｡"
                    }
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "TOP",
                    "item": "https://general-consulting.co.jp/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "AI基礎研修",
                    "item": "https://general-consulting.co.jp/ai-training"
                  }
                ]
              }
            ]
          }),
        }}
      />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-32 bg-gray-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 transform origin-top-right z-0 opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
            {/* Text Content */}
            <div className="w-full">
                  <div className="inline-block bg-blue-600/10 text-blue-600 font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-blue-600/20">
                    社員10〜150名、人手不足の企業にオススメ
                  </div>
                  <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.2] tracking-tight">
                    <span className="text-blue-600">AIで“即”利益改善</span>
                  </p>
                  <div className="flex items-center gap-4 mb-8">
                      <div className="h-px bg-gray-300 w-12"></div>
                      <h1 className="text-lg font-bold text-gray-400 tracking-widest">AI基礎研修</h1>
                      <div className="h-px bg-gray-300 w-12"></div>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-800 mb-10 leading-relaxed font-bold border-l-4 border-blue-600 pl-6">
                    全職種の生産性UPで、<br/>人手不足も解決
                  </p>
                  
                  {/* 3つの訴求ポイント - Sophisticated Design (Matching Consulting LP) */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-10 max-w-2xl">
                    {[
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ),
                        main: "85%時短",
                        sub: "業務を最大で"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                          </svg>
                        ),
                        main: "超実践的",
                        sub: "ムダのないカリキュラム"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        ),
                        main: "2ヶ月伴走",
                        sub: "当社代表による支援も"
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex-1 bg-white/80 backdrop-blur-sm border-l-4 border-blue-600 py-3 px-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 text-gray-900 font-bold text-lg leading-tight mb-1">
                          <span className="text-blue-600">{item.icon}</span>
                          {item.main}
                        </div>
                        <div className="text-gray-500 font-bold text-xs pl-7">
                          {item.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 font-medium text-sm md:text-base mb-10 text-center sm:text-left">
                    助成金の活用もご相談ください
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
                      <Link 
                        href="https://general-cg.com/contact/" 
                        className="inline-flex items-center justify-center w-full sm:w-auto bg-blue-600 text-white font-bold py-4 px-12 rounded-full hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg group"
                      >
                        AI基礎研修の話を聞く
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </Link>
                      <div className="text-center mt-2">
                        <p className="text-xs text-gray-500 mb-1">※無理な勧誘は一切いたしません</p>
                        <p className="text-xs text-gray-500">フォーム入力は1分で完了します</p>
                      </div>
                    </div>
                  </div>
                </div>

            {/* Image (Representative) */}
            <div className="hidden md:block w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white mx-auto max-w-sm md:max-w-none">
                <Image 
                  src="/ai-training/representative.jpg" 
                  alt="ジェネラルコンサルティンググループ株式会社 代表取締役 槙 優真" 
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <p className="text-sm text-gray-500 text-center md:text-right mt-3 font-medium leading-relaxed">
                ジェネラルコンサルティンググループ株式会社<br/>
                代表取締役 槙 優真
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Image (Mobile) */}
      <section className="md:hidden bg-gray-50 pb-10">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/ai-training/representative.jpg" 
                alt="ジェネラルコンサルティンググループ株式会社 代表取締役 槙 優真" 
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <p className="text-sm text-gray-500 text-center mt-3 font-medium leading-relaxed">
              ジェネラルコンサルティンググループ株式会社<br/>
              代表取締役 槙 優真
            </p>
          </div>
        </div>
      </section>

      {/* Authority Section (Logo Slider) */}
      <section className="py-2 bg-white overflow-hidden relative">
        
        <div className="flex w-fit animate-scroll hover:pause">
           {/* Logos Set 1 */}
           <div className="flex items-center gap-3 md:gap-6 px-3 md:px-6 whitespace-nowrap min-w-full justify-around shrink-0 grayscale">
             <Image src="/projects/ad-house/ad-house.png" alt="AD HOUSE" width={80} height={48} className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">東証プライム上場企業</div>
             <Image src="/projects/eikokuya/eikoya.png" alt="銀座英國屋" width={80} height={48} className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">法律事務所</div>
             <Image src="/projects/sks/sks.png" alt="新経営戦略塾" width={96} height={56} className="h-14 md:h-24 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">医療機関</div>
             <Image src="/projects/coconala/coconala.png" alt="coconala" width={80} height={48} className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">BtoB販促支援</div>
             <Image src="/projects/japan-shredder-service/japan-shredder-service.png" alt="日本シュレッダーサービス" width={80} height={48} className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">リゾートホテル</div>
             <Image src="/projects/blue-sky/blue-sky.png" alt="Blue Sky" width={80} height={48} className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">プロモーション代行</div>
             <Image src="/projects/aini-ku/aini-ku.png" alt="aini-ku" width={80} height={48} className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">船舶免許スクール</div>
           </div>

           {/* Logos Set 2 (Duplicate for loop) */}
           <div className="flex items-center gap-3 md:gap-6 px-3 md:px-6 whitespace-nowrap min-w-full justify-around shrink-0 grayscale">
             <Image src="/projects/ad-house/ad-house.png" alt="AD HOUSE" width={80} height={48} className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">東証プライム上場企業</div>
             <Image src="/projects/eikokuya/eikoya.png" alt="銀座英國屋" width={80} height={48} className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">法律事務所</div>
             <Image src="/projects/sks/sks.png" alt="新経営戦略塾" width={96} height={56} className="h-14 md:h-24 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">医療機関</div>
             <Image src="/projects/coconala/coconala.png" alt="coconala" width={80} height={48} className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">BtoB販促支援</div>
             <Image src="/projects/japan-shredder-service/japan-shredder-service.png" alt="日本シュレッダーサービス" width={80} height={48} className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">リゾートホテル</div>
             <Image src="/projects/blue-sky/blue-sky.png" alt="Blue Sky" width={80} height={48} className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">プロモーション代行</div>
             <Image src="/projects/aini-ku/aini-ku.png" alt="aini-ku" width={80} height={48} className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">船舶免許スクール</div>
           </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </section>

      {/* AIで半自動化できること (New Section) */}
      <section className="py-20 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#9CA3AF 1px, transparent 1px), linear-gradient(90deg, #9CA3AF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-10">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                 AIで<br className="md:hidden" />半自動化できること
               </h2>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                 {[
                   { 
                     label: "営業・セールス", 
                     icon: (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 mb-2 text-blue-500">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                       </svg>
                     )
                   },
                   { 
                     label: "集客・マーケ", 
                     icon: (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 mb-2 text-blue-500">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.43.872.95 1.114 1.545.295.733.563 1.487.801 2.257m0 0a28.432 28.432 0 01-.801 2.257m0 0a28.432 28.432 0 01-.801 2.257m0 0a2.25 2.25 0 01-2.228 1.545h-1.026a2.25 2.25 0 01-2.228-1.545 28.58 28.58 0 01-.802-2.257m0 0a28.58 28.58 0 01-.802-2.257m0 0a28.58 28.58 0 01-.802-2.257m.302-3.08c.441-.854 1.11-1.554 1.954-2.025m0 0a33.303 33.303 0 014.288-2.275m0 0a33.303 33.303 0 014.288 2.275m0 0a17.914 17.914 0 00-1.684-1.226" />
                       </svg>
                     )
                   },
                   { 
                     label: "社内外サポート", 
                     icon: (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 mb-2 text-blue-500">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                       </svg>
                     )
                   },
                   { 
                     label: "管理・事務", 
                     icon: (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 mb-2 text-blue-500">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                       </svg>
                     )
                   },
                   { 
                     label: "画像・動画制作", 
                     icon: (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 mb-2 text-blue-500">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                       </svg>
                     )
                   },
                   { 
                     label: "データ分析・集計", 
                     icon: (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 mb-2 text-blue-500">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                       </svg>
                     )
                   }
                 ].map((item, i) => (
                   <div key={i} className={`bg-gradient-to-b from-white to-blue-50/50 p-4 rounded-xl text-center border-2 border-blue-100 shadow-sm flex flex-col items-center justify-center hover:shadow-md hover:border-blue-300 transition-all group`}>
                       <div className="group-hover:scale-110 transition-transform duration-300">
                         {item.icon}
                       </div>
                       <span className="font-bold text-gray-800 text-sm md:text-base group-hover:text-blue-600 transition-colors">{item.label}</span>
                   </div>
                 ))}
             </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section - High Impact Design */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                こんな<span className="text-blue-600 mx-2">課題</span>ありませんか？
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Challenges 1 */}
              <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-blue-600 shadow-xl transform md:rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-blue-50">
                   <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                     </svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900">経営・組織の課題</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "人材不足を､AI活用による生産性UPで解決したい",
                    "今よりも利益が残りやすい会社に変えていきたい",
                    "少数精鋭・高利益な経営スタイルにしていきたい"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-bold text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges 2 */}
              <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-blue-100 shadow-xl transform md:-rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-blue-50">
                   <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                     </svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900">AI活用の課題</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "自社の業務にAIをどう活かせるのか分からない",
                    "AIの必要性は感じているが､何から始めるべきか分からない",
                    "AIを独学で使っているが､実務で活用しきれていない"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-bold text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Risk Box - Enhanced Fear Appeal (Dark Theme) */}
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-gray-800">
              <div className="relative z-10">
                <h3 className="text-xl md:text-3xl font-black text-white mb-12 text-center leading-tight">
                  その課題を放置すると､<br className="md:hidden"/>こんなことに…
                </h3>
                
                <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                  <div className="bg-gray-800/50 p-6 rounded-xl flex items-center gap-5 shadow-lg transform hover:scale-[1.02] transition-transform relative overflow-hidden group">
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
                     <span className="text-blue-600/80 font-black text-4xl leading-none opacity-80 group-hover:opacity-100 transition-opacity">✕</span>
                     <p className="font-bold text-gray-200 text-lg md:text-2xl leading-snug">
                       人材不足でサービス品質低下｡<br className="md:hidden"/><span className="text-white border-b-2 border-blue-600 pb-1">負のスパイラルに</span>
                     </p>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl flex items-center gap-5 shadow-lg transform hover:scale-[1.02] transition-transform relative overflow-hidden group">
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
                     <span className="text-blue-600/80 font-black text-4xl leading-none opacity-80 group-hover:opacity-100 transition-opacity">✕</span>
                     <p className="font-bold text-gray-200 text-lg md:text-2xl leading-snug">
                       時代遅れの会社と思われて､<br className="md:hidden"/><span className="text-white border-b-2 border-blue-600 pb-1">採用がさらに難航</span>
                     </p>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl flex items-center gap-5 shadow-lg transform hover:scale-[1.02] transition-transform relative overflow-hidden group">
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
                     <span className="text-blue-600/80 font-black text-4xl leading-none opacity-80 group-hover:opacity-100 transition-opacity">✕</span>
                     <p className="font-bold text-gray-200 text-lg md:text-2xl leading-snug">
                       同じ仕事に､競合は2時間､<br className="md:hidden"/><span className="text-white border-b-2 border-blue-600 pb-1">あなたの会社は10時間かかる</span>
                     </p>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl flex items-center gap-5 shadow-lg transform hover:scale-[1.02] transition-transform relative overflow-hidden group">
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
                     <span className="text-blue-600/80 font-black text-4xl leading-none opacity-80 group-hover:opacity-100 transition-opacity">✕</span>
                     <p className="font-bold text-gray-200 text-lg md:text-2xl leading-snug">
                       AIを使う会社に競争で負けて､<br className="md:hidden"/><span className="text-white border-b-2 border-blue-600 pb-1">生き残れない</span>
                     </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Transition */}
            <div className="text-center mt-20">
                <div className="w-px h-16 bg-gray-300 mx-auto mb-6"></div>
                <p className="text-lg font-bold text-gray-500 mb-4">これらは全て</p>
                <div className="inline-block bg-blue-600 text-white text-3xl md:text-5xl font-black py-4 px-12 rounded-full shadow-xl">
                    AI基礎研修で解決！
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* AI基礎研修とは？ (Main Features - Service Details Style) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                AI基礎研修とは？
              </h2>
              <p className="text-blue-600 mt-2 text-xl font-bold">“即”利益改善を見込めるAI研修です</p>
            </div>

            <div className="space-y-24">
              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2 relative">
                   <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 border-4 border-white">
                      <Image 
                        src="/ai-training/practical-curriculum.jpg" 
                        alt="業務効率化を実現する超実践的なAI基礎研修のイメージ" 
                        width={800}
                        height={600}
                        className="w-full h-auto" 
                      />
                   </div>
                </div>
                <div className="md:w-1/2">
                  <div className="text-blue-600 font-black text-2xl tracking-widest mb-2 opacity-30">01</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">超実践的な<br className="md:hidden" />カリキュラム</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8 border-l-4 border-blue-600 pl-4">
                    理論だけでなく、明日から使える実践的な内容を中心に構成。現場ですぐに役立つスキルを習得できます。
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</div>
                      ムダを徹底的に排除した内容
                    </li>
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</div>
                      明日から使えるワークショップ形式
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="md:w-1/2 relative">
                   <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform rotate-1 border-4 border-white">
                      <Image 
                        src="/ai-training/time-reduction.jpg" 
                        alt="AI活用により業務時間を大幅に削減するイメージ" 
                        width={800}
                        height={600}
                        className="w-full h-auto" 
                      />
                   </div>
                </div>
                <div className="md:w-1/2">
                  <div className="text-blue-600 font-black text-2xl tracking-widest mb-2 opacity-30">02</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">業務を<br className="md:hidden" />最大85%時短</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8 border-l-4 border-blue-600 pl-4">
                    AIを活用することで、従来の業務時間を大幅に削減。空いた時間で、より付加価値の高い業務に集中できます。
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</div>
                      単純作業は全てAIにお任せ
                    </li>
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</div>
                      頭を使う業務もAIにお任せ
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2 relative">
                   <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 border-4 border-white">
                      <Image 
                        src="/ai-training/productivity-up.jpg" 
                        alt="営業・事務・開発など全職種の生産性を向上させるイメージ" 
                        width={800}
                        height={600}
                        className="w-full h-auto" 
                      />
                   </div>
                </div>
                <div className="md:w-1/2">
                  <div className="text-blue-600 font-black text-2xl tracking-widest mb-2 opacity-30">03</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">全職種の<br className="md:hidden" />生産性UP</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8 border-l-4 border-blue-600 pl-4">
                    営業、事務、マーケティング、エンジニアなど、全職種に対応。職種ごとの具体的な活用事例も豊富です。
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</div>
                      職種別の活用事例も豊富
                    </li>
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</div>
                      文系・理系問わず習得可能
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-20 text-center">
               <div className="inline-block bg-orange-50 border-2 border-orange-200 p-8 rounded-3xl relative max-w-2xl mx-auto shadow-sm">
                   <p className="text-xl md:text-2xl font-bold text-gray-900 mb-2 mt-2">助成金の活用もご相談ください</p>
                   <p className="text-gray-600 font-medium">制度活用により、費用負担を軽減できる可能性があります。</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Details - Professional Design */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                研修後の<br className="md:hidden" />サポートも充実
              </h2>
              <p className="text-gray-500 mt-4 font-bold">「研修して終わり」ではありません。研修内容を実践できるように無償サポートします。</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {/* Support 1 */}
               <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-3xl text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-blue-800 leading-tight">“即”使える<br/>プロンプト集</h3>
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    実務に特化したプロンプト（指示文）のテンプレート集をプレゼント。
                  </p>
               </div>

               {/* Support 2 */}
               <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-3xl text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-blue-800 leading-tight">無制限<br/>チャットサポート</h3>
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    研修後2ヶ月間、質問は無制限。つまずいても即解決できます。
                  </p>
               </div>

               {/* Support 3 */}
               <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-3xl text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-blue-800 leading-tight">当社代表の<br/>伴走コンサル</h3>
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    研修後2ヶ月間、代表自ら伴走サポートを実施。
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum (Flow Section structure) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                研修カリキュラム
              </h2>
              <p className="text-gray-500 mt-4">研修カリキュラムは､大まかに以下のとおりです｡</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Part 1 */}
              <div className="relative text-center">
                <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-6 shadow-lg z-10 relative">第一部</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI基礎知識</h3>
                <ul className="text-gray-500 text-sm leading-relaxed text-left list-disc pl-5 inline-block">
                  <li>AIでできること/できないこと</li>
                  <li>リスク＆セキュリティ</li>
                  <li>代表的なツール・用途</li>
                  <li>登録方法・操作</li>
                </ul>
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
              </div>
              
              {/* Part 2 */}
              <div className="relative text-center">
                <div className="w-24 h-24 bg-white text-blue-600 border-2 border-blue-600 rounded-full flex items-center justify-center text-xl font-black mx-auto mb-6 shadow-lg z-10 relative">第二部</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">プロンプトのスキル</h3>
                 <ul className="text-gray-500 text-sm leading-relaxed text-left list-disc pl-5 inline-block">
                  <li>プロンプトの重要性</li>
                  <li>作成のテクニック</li>
                  <li>記号や記法の細かいコツ</li>
                </ul>
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
              </div>
              
              {/* Part 3 */}
              <div className="relative text-center">
                <div className="w-24 h-24 bg-white text-gray-900 border-2 border-gray-200 rounded-full flex items-center justify-center text-xl font-black mx-auto mb-6 shadow-lg z-10 relative">第三部</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">実務での活用法</h3>
                <ul className="text-gray-500 text-sm leading-relaxed text-left list-disc pl-5 inline-block">
                  <li>業務での具体的な活用法</li>
                  <li>マイGPTの活用法</li>
                  <li>各AIツールの活用法</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">受講料</h2>
            </div>

            <div className="max-w-lg mx-auto relative">
              
              {/* Main Pricing Card */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative z-10">
                {/* Header & Price */}
                <div className="bg-gradient-to-br from-blue-600 to-gray-900 text-white p-10 text-center relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                   <h3 className="text-2xl font-bold mb-6 relative z-10">AI基礎研修</h3>
                   <div className="flex items-baseline justify-center gap-1 relative z-10">
                     <span className="text-6xl font-black tracking-tight">40</span>
                     <span className="text-2xl font-bold">万円</span>
                     <span className="text-sm font-medium text-blue-100">/人（税別）</span>
                   </div>
                   <p className="mt-2 text-blue-200 text-sm font-bold">約12時間の研修プログラム</p>
                </div>
                
                {/* Simple Features (Just Training) */}
                <div className="p-8 border-b border-gray-100">
                   <p className="text-center font-bold text-gray-700">全職種対応・超実践的カリキュラム</p>
                </div>
              </div>

              {/* Bonus Connector */}
              <div className="h-10 w-1 bg-gray-300 mx-auto"></div>
              <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto -mt-5 relative z-20">＋</div>
              <div className="h-6 w-1 bg-gray-300 mx-auto -mt-1"></div>

              {/* Bonus Card */}
              <div className="bg-orange-50 rounded-3xl p-8 border-2 border-orange-200 shadow-xl relative overflow-hidden">
                 <div className="absolute -right-12 -top-12 bg-orange-500 w-32 h-32 transform rotate-45 opacity-10"></div>
                 <div className="text-center mb-6">
                    <span className="bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">期間限定の特別特典</span>
                    <h3 className="text-xl font-bold text-orange-800 mt-3">3つの豪華特典をプレゼント</h3>
                 </div>
                 <ul className="space-y-4">
                    {[
                         "実務で即使えるプロンプト集",
                         "無制限チャットサポート(2ヶ月)",
                         "伴走サポート(月1オンライン相談×2回)"
                    ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-gray-800 font-bold text-base md:text-lg bg-white p-3 rounded-lg shadow-sm border border-orange-100">
                         <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                         </span>
                         {item}
                     </li>
                    ))}
                 </ul>
              </div>

              <div className="mt-10">
                <Link 
                  href="https://general-cg.com/contact/" 
                   className="inline-flex items-center justify-center w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg text-lg group"
                >
                  まずは無料相談を申し込む
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                   </svg>
                </Link>
                 <div className="text-center mt-4">
                   <p className="text-sm font-bold text-blue-600 mb-1">助成金活用のご相談も</p>
                   <p className="text-[10px] text-gray-400">制度活用で費用を軽減できる可能性があります</p>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Simulation (Story Flow) - High End Design */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none" 
             style={{ background: 'radial-gradient(circle at center top, #94a3b8 0%, transparent 60%)' }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              絶対に<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">損させません</span>
            </h2>
            <p className="text-slate-300 font-medium text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              最小限の成果だとしても、<span className="text-white border-b border-amber-500 pb-1">投資回収が見込める設計</span>になっています。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
              
              {/* Step 1: Time Reduction */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden relative z-30">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">1</span>
                      <h3 className="font-bold text-gray-800 text-lg md:text-xl">まずは、業務時間が劇的に減ります</h3>
                  </div>
                  <div className="p-6 md:p-10">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                          <div className="w-full md:w-2/3 space-y-6">
                              {/* Before Bar */}
                              <div className="relative">
                                  <div className="flex justify-between text-sm font-bold text-gray-500 mb-1">
                                      <span>Before (人手)</span>
                                      <span>50時間/月</span>
                                  </div>
                                  <div className="h-10 bg-gray-300 rounded-full w-full relative overflow-hidden flex items-center">
                                       <span className="text-gray-800 font-bold text-xs px-4 relative z-10">事務作業・資料作成など</span>
                                  </div>
                              </div>
                              {/* After Bar */}
                              <div className="relative">
                                  <div className="flex justify-between text-sm font-bold text-blue-600 mb-1">
                                      <span>After (AI活用)</span>
                                      <span>7.5時間/月</span>
                                  </div>
                                  <div className="h-10 bg-blue-50 rounded-full w-full relative overflow-hidden border border-blue-100 flex items-center">
                                      <div className="h-full bg-blue-600 w-[15%] absolute left-0 top-0 shadow-sm"></div>
                                      <span className="text-blue-600 font-bold text-xs px-4 relative z-10 pl-[18%]">AIで自動化</span>
                                  </div>
                              </div>
                          </div>
                          <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-blue-600 border-l-0 md:border-l-2 border-gray-100 md:pl-8 pt-4 md:pt-0">
                               <p className="font-bold text-lg mb-1">業務時間を</p>
                               <p className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-2">-85<span className="text-2xl">%</span></p>
                               <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">大幅削減</span>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Arrow Connection */}
              <div className="h-12 flex justify-center items-center relative z-20 -my-2">
                  <div className="h-full w-0.5 bg-gray-300"></div>
                  <div className="absolute bg-white border border-gray-300 rounded-full p-1.5 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                  </div>
              </div>

              {/* Step 2: Money Logic */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden relative z-20">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">2</span>
                      <h3 className="font-bold text-gray-800 text-lg md:text-xl">この時間は、金額に換算すると…</h3>
                  </div>
                  <div className="p-6 md:p-10 text-center">
                      <p className="text-gray-600 font-bold mb-6 text-sm md:text-base">
                          仮に、3名の社員が「1日2時間の時短」に成功した場合
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-gray-800 font-bold text-sm md:text-xl">
                          <div className="bg-gray-100 px-4 py-3 rounded-xl border border-gray-200">
                              時給 1,875円<span className="text-xs font-normal block text-gray-500 mt-1">月給30万</span>
                          </div>
                          <span className="text-gray-400">×</span>
                          <div className="bg-gray-100 px-4 py-3 rounded-xl border border-gray-200">
                              2時間<span className="text-xs font-normal block text-gray-500 mt-1">1日の時短</span>
                          </div>
                          <span className="text-gray-400">×</span>
                          <div className="bg-gray-100 px-4 py-3 rounded-xl border border-gray-200">
                              3名<span className="text-xs font-normal block text-gray-500 mt-1">受講者数</span>
                          </div>
                          <span className="text-gray-400">×</span>
                          <div className="bg-gray-100 px-4 py-3 rounded-xl border border-gray-200">
                              12ヶ月<span className="text-xs font-normal block text-gray-500 mt-1">年間</span>
                          </div>
                      </div>
                      <div className="mt-8 flex items-center justify-center gap-4">
                          <span className="text-gray-400 font-bold text-sm">年間で…</span>
                          <div className="text-blue-600 font-black text-3xl md:text-5xl border-b-4 border-blue-600 leading-tight">
                              270万円<span className="text-lg md:text-2xl text-gray-600 font-bold ml-2">相当の価値</span>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Arrow Connection */}
              <div className="h-12 flex justify-center items-center relative z-10 -my-2">
                  <div className="h-full w-0.5 bg-gray-300"></div>
                  <div className="absolute bg-white border border-gray-300 rounded-full p-1.5 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                  </div>
              </div>

              {/* Step 3: ROI */}
              <div className="bg-white rounded-3xl shadow-xl border-2 border-orange-200 overflow-hidden relative z-10">
                   {/* Background Effect */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full filter blur-3xl opacity-20 -z-0"></div>

                  <div className="bg-orange-50 px-6 py-4 border-b border-orange-100 flex items-center gap-3 relative z-10">
                      <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">3</span>
                      <h3 className="font-bold text-gray-800 text-lg md:text-xl">だから、研修費を払っても黒字です</h3>
                  </div>
                  <div className="p-6 md:p-10 relative z-10">
                      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                          
                          {/* Investment */}
                          <div className="text-center w-full md:w-auto">
                              <p className="text-gray-500 font-bold mb-2 text-sm">投資コスト</p>
                              <div className="bg-gray-100 text-gray-500 rounded-2xl p-6 border-2 border-gray-200 w-full md:w-48 h-40 flex flex-col items-center justify-center">
                                  <p className="text-xs font-bold mb-1">研修費</p>
                                  <p className="text-3xl font-black">120<span className="text-sm">万</span></p>
                              </div>
                          </div>

                          {/* Inequality Sign */}
                          <div className="text-orange-400 text-4xl font-black rotate-90 md:rotate-0">
                              ＜
                          </div>

                          {/* Effect */}
                          <div className="text-center w-full md:w-auto">
                              <p className="text-orange-600 font-bold mb-2 text-sm">得られる効果</p>
                              <div className="bg-white border-2 border-orange-400 rounded-2xl w-full md:w-64 h-64 shadow-2xl flex flex-col overflow-hidden relative">
                                   {/* Top Part: Profit */}
                                  <div className="bg-orange-500 flex-grow flex flex-col items-center justify-center text-white relative p-2 animate-pulse">
                                      <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-1 border border-white/40">利益</span>
                                      <p className="text-5xl font-black tracking-tight">+150<span className="text-lg">万</span></p>
                                  </div>
                                   {/* Bottom Part: Recovery */}
                                   <div className="bg-orange-100 h-20 flex flex-col items-center justify-center border-t-2 border-dashed border-orange-300 text-orange-800">
                                       <p className="text-[10px] font-bold">投資回収</p>
                                       <p className="text-xl font-bold opacity-70">120万</p>
                                   </div>
                                   {/* Total Badge */}
                                   <div className="absolute top-2 right-2 bg-white text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-orange-100">
                                       総額 270万円
                                   </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="mt-10 text-center">
                          <p className="text-lg md:text-2xl text-gray-800 font-bold">
                              受講料を差し引いても、<br className="md:hidden"/>
                              <span className="text-orange-600 text-2xl md:text-3xl border-b-4 border-orange-400">150万円のプラス</span>になります
                          </p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                 支援実績
               </h2>
               <p className="text-gray-500 font-medium">社員数名の企業様から上場企業まで、業界・規模を問わず支援実績があります</p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
               {[
                 { src: "/projects/eikokuya/eikoya.png", label: "英國屋（銀座英國屋）さま", cat: "AI×マーケ" },
                 { src: "/projects/ad-house/ad-house.png", label: "大喜建設（AD HOUSE）さま", cat: "AI×マーケ" },
                 { src: "/projects/sks/sks.png", label: "新経営戦略塾さま", cat: "AI" },
                 { src: "/projects/law-firm/lawyer.jpg", label: "弁護士法人（法律事務所）さま", cat: "マーケティング" },
                 { src: "/projects/tourism-infrastructure/tourism-infrastructure.jpg", label: "観光インフラ会社（東証プライム上場）", cat: "マーケティング" },
                 { src: "/projects/bpo-customer-support/bpo-customer-support.jpg", label: "BPO顧客サポート企業", cat: "AI" },
                 { src: "/projects/coconala/coconala.png", label: "ココナラさま（東証グロース上場）", cat: "AI×マーケ" },
                 { src: "/projects/promotional-support/promotional-support.jpg", label: "BtoBの販促支援サービス", cat: "マーケティング" },
               ].map((item, i) => (
                 <div key={i} className="group relative rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video w-full overflow-hidden rounded-xl border border-gray-100 relative">
                       <Image 
                         src={item.src} 
                         alt={item.label} 
                         fill
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                         className="object-cover transform group-hover:scale-105 transition-transform duration-500" 
                       />
                       {/* Category Badge */}
                       <div className="absolute top-2 left-2">
                          <span className={`text-[10px] font-bold px-2 py-1 rounded-full text-white ${
                            item.cat === 'AI' ? 'bg-blue-600' : 
                            item.cat === 'マーケティング' ? 'bg-orange-500' : 
                            'bg-brand-red'
                          }`}>
                            {item.cat}
                          </span>
                       </div>
                    </div>
                    <div className="pt-3 pb-1">
                       <p className="text-sm font-bold text-gray-900 leading-snug">{item.label}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                 お客様の声
               </h2>
               <p className="text-gray-500 font-medium">受講満足度は100%。AI基礎・AIマーケなど、当社研修シリーズ全体の受講者様の声です。</p>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
               {[
                 {
                   title: "非常に具体的で､わかりやすかった",
                   content: "非常に具体的で､わかりやすかった｡ボリュームがあり､実際の使用例も参考になった｡具体的で､かつ､すぐ実践できることと､考え方の両方がバランス良く構成されていました｡",
                   job: "事務職"
                 },
                 {
                    title: "業務の進め方そのものを変革",
                    content: "AI活用は単なる便利ツールの域を超え、業務の進め方そのものを変革する可能性を強く感じました。特に「マイGPT」を作るプロセスは、プロンプトを調整しながら業務に最適化していく試行錯誤の重要性を実感でき、応用の幅広さに驚かされました",
                    job: "営業職"
                 },
                 {
                    title: "槙さんから教わってよかった",
                    content: "AIの使い方はもちろんですが『最後に』でまとめていただいたセクションが秀逸だと思いました。この解説があったという点も考え、改めて「ほかのAI講師ではなく槙さんから教わってよかった」と感じました。",
                    job: "プログラマ"
                 },
                 {
                    title: "近い将来「AI」を使うことが当たり前に",
                    content: "この研修を受講していなければ「AI」を使うことすらしなかったと思います。いまスマホを使用するのが当たり前のように、近い将来「AI」を使うことが当たり前になってくるでしょう。そのとき、ただ使用するのではなく、使い方を知っているだけで全然違うと思います。",
                    job: "社内SE"
                 },
                 {
                    title: "最高です！ワクワクしました",
                    content: "最高です！今日もワクワクしながら受講させていただきました。AIを使っているほうだと思ってましたが、まだまだだなと痛感させられました。",
                    job: "IT・システム担当"
                 },
                 {
                    title: "今回で終了してしまうのが本当に残念",
                    content: "毎回毎回、内容が凄すぎて、そして「AI」の進歩に驚かされました。特にGeminiの画像生成は本当に凄いですね。今回で終了してしまうのが本当に残念です。今後は、自分で学んでいかなければいけませんね。",
                    job: "クリエイティブ"
                 }
               ].map((review, i) => (
                 <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm relative flex flex-col">
                    <div className="text-4xl text-blue-200 absolute top-4 right-4">”</div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">{review.job}</span>
                        <div className="flex text-yellow-400 text-xs">
                            {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                        </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg leading-snug">{review.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">{review.content}</p>
                 </div>
               ))}
             </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Stripe Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                当社が<br className="md:hidden" />選ばれる理由
              </h2>
              
              <div className="mt-8 bg-blue-50 border-2 border-blue-100 rounded-2xl p-6 inline-block max-w-3xl shadow-sm">
                <p className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  AIの知識だけあっても、業務は変わりません。<br/>
                  実務経験豊富な講師が、<span className="text-blue-600">現場で使えるスキル</span>を伝えます。
                </p>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  ただの「AI操作説明」で終わらせず、どう業務に組み込めば時短になるのか。<br className="hidden md:block"/>
                  <span className="font-bold border-b-2 border-blue-400">「実務での活用」に重点を置いたカリキュラム</span>です。
                </p>
              </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-200 px-1 pb-1 pt-4">
                <table className="w-full text-sm md:text-base border-collapse min-w-[800px]">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="p-4 md:p-5 font-bold text-center w-[20%]"></th>
                            <th className="p-4 md:p-5 font-bold text-center bg-blue-600 text-lg md:text-xl w-[26%] relative">
                                当社
                            </th>
                            <th className="p-4 md:p-5 font-bold text-center w-[18%]">一般的なAI研修<br/>(中小企業)</th>
                            <th className="p-4 md:p-5 font-bold text-center w-[18%]">大手研修会社</th>
                            <th className="p-4 md:p-5 font-bold text-center w-[18%]">動画教材<br/>eラーニング</th>
                        </tr>
                    </thead>
                    <tbody className="text-center divide-y divide-gray-200">
                        {[
                            { label: "得意な企業規模", data: ["中小企業\n(10〜150名)", "中小企業", "大手・中堅企業", "全規模"] },
                            { label: "受講形式", data: ["リアルタイム\n動画受講", "リアルタイム\n動画受講", "リアルタイム\n動画受講", "動画受講"] },
                            { label: "カリキュラムの軸", data: ["◎\n実務での活用", "△〜◯\n機能紹介〜活用", "◯\n体系的な操作説明", "△\n一般論・知識"] },
                            { label: "内製化・定着", data: ["◎\n伴走支援で定着", "△\n研修後のフォロー薄", "△\n研修後のフォロー薄", "✕\n視聴のみで終わる"] },
                            { label: "講師・サポート", data: ["実務経験者が担当", "外部講師・質にバラつき", "一般講師・サポート薄", "動画のみ・質問不可"] },
                            { label: "カスタマイズ", data: ["◯\n一部カスタム可", "△〜◯\n会社による", "△\nパッケージ型", "✕\n共通コンテンツ"] },
                            { label: "料金", data: ["40万円/人", "40万円/人", "30〜50万円/人", "1〜5万円/人"] }
                        ].map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <th className="p-3 md:p-4 text-left font-bold text-gray-700 bg-gray-100 whitespace-pre-wrap">{row.label}</th>
                                <td className="p-3 md:p-4 font-bold text-blue-600 bg-blue-50 text-base md:text-lg whitespace-pre-wrap border-x-2 border-blue-600">{row.data[0]}</td>
                                <td className="p-3 md:p-4 text-gray-600 whitespace-pre-wrap text-sm">{row.data[1]}</td>
                                <td className="p-3 md:p-4 text-gray-600 whitespace-pre-wrap text-sm">{row.data[2]}</td>
                                <td className="p-3 md:p-4 text-gray-600 whitespace-pre-wrap text-sm">{row.data[3]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 bg-white p-8 rounded-2xl text-center border border-gray-100 shadow-lg">
                <p className="text-xl font-bold text-gray-900 mb-2">ひと言で言えば…</p>
                <p className="text-xl md:text-2xl font-bold text-blue-600 leading-relaxed">
                    ツールの機能紹介で終わらせず、<span className="text-gray-900 border-b-2 border-blue-400 mx-1">「AIを使いこなす考え方」</span>まで習得。<br className="hidden md:block"/>
                    実務に精通した講師が、<span className="text-gray-900 border-b-2 border-blue-400 mx-1">遠回りせず業務時間を削減する活用法</span>をお伝えします。
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultant Profile */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                代表講師
              </h2>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <Image 
                  src="/ai-training/representative.jpg" 
                  alt="ジェネラルコンサルティンググループ株式会社 代表取締役 槙 優真" 
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
                 {/* Certifications */}
                 <div className="mt-6 space-y-2">
                    <div className="bg-gray-50 px-4 py-2 rounded-lg text-sm font-bold text-center text-gray-700 shadow-sm border border-gray-200">Google AI Essentials認定</div>
                    <div className="bg-gray-50 px-4 py-2 rounded-lg text-sm font-bold text-center text-gray-700 shadow-sm border border-gray-200">生成AIプロンプトエンジニア認定</div>
                 </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    槙 優真 <span className="text-xl text-gray-400 font-normal ml-2">Yuma Maki</span>
                  </h3>
                  <p className="text-gray-600">ジェネラルコンサルティンググループ株式会社 代表取締役</p>
                </div>
                
                <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
                  <p>
                    ベンチャー・スタートアップから大手企業（Yahoo! JAPAN）まで会社員を4年経験｡<br/>
                    2016年に独立して以降､新規事業立ち上げ・既存事業の売上改善を多数経験｡<br/>
                    2024年､AIの影響力を目の当たりにしたことで､AI領域に注力｡
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h4 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">主な実績</h4>
                    <ul className="space-y-3 text-sm">
                      {[
                        "マーケティング担当幹部として法律事務所を創業｡年商3.9億円に",
                        "東証プライム上場企業の社長室にて､全社Web広告戦略の統括をコンサル支援",
                        "ココナラ（東証グロース上場）ほか､複数社のAI活用を支援",
                        "約400名の経営者が在籍する「新経営戦略塾」にてAI講師を担当",
                        "上場企業のAI事業部門に対して､裏方としてプロンプトを多数納品",
                        "50社以上に対して､AI活用を支援"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">●</span>
                            <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              </div>

              {/* Mission Link */}
              <Link href="/profile#story" target="_blank" rel="noopener noreferrer" className="block mt-10 -mx-8 -mb-8 md:-mx-12 md:-mb-12">
                <div className="pt-8 px-8 pb-8 md:px-12 md:pb-12 bg-gradient-to-b from-white to-blue-50 hover:to-blue-100 transition-colors duration-300 rounded-b-3xl border-t border-gray-200 text-center group">
                  <p className="font-bold text-gray-800 text-lg mb-2">この事業にかける想い</p>
                  <div className="inline-flex items-center gap-2 text-blue-600 font-bold border-b border-blue-600 pb-0.5">
                    ストーリーを読む
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                よくあるご質問
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  q: "ChatGPT以外も扱ってもらえますか？",
                  a: "はい、基本カリキュラムでChatGPT・Gemini・Claudeなどに対応可能です。NotebookLMやGensparkなどの他ツールについても、研修後の伴走サポートなどでレクチャー可能です。"
                },
                {
                  q: "AIを使いこなすには､プログラミングスキルが必須ですか？",
                  a: "いいえ､不要です｡AIへの指示は全て日本語なので､自分の意図を伝えられる語彙力があれば大丈夫です｡理系スキルがいらないので､文系の人にこそオススメです｡"
                },
                {
                  q: "簡単な業務だけでなく「頭を使う業務」もAIで自動化できますか？",
                  a: "できます｡AIの凄いところは､これまで実現できなかった「頭を使う業務」を自動化できる点にあります｡さらに､貴社オリジナルのノウハウ・データをAIに学習させることで､貴社業務に特化したアウトプットも実現できます｡"
                },
                {
                  q: "まだ本格的には依頼を検討していないのですが､相談可能ですか？",
                  a: "可能です｡「気軽に相談したい」「壁打ち相手になってほしい」など､ライトな内容でも､お気軽にお問い合わせくださいませ｡"
                },
                {
                  q: "単発でのAIレクチャーもお願いできますか？",
                  a: "可能です｡お気軽にご相談ください｡"
                },
                {
                  q: "オフライン（対面）での実施も可能ですか？",
                  a: "可能です｡お気軽にご相談ください｡"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">Q</div>
                    <h3 className="text-lg font-bold text-gray-900 pt-1.5 whitespace-pre-wrap leading-snug">{item.q}</h3>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0 font-bold text-lg">A</div>
                    <div className="pt-1.5">
                        <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{item.a}</p>
                        {item.q.includes("依頼を検討していないのですが") && (
                            <></>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            AIで“即”利益改善
          </h2>
          <p className="text-gray-300 mb-12 max-w-xl mx-auto text-lg">
            無理な勧誘は一切ございませんので、ご安心ください。
          </p>
          
          <div className="flex flex-col items-center gap-2">
             <Link 
                href="https://general-cg.com/contact/" 
                className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-5 px-16 rounded-full hover:bg-white hover:text-blue-600 transition-all shadow-2xl hover:shadow-white/20 text-xl group"
              >
                <span>無料相談を申し込む</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
              <p className="text-xs text-gray-400 mt-2">フォーム入力は1分で完了します</p>
          </div>
      </div>
      </section>

      <Footer />
    </main>
  );
}
