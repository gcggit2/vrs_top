import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AIマーケ研修｜「売れる仕組み」を内製化する法人向けAI×マーケティング支援',
  description: '中小企業向けAIマーケ研修。AI×マーケティングで"売れる仕組み"を再現性高く内製化。コンサル歴10年の超実践的カリキュラム。当社代表による2ヶ月伴走支援付き。助成金活用もご相談ください。',
};

export default function AiMarkeTrainingPage() {
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
                "name": "AIマーケ研修",
                "provider": {
                  "@type": "Organization",
                  "name": "ジェネラルコンサルティンググループ株式会社",
                  "founder": "槙 優真"
                },
                "description": "AI×マーケで売れる仕組みを内製化する研修。",
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
                      "text": "可能です｡Gemini, Claude, NotebookLM, Gensparkなど他AIツールにも対応しています｡"
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
                    "name": "AIマーケ研修",
                    "item": "https://general-consulting.co.jp/ai-marke-training"
                  }
                ]
              }
            ]
          }),
        }}
      />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-32 bg-orange-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 transform origin-top-right z-0 opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
            
            {/* SP Layout: Image & Text Mix */}
            <div className="md:hidden w-full mb-6">
               <div className="flex items-end justify-between gap-2">
                  <div className="w-2/3">
                    <div className="inline-block bg-orange-600/10 text-orange-600 font-bold px-3 py-1 rounded-full text-[10px] mb-3 border border-orange-600/20 leading-tight">
                      社員数名〜150名規模の<br/>経営層・集客担当にオススメ
                    </div>
                    <p className="text-3xl font-bold text-gray-900 leading-[1.2] tracking-tight mb-3">
                      <span className="text-orange-600">兼務でも､集客最大化</span>
                    </p>
                  </div>
                  <div className="w-1/3">
                     <Image 
                       src="/ai-marke-training/representative.jpg" 
                       alt="ジェネラルコンサルティンググループ株式会社 代表取締役 槙 優真" 
                       width={400}
                       height={400}
                       className="w-full h-auto object-cover rounded-xl shadow-md border-2 border-white" 
                     />
                     <p className="text-[10px] text-gray-500 text-right mt-1.5 leading-snug font-medium">
                       ジェネラルコンサルティング<br/>グループ(株) 代表 槙 優真
                     </p>
                  </div>
               </div>
               
               <div className="flex items-center gap-3 mb-3">
                  <div className="h-px bg-gray-300 flex-grow"></div>
                  <h1 className="text-sm font-bold text-gray-400 tracking-widest">AIマーケ研修</h1>
                  <div className="h-px bg-gray-300 flex-grow"></div>
               </div>

               <p className="text-lg text-gray-900 font-bold text-center leading-relaxed">
                 AI×マーケで&quot;売れる仕組み&quot;を再現性高く内製化
               </p>
            </div>

            {/* PC Content */}
            <div className="hidden md:block md:w-3/5">
              <div className="inline-block bg-orange-600/10 text-orange-600 font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-orange-600/20">
                社員数名〜150名規模の、経営層・集客担当にオススメ
              </div>
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.2] tracking-tight">
                <span className="text-orange-600">兼務でも､集客最大化</span>
              </p>
              <div className="flex items-center gap-4 mb-8">
                  <div className="h-px bg-gray-300 w-12"></div>
                  <h1 className="text-lg font-bold text-gray-400 tracking-widest">AIマーケ研修</h1>
                  <div className="h-px bg-gray-300 w-12"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-800 mb-10 leading-relaxed font-bold border-l-4 border-orange-600 pl-6">
                AI×マーケで&quot;売れる仕組み&quot;を再現性高く内製化
              </p>
              
              {/* 3つの訴求ポイント */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-10 max-w-2xl">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    ),
                    main: "超実践的",
                    sub: "コンサル歴10年以上の知見"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    main: "全額返金保証",
                    sub: "投資対効果にコミット"
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
                  <div key={i} className="flex-1 bg-white/80 backdrop-blur-sm border-l-4 border-orange-600 py-3 px-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 text-gray-900 font-bold text-lg leading-tight mb-1">
                      <span className="text-orange-600">{item.icon}</span>
                      {item.main}
                    </div>
                    <div className="text-gray-500 font-bold text-xs pl-7">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 font-medium text-sm md:text-base mb-10 text-center sm:text-left">
                広告・SEO・SNS・公式LINEなど幅広く対応可
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
                  <Link 
                    href="https://general-cg.com/contact/" 
                    className="inline-flex items-center justify-center w-full sm:w-auto bg-orange-600 text-white font-bold py-4 px-12 rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg group"
                  >
                    AIマーケ研修の話を聞く
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
            
            {/* PC Image (Representative) */}
            <div className="hidden md:block md:w-2/5 w-full">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                 <Image 
                   src="/ai-marke-training/representative.jpg" 
                   alt="ジェネラルコンサルティンググループ株式会社 代表取締役 槙 優真" 
                   width={600}
                   height={800}
                   className="w-full h-auto object-cover" 
                 />
               </div>
               <p className="text-sm text-gray-500 text-right mt-3 font-medium leading-relaxed">
                 ジェネラルコンサルティンググループ株式会社<br/>
                 代表取締役 槙 優真
               </p>
            </div>

            {/* SP Layout: Features & CTA */}
            <div className="md:hidden w-full">
              {/* 3つの訴求ポイント (SP) */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  {
                    top: "コンサル歴\n10年の",
                    main: "超実践的",
                    sub: "カリキュラム",
                    isText: true
                  },
                  {
                    top: "投資対効果\nコミット",
                    main: "全額返金保証",
                    sub: "保証"
                  },
                  {
                    top: "代表伴走\n2ヶ月",
                    main: "2ヶ月",
                    sub: "伴走支援"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-orange-50/50 rounded-lg p-2 text-center border border-orange-100 relative pt-5">
                     <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-orange-400 text-white rounded-full flex items-center justify-center border border-white shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-[10px] text-gray-600 font-bold mb-0.5 whitespace-pre-wrap leading-tight">{item.top}</p>
                    <p className={`text-orange-600 font-black leading-tight ${item.isText ? 'text-xs' : 'text-lg'}`}>
                      {item.main}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-orange-600 font-bold text-center text-xs mb-6">
                社員数名〜150名規模の、経営層・集客担当にオススメ
              </p>
              
              <div className="flex flex-col items-center gap-3">
                  <Link 
                    href="https://general-cg.com/contact/" 
                    className="inline-flex items-center justify-center w-full bg-orange-600 text-white font-bold py-4 rounded-full shadow-lg text-lg animate-pulse"
                  >
                    AIマーケ研修の話を聞く
                  </Link>
                  <div className="text-center mt-2">
                    <p className="text-xs text-gray-500 mb-1">※無理な勧誘は一切いたしません</p>
                    <p className="text-xs text-gray-500">フォーム入力は1分で完了します</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Authority Section (Logo Slider) */}
      <section className="py-2 bg-white overflow-hidden relative">
        <div className="flex w-fit animate-scroll hover:pause">
           {/* Logos Set 1 */}
           <div className="flex items-center gap-3 md:gap-6 px-3 md:px-6 whitespace-nowrap min-w-full justify-around shrink-0 grayscale">
             <img src="/projects/ad-house/ad-house.png" alt="AD HOUSE" className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">東証プライム上場企業</div>
             <img src="/projects/eikokuya/eikoya.png" alt="銀座英國屋" className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">法律事務所</div>
             <img src="/projects/sks/sks.png" alt="新経営戦略塾" className="h-14 md:h-24 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">医療機関</div>
             <img src="/projects/coconala/coconala.png" alt="coconala" className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">BtoB販促支援</div>
             <img src="/projects/japan-shredder-service/japan-shredder-service.png" alt="日本シュレッダーサービス" className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">リゾートホテル</div>
             <img src="/projects/blue-sky/blue-sky.png" alt="Blue Sky" className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">プロモーション代行</div>
             <img src="/projects/aini-ku/aini-ku.png" alt="aini-ku" className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">船舶免許スクール</div>
           </div>

           {/* Logos Set 2 (Duplicate for loop) */}
           <div className="flex items-center gap-3 md:gap-6 px-3 md:px-6 whitespace-nowrap min-w-full justify-around shrink-0 grayscale">
             <img src="/projects/ad-house/ad-house.png" alt="AD HOUSE" className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">東証プライム上場企業</div>
             <img src="/projects/eikokuya/eikoya.png" alt="銀座英國屋" className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">法律事務所</div>
             <img src="/projects/sks/sks.png" alt="新経営戦略塾" className="h-14 md:h-24 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">医療機関</div>
             <img src="/projects/coconala/coconala.png" alt="coconala" className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">BtoB販促支援</div>
             <img src="/projects/japan-shredder-service/japan-shredder-service.png" alt="日本シュレッダーサービス" className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">リゾートホテル</div>
             <img src="/projects/blue-sky/blue-sky.png" alt="Blue Sky" className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">プロモーション代行</div>
             <img src="/projects/aini-ku/aini-ku.png" alt="aini-ku" className="h-12 md:h-20 w-auto object-contain" />
             <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">船舶免許スクール</div>
           </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </section>

      {/* AIで半自動化できること */}
      <section className="py-20 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#9CA3AF 1px, transparent 1px), linear-gradient(90deg, #9CA3AF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-10">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                 AIで半自動化できること
               </h2>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                 {[
                   { 
                     label: "SEO・コラム記事", 
                     icon: (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 mb-2 text-orange-500">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                       </svg>
                     )
                   },
                   { 
                     label: "Web広告", 
                     icon: (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 mb-2 text-orange-500">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.43.872.95 1.114 1.545.295.733.563 1.487.801 2.257m0 0a28.432 28.432 0 01-.801 2.257m0 0a28.432 28.432 0 01-.801 2.257m0 0a2.25 2.25 0 01-2.228 1.545h-1.026a2.25 2.25 0 01-2.228-1.545 28.58 28.58 0 01-.802-2.257m0 0a28.58 28.58 0 01-.802-2.257m0 0a28.58 28.58 0 01-.802-2.257m.302-3.08c.441-.854 1.11-1.554 1.954-2.025m0 0a33.303 33.303 0 014.288-2.275m0 0a33.303 33.303 0 014.288 2.275m0 0a17.914 17.914 0 00-1.684-1.226" />
                       </svg>
                     )
                   },
                   { 
                     label: "SNS運用", 
                     icon: (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 mb-2 text-orange-500">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                       </svg>
                     )
                   },
                   { 
                     label: "LP・Webサイト", 
                     icon: (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 mb-2 text-orange-500">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                       </svg>
                     )
                   },
                   { 
                     label: "メルマガ・公式LINE", 
                     icon: (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 mb-2 text-orange-500">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                       </svg>
                     )
                   },
                   { 
                     label: "リサーチ・3C分析", 
                     icon: (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 mb-2 text-orange-500">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                       </svg>
                     )
                   }
                 ].map((item, i) => (
                   <div key={i} className={`bg-gradient-to-b from-white to-orange-50/50 p-4 rounded-xl text-center border-2 border-orange-100 shadow-sm flex flex-col items-center justify-center hover:shadow-md hover:border-orange-300 transition-all group`}>
                       <div className="group-hover:scale-110 transition-transform duration-300">
                         {item.icon}
                       </div>
                       <span className="font-bold text-gray-800 text-sm md:text-base group-hover:text-orange-600 transition-colors">{item.label}</span>
                   </div>
                 ))}
             </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F97316 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                こんな<span className="text-orange-600 mx-2">課題</span>ありませんか？
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Challenges 1 */}
              <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-orange-600 shadow-xl transform md:rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-orange-50">
                   <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                     </svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900">集客・仕組みの課題</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "AIで集客を効率化する仕組みを作りたい",
                    "兼務スタッフでも集客し続けられる仕組みを作りたい",
                    "専任担当がいなくとも､集客を最大化したい"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
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
              <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-orange-100 shadow-xl transform md:-rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-orange-50">
                   <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                     </svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900">スキル・実務の課題</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "経営層・集客担当のマーケスキルを高めたい",
                    "広告・SEO・SNS・公式LINE・メルマガ・3C分析など､クオリティとスピードの両方を高めたい"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
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

            {/* Risk Box */}
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-gray-800">
              <div className="relative z-10">
                <h3 className="text-xl md:text-3xl font-black text-white mb-12 text-center leading-tight">
                  その課題を放置すると､<br className="md:hidden"/>こんなことに…
                </h3>
                
                <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                  <div className="bg-gray-800/50 p-6 rounded-xl flex items-center gap-5 shadow-lg transform hover:scale-[1.02] transition-transform relative overflow-hidden group">
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-600"></div>
                     <span className="text-orange-600/80 font-black text-4xl leading-none opacity-80 group-hover:opacity-100 transition-opacity">✕</span>
                     <p className="font-bold text-gray-200 text-lg md:text-2xl leading-snug">
                       非効率な集客施策を続けることになり､<br className="md:hidden"/><span className="text-white border-b-2 border-orange-600 pb-1">機会損失が膨らむ</span>
                     </p>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl flex items-center gap-5 shadow-lg transform hover:scale-[1.02] transition-transform relative overflow-hidden group">
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-600"></div>
                     <span className="text-orange-600/80 font-black text-4xl leading-none opacity-80 group-hover:opacity-100 transition-opacity">✕</span>
                     <p className="font-bold text-gray-200 text-lg md:text-2xl leading-snug">
                       集客施策の優先順位を間違えて､<br className="md:hidden"/><span className="text-white border-b-2 border-orange-600 pb-1">ムダなお金と時間を費やす</span>
                     </p>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl flex items-center gap-5 shadow-lg transform hover:scale-[1.02] transition-transform relative overflow-hidden group">
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-600"></div>
                     <span className="text-orange-600/80 font-black text-4xl leading-none opacity-80 group-hover:opacity-100 transition-opacity">✕</span>
                     <p className="font-bold text-gray-200 text-lg md:text-2xl leading-snug">
                       ムダな広告費・外注費が<br className="md:hidden"/><span className="text-white border-b-2 border-orange-600 pb-1">垂れ流しのまま</span>
                     </p>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl flex items-center gap-5 shadow-lg transform hover:scale-[1.02] transition-transform relative overflow-hidden group">
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-600"></div>
                     <span className="text-orange-600/80 font-black text-4xl leading-none opacity-80 group-hover:opacity-100 transition-opacity">✕</span>
                     <p className="font-bold text-gray-200 text-lg md:text-2xl leading-snug">
                       同じ仕事に､競合は2時間､<br className="md:hidden"/><span className="text-white border-b-2 border-orange-600 pb-1">あなたの会社は10時間かかる</span>
                     </p>
                  </div>
                   <div className="bg-gray-800/50 p-6 rounded-xl flex items-center gap-5 shadow-lg transform hover:scale-[1.02] transition-transform relative overflow-hidden group">
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-600"></div>
                     <span className="text-orange-600/80 font-black text-4xl leading-none opacity-80 group-hover:opacity-100 transition-opacity">✕</span>
                     <p className="font-bold text-gray-200 text-lg md:text-2xl leading-snug">
                       競合にお客様をとられ､<br className="md:hidden"/><span className="text-white border-b-2 border-orange-600 pb-1">売上減少が止まらない</span>
                     </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Transition */}
            <div className="text-center mt-20">
                <div className="w-px h-16 bg-gray-300 mx-auto mb-6"></div>
                <p className="text-lg font-bold text-gray-500 mb-4">これらは全て</p>
                <div className="inline-block bg-orange-600 text-white text-3xl md:text-5xl font-black py-4 px-12 rounded-full shadow-xl">
                    AIマーケ研修で解決！
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* AIマーケ研修とは？ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                AIマーケ研修とは？
              </h2>
              <p className="text-orange-600 mt-2 text-xl font-bold">AI×マーケで“売れ続ける仕組み”を再現性高く内製化</p>
            </div>

            <div className="space-y-24">
              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2 relative">
                   <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 border-4 border-white">
                      <Image 
                        src="/ai-marke-training/unique-curriculum.jpg" 
                        alt="AI×マーケティングの実践的な研修カリキュラムのイメージ" 
                        width={800}
                        height={600}
                        className="w-full h-auto" 
                      />
                   </div>
                </div>
                <div className="md:w-1/2">
                  <div className="text-orange-600 font-black text-2xl tracking-widest mb-2 opacity-30">01</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">マーケ・AI両方に強い<br/>唯一無二の内容</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8 border-l-4 border-orange-600 pl-4">
                    コンサル歴10年の知見を凝縮した実践カリキュラム。伴走支援で貴社の課題に合わせて活用できます。
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">✓</div>
                      マーケコンサル歴10年の知見
                    </li>
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">✓</div>
                      「売れる仕組み」が会社の資産として残る
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="md:w-1/2 relative">
                   <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform rotate-1 border-4 border-white">
                      <Image 
                        src="/ai-marke-training/sme-management.jpg" 
                        alt="中小企業の経営者・集客担当者がAI研修を受けている様子" 
                        width={800}
                        height={600}
                        className="w-full h-auto" 
                      />
                   </div>
                </div>
                <div className="md:w-1/2">
                  <div className="text-orange-600 font-black text-2xl tracking-widest mb-2 opacity-30">02</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">中小企業の<br/>経営層・集客担当に最適</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8 border-l-4 border-orange-600 pl-4">
                    専任不在でも回る仕組み作りを重視。忙しい経営者や兼務担当者でも、遠回りせず成果を出せる手法を厳選。
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">✓</div>
                      「本質的な考え方」も身につく
                    </li>
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">✓</div>
                      落とし穴の回避方法も伝授
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2 relative">
                   <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 border-4 border-white">
                      <Image 
                        src="/ai-marke-training/comprehensive-support.jpg" 
                        alt="Web広告・SEO・SNSなど幅広い集客施策に対応するイメージ" 
                        width={800}
                        height={600}
                        className="w-full h-auto" 
                      />
                   </div>
                </div>
                <div className="md:w-1/2">
                  <div className="text-orange-600 font-black text-2xl tracking-widest mb-2 opacity-30">03</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">広告・SEO・SNS等<br/>幅広く対応可</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8 border-l-4 border-orange-600 pl-4">
                    Web広告・SEO・SNS・公式LINE・メルマガ・3C分析など、あらゆる集客施策に対応可能です。
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">✓</div>
                      常に最新版にアップデート
                    </li>
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">✓</div>
                      伴走支援で貴社用に最適化
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

      {/* Support Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                研修後のサポートも充実
              </h2>
              <p className="text-gray-500 mt-4 font-bold">「研修して終わり」ではありません。研修内容を実践できるように無償サポートします。</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {/* Support 1 */}
               <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                  <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-3xl text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-orange-800 leading-tight">“即”使える<br/>プロンプト集</h3>
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    実務に特化したプロンプト（指示文）のテンプレート集をプレゼント。
                  </p>
               </div>

               {/* Support 2 */}
               <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                  <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-3xl text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-orange-800 leading-tight">無制限<br/>チャットサポート</h3>
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    研修後2ヶ月間、質問は無制限。つまずいても即解決できます。
                  </p>
               </div>

               {/* Support 3 */}
               <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                  <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-3xl text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-orange-800 leading-tight">当社代表の<br/>伴走コンサル</h3>
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    研修後2ヶ月間、代表自ら伴走サポートを実施。
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                研修カリキュラム
              </h2>
              <p className="text-gray-500 mt-4">研修カリキュラムは､大まかに以下のとおりです｡</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Part 1 */}
              <div className="relative text-center bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-lg font-black mx-auto mb-4 shadow-md z-10 relative">1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 min-h-[3.5rem] flex items-center justify-center">マーケ・AIの基礎</h3>
                <ul className="text-gray-600 text-sm leading-relaxed text-left list-disc pl-5 inline-block mx-auto w-full">
                  <li>&quot;売れる仕組み&quot;とは？</li>
                  <li>AI活用の基礎知識</li>
                </ul>
              </div>
              
              {/* Part 2 */}
              <div className="relative text-center bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                <div className="w-16 h-16 bg-white text-orange-600 border-2 border-orange-600 rounded-full flex items-center justify-center text-lg font-black mx-auto mb-4 shadow-md z-10 relative">2</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 min-h-[3.5rem] flex items-center justify-center">認知・集客</h3>
                <ul className="text-gray-600 text-sm leading-relaxed text-left list-disc pl-5 inline-block mx-auto w-full">
                  <li>SEO / SNS / Web広告 / 営業</li>
                  <li>その他集客法</li>
                  <li>各施策×AIの実践テクニック</li>
                </ul>
              </div>
              
              {/* Part 3 */}
              <div className="relative text-center bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                <div className="w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center text-lg font-black mx-auto mb-4 shadow-md z-10 relative">3</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 min-h-[3.5rem] flex items-center justify-center">売れるWebサイト</h3>
                <ul className="text-gray-600 text-sm leading-relaxed text-left list-disc pl-5 inline-block mx-auto w-full">
                  <li>Webサイト・LP</li>
                  <li>3C分析</li>
                  <li>各施策×AIの実践テクニック</li>
                </ul>
              </div>

              {/* Part 4 */}
              <div className="relative text-center bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                <div className="w-16 h-16 bg-white text-gray-700 border-2 border-gray-700 rounded-full flex items-center justify-center text-lg font-black mx-auto mb-4 shadow-md z-10 relative">4</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 min-h-[3.5rem] flex items-center justify-center">関係構築・応用編</h3>
                <ul className="text-gray-600 text-sm leading-relaxed text-left list-disc pl-5 inline-block mx-auto w-full">
                  <li>メルマガ・公式LINE</li>
                  <li>売れる仕組みの維持・改善</li>
                  <li>各施策×AIの実践テクニック</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">受講料</h2>
            </div>

            <div className="max-w-lg mx-auto relative">
              
              {/* Main Pricing Card */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative z-10">
                {/* Header & Price */}
                <div className="bg-gradient-to-br from-orange-600 to-gray-900 text-white p-10 text-center relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                   <h3 className="text-2xl font-bold mb-6 relative z-10">AIマーケ研修</h3>
                   <div className="flex items-baseline justify-center gap-1 relative z-10">
                     <span className="text-6xl font-black tracking-tight">40</span>
                     <span className="text-2xl font-bold">万円</span>
                     <span className="text-sm font-medium text-orange-100">/人（税別）</span>
                   </div>
                   <p className="mt-2 text-orange-200 text-sm font-bold">約12時間の研修プログラム</p>
                </div>
                
                {/* Features */}
                <div className="p-8 border-b border-gray-100">
                   <p className="text-center font-bold text-gray-700">実務で即使えるプロンプト集付き</p>
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
                   className="inline-flex items-center justify-center w-full bg-orange-600 text-white font-bold py-4 rounded-xl hover:bg-orange-700 transition-all shadow-lg text-lg group"
                >
                  まずは無料相談を申し込む
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                   </svg>
                </Link>
                 <div className="text-center mt-4">
                   <p className="text-sm font-bold text-orange-600 mb-1">助成金活用のご相談も</p>
                   <p className="text-[10px] text-gray-400">制度活用で費用を軽減できる可能性があります</p>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Simulation (Story Flow) - High End Design */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none" 
             style={{ background: 'radial-gradient(circle at center top, #fb923c 0%, transparent 60%)' }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              絶対に<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-500">損させません</span>
            </h2>
            <p className="text-gray-300 font-medium text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              「コスト削減」と「売上UP」の両輪で、<br className="hidden md:block"/>
              ほぼ確実に<span className="text-white border-b border-orange-500 pb-1">投資回収できる設計</span>です。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
              
              {/* Step 1: Cost Reduction */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden relative z-30">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                      <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">1</span>
                      <h3 className="font-bold text-gray-800 text-lg md:text-xl">まずは、外注費・人件費が劇的に減ります</h3>
                  </div>
                  <div className="p-6 md:p-10">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                          <div className="w-full md:w-2/3 space-y-6">
                              {/* Before Bar */}
                              <div className="relative">
                                  <div className="flex justify-between text-sm font-bold text-gray-500 mb-1">
                                      <span>Before (外注・人手)</span>
                                      <span>30万円/月</span>
                                  </div>
                                  <div className="h-10 bg-gray-300 rounded-full w-full relative overflow-hidden flex items-center">
                                      <span className="text-gray-800 font-bold text-xs px-4 relative z-10">記事制作・広告運用代行など</span>
                                  </div>
                              </div>
                              {/* After Bar */}
                              <div className="relative">
                                  <div className="flex justify-between text-sm font-bold text-orange-600 mb-1">
                                      <span>After (AI内製化)</span>
                                      <span>1/3以下</span>
                                  </div>
                                  <div className="h-10 bg-orange-50 rounded-full w-full relative overflow-hidden border border-orange-100 flex items-center">
                                      <div className="h-full bg-orange-500 w-[30%] absolute left-0 top-0 shadow-sm"></div>
                                      <span className="text-white font-bold text-xs px-4 relative z-10 drop-shadow-md">AIで社内完結</span>
                                  </div>
                              </div>
                          </div>
                          <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-orange-600 border-l-0 md:border-l-2 border-gray-100 md:pl-8 pt-4 md:pt-0">
                               <p className="font-bold text-lg mb-1">外注コスト</p>
                               <div className="flex items-baseline justify-center mb-2">
                                 <span className="text-5xl md:text-6xl font-black tracking-tighter leading-none">1/3</span>
                                 <span className="text-xl font-bold ml-1">以下</span>
                               </div>
                               <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">大幅削減</span>
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

              {/* Step 2: Sales UP */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden relative z-20">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                      <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">2</span>
                      <h3 className="font-bold text-gray-800 text-lg md:text-xl">浮いた予算と時間で、売上を最大化</h3>
                  </div>
                  <div className="p-6 md:p-10 text-center">
                      <p className="text-gray-600 font-bold mb-6 text-sm md:text-base">
                          コストが下がった分、<span className="text-orange-600 border-b-2 border-orange-400">「攻めの施策」</span>にリソースを集中できます
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center max-w-3xl mx-auto">
                           {/* Element 1 */}
                           <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col items-center">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                   </svg>
                                </div>
                                <span className="font-bold text-gray-800">予算の再投資</span>
                                <span className="text-xs text-gray-500 mt-1">浮いた分を広告費へ</span>
                           </div>
                           
                           {/* X Icon */}
                           <div className="text-gray-300 font-bold text-xl">×</div>
                           
                           {/* Element 2 */}
                           <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col items-center">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                   </svg>
                                </div>
                                <span className="font-bold text-gray-800">スピードUP</span>
                                <span className="text-xs text-gray-500 mt-1">AIで施策を量産</span>
                           </div>
                      </div>

                      <div className="mt-8 flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-orange-600 animate-bounce">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                          </svg>
                      </div>

                      <div className="mt-2 flex items-center justify-center gap-4">
                          <div className="text-orange-600 font-black text-3xl md:text-5xl border-b-4 border-orange-600 leading-tight">
                              売上・利益の最大化
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

              {/* Step 3: ROI & Asset */}
              <div className="bg-white rounded-3xl shadow-xl border-2 border-orange-200 overflow-hidden relative z-10">
                   {/* Background Effect */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full filter blur-3xl opacity-20 -z-0"></div>

                  <div className="bg-orange-50 px-6 py-4 border-b border-orange-100 flex items-center gap-3 relative z-10">
                      <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">3</span>
                      <h3 className="font-bold text-gray-800 text-lg md:text-xl">だから、研修費を払っても“お釣り”が来ます</h3>
                  </div>
                  <div className="p-6 md:p-10 relative z-10">
                      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                          
                          {/* Investment */}
                          <div className="text-center w-full md:w-auto">
                              <p className="text-gray-500 font-bold mb-2 text-sm">投資コスト</p>
                              <div className="bg-gray-100 text-gray-500 rounded-2xl p-6 border-2 border-gray-200 w-full md:w-48 h-40 flex flex-col items-center justify-center">
                                  <p className="text-xs font-bold mb-1">研修費</p>
                                  <p className="text-2xl font-black">40<span className="text-sm">万/人</span></p>
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
                                       <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-1 border border-white/40">コスト削減＋売上UP</span>
                                       <p className="text-3xl md:text-4xl font-black tracking-tight">数百<span className="text-lg">万〜</span></p>
                                   </div>
                                   {/* Bottom Part: Asset */}
                                   <div className="bg-orange-100 h-24 flex flex-col items-center justify-center border-t-2 border-dashed border-orange-300 text-orange-800 px-4">
                                       <p className="text-[10px] font-bold mb-1">さらに…</p>
                                       <p className="text-sm font-bold opacity-90 leading-tight">「売れる仕組み」が<br/>会社の資産として残る</p>
                                   </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="mt-10 text-center">
                          <p className="text-lg md:text-2xl text-gray-800 font-bold leading-relaxed">
                              単なるコストではありません。<br/>
                              <span className="text-orange-600 text-2xl md:text-3xl border-b-4 border-orange-400">御社の将来への「投資」</span>です。
                          </p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
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
                    <div className="aspect-video w-full overflow-hidden rounded-xl border border-gray-100">
                       <img 
                         src={item.src} 
                         alt={item.label} 
                         className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                       />
                       {/* Category Badge */}
                       <div className="absolute top-2 left-2">
                          <span className={`text-[10px] font-bold px-2 py-1 rounded-full text-white ${
                            item.cat === 'AI' ? 'bg-blue-600' : 
                            item.cat === 'マーケティング' ? 'bg-orange-500' : 
                            'bg-red-600'
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
                 <div key={i} className="bg-orange-50 p-6 rounded-2xl border border-orange-100 shadow-sm relative flex flex-col">
                    <div className="text-4xl text-orange-200 absolute top-4 right-4">”</div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded">{review.job}</span>
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
                当社が選ばれる理由
              </h2>
              
              <div className="mt-8 bg-orange-50 border-2 border-orange-100 rounded-2xl p-6 inline-block max-w-3xl shadow-sm">
                <p className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  AIとマーケティング、<span className="text-orange-600">両方の実務に精通した会社</span>は希少です。
                </p>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  特定の施策（広告のみ等）ではなく、集客全体を横断的にカバーできる<br className="hidden md:block"/>
                  <span className="font-bold border-b-2 border-orange-400">「唯一無二の実践知見」</span>を提供します。
                </p>
              </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-200 px-1 pb-1 pt-4">
                <table className="w-full text-sm md:text-base border-collapse min-w-[700px]">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="p-4 md:p-5 font-bold text-center w-[20%]"></th>
                            <th className="p-4 md:p-5 font-bold text-center bg-orange-600 text-lg md:text-xl w-[26%] relative">
                                当社
                            </th>
                            <th className="p-4 md:p-5 font-bold text-center w-[18%]">大手AI研修</th>
                            <th className="p-4 md:p-5 font-bold text-center w-[18%]">マーケスクール</th>
                            <th className="p-4 md:p-5 font-bold text-center w-[18%]">格安動画教材</th>
                        </tr>
                    </thead>
                    <tbody className="text-center divide-y divide-gray-200">
                        {[
                            { label: "得意な企業規模", data: ["中小企業\n(10〜150名)", "大手・中堅企業", "個人・フリーランス\n小規模事業者", "全規模"] },
                            { label: "受講形式", data: ["動画受講", "動画受講", "動画受講・\nリアルタイム", "動画受講"] },
                            { label: "AI×マーケの知見", data: ["◎\n統合ノウハウ", "△\nAI操作が中心", "△\nマーケ理論が中心", "△\n一般論のみ"] },
                            { label: "内製化・仕組み化", data: ["◎\n組織に残る資産に", "◯\n個人のスキルUP", "◯\n個人のスキルUP", "△\n知識習得"] },
                            { label: "兼務・少人数体制", data: ["◎\n効率化を前提に設計", "△\n専任担当向け", "△\n作業量が多い", "ー"] },
                            { label: "講師・伴走", data: ["実務家(代表)が伴走", "一般講師・チャット", "動画のみ・質問不可", "動画のみ"] },
                            { label: "費用の考え方", data: ["投資\n(組織の資産)", "経費\n(属人的な知識)", "経費\n(属人的な知識)", "経費\n(情報収集)"] },
                            { label: "料金", data: ["40万円/人", "30〜50万円/人", "50〜100万円/人", "1〜3万円/人"] }
                        ].map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <th className="p-3 md:p-4 text-left font-bold text-gray-700 bg-gray-100 whitespace-pre-wrap">{row.label}</th>
                                <td className="p-3 md:p-4 font-bold text-orange-600 bg-orange-50 text-base md:text-lg whitespace-pre-wrap border-x-2 border-orange-600">{row.data[0]}</td>
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
                <p className="text-xl md:text-2xl font-bold text-orange-600 leading-relaxed">
                    「AI×マーケ」の統合知見があるからこそ、<br className="hidden md:block"/>
                    遠回りせず<span className="text-gray-900 border-b-2 border-orange-400 mx-1">会社の資産となる「売れる仕組み」</span>を構築できます。
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultant Profile */}
      <section className="py-24 bg-white">
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
                  src="/ai-marke-training/representative.jpg" 
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
                    ベンチャー・スタートアップから大手企業(Yahoo! JAPAN)まで会社員を4年経験。<br/>
                    2016年に独立して以降、マーケターとして新規事業立ち上げ・既存事業の売上改善をサポート。<br/>
                    2024年、AIの影響力を目の当たりにしたことで、AI領域に注力。
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
                            <span className="text-orange-600 font-bold">●</span>
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
                <div className="pt-8 px-8 pb-8 md:px-12 md:pb-12 bg-gradient-to-b from-white to-orange-50 hover:to-orange-100 transition-colors duration-300 rounded-b-3xl border-t border-gray-200 text-center group">
                  <p className="font-bold text-gray-800 text-lg mb-2">この事業にかける想い</p>
                  <div className="inline-flex items-center gap-2 text-orange-600 font-bold border-b border-orange-600 pb-0.5">
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
      <section className="py-24 bg-gray-50">
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
                  a: "はい、基本カリキュラムでChatGPT・Gemini・Claudeを扱います。NotebookLMやGensparkなどの他ツールは、研修後の伴走サポートにてレクチャー可能です。"
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
                    <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">Q</div>
                    <h3 className="text-lg font-bold text-gray-900 pt-1.5 whitespace-pre-wrap leading-snug">{item.q}</h3>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0 font-bold text-lg">A</div>
                    <div className="pt-1.5">
                        <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{item.a}</p>
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
            兼務でも､集客最大化
          </h2>
          <p className="text-gray-300 mb-12 max-w-xl mx-auto text-lg">
            無理な勧誘は一切ございませんので、ご安心ください。
          </p>
          
          <div className="flex flex-col items-center gap-2">
             <Link 
                href="https://general-cg.com/contact/" 
                className="inline-flex items-center justify-center bg-orange-600 text-white font-bold py-5 px-16 rounded-full hover:bg-white hover:text-orange-600 transition-all shadow-2xl hover:shadow-white/20 text-xl group"
              >
                <span>AIマーケ研修の話を聞く</span>
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
