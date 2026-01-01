import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AIマーケ顧問｜月額3万円のAI活用・マーケティング支援｜ジェネラルコンサルティンググループ',
  description: '月額3万円の「AIマーケ顧問」。AI活用とマーケティング支援のプロが、貴社の売上アップとコスト削減を伴走支援します。チャット相談し放題、定例ミーティング付き。',
};

export default function ConsultingPage() {
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
                "name": "AIマーケ顧問",
                "provider": {
                  "@type": "Organization",
                  "name": "ジェネラルコンサルティンググループ株式会社",
                  "founder": "槙 優真"
                },
                "description": "AI活用とマーケティング支援を月額3万円で提供する顧問サービス。",
                "offers": {
                  "@type": "Offer",
                  "price": "30000",
                  "priceCurrency": "JPY",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "30000",
                    "priceCurrency": "JPY",
                    "referenceQuantity": {
                      "@type": "QuantitativeValue",
                      "value": "1",
                      "unitCode": "MON"
                    }
                  }
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "マーケティング関係ない､AI全般の相談もできますか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "はい､もちろんです｡AI活用に関することは､何でも気軽にご相談ください｡"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "AI関係なしに､集客・マーケティングの相談もできますか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "はい､もちろんです｡集客・マーケティングに関することは､何でも気軽にご相談ください｡"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "料金はどれくらいですか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "月額3万円です｡個別見積にて､貴社マーケ幹部として全面サポートすることも可能です｡"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "初期費用は発生しますか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "発生しません｡初期費用はゼロ円です｡"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "最低契約期間はどれくらいですか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "1ヶ月からお試し契約いただけます｡"
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
                    "name": "AIマーケ顧問",
                    "item": "https://general-consulting.co.jp/consulting"
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "AIマーケ顧問のご利用の流れ",
                "step": [
                  {
                    "@type": "HowToStep",
                    "name": "無料相談",
                    "text": "課題をお聞かせください。その場で具体的なアドバイスを実施します。"
                  },
                  {
                    "@type": "HowToStep",
                    "name": "ご契約",
                    "text": "双方合意なら電子契約。初期費用ゼロ・1ヶ月更新で、リスクなく開始できます。"
                  },
                  {
                    "@type": "HowToStep",
                    "name": "顧問スタート",
                    "text": "月1回のZoomと、チャット等での随時相談がスタートします。"
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
                  <div className="inline-block bg-brand-red/10 text-brand-red font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-brand-red/20">
                    中小企業経営者・AI/マーケ担当の方へ
                  </div>
                  <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.2] tracking-tight">
                    <span className="text-brand-red">圧倒的な投資対効果</span>
                  </p>
                  <div className="flex items-center gap-4 mb-8">
                      <div className="h-px bg-gray-300 w-12"></div>
                      <h1 className="text-lg font-bold text-gray-400 tracking-widest">AIマーケ顧問</h1>
                      <div className="h-px bg-gray-300 w-12"></div>
                  </div>
                  <p className="text-xl md:text-3xl text-gray-800 mb-10 leading-relaxed font-bold border-l-4 border-brand-red pl-6">
                    やることは減り､成果は最大化
                  </p>
                  
                  {/* 3つの訴求ポイント - Sophisticated Design */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-10 max-w-2xl">
                    {[
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        ),
                        main: "オンライン相談",
                        sub: "毎月1回"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                          </svg>
                        ),
                        main: "チャット相談",
                        sub: "いつでもOK"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 01-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 5.472m0 0a6.002 6.002 0 01-5.153-6.447c.225-.926 1.078-1.55 2.03-1.414.906.13 1.84.226 2.787.226 3.615 0 7.025-1.486 9.47-3.866" />
                          </svg>
                        ),
                        main: "プロ人材紹介",
                        sub: "仲介手数料 0円"
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex-1 bg-white/80 backdrop-blur-sm border-l-4 border-brand-red py-3 px-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 text-gray-900 font-bold text-lg leading-tight mb-1">
                          <span className="text-brand-red">{item.icon}</span>
                          {item.main}
                        </div>
                        <div className="text-gray-500 font-bold text-xs pl-7">
                          {item.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 font-medium text-sm md:text-base mb-10 flex items-center gap-2">
                    月額3万円・初期費用ゼロ。1ヶ月からお試し可能
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
                      <Link 
                        href="https://general-cg.com/contact/" 
                        className="inline-flex items-center justify-center w-full sm:w-auto bg-brand-red text-white font-bold py-4 px-12 rounded-full hover:bg-red-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg group"
                      >
                        無料相談を申し込む
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </Link>
                      <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">※無理な勧誘は一切いたしません</p>
                        <p className="text-[10px] text-gray-400">フォーム入力は1分で完了します</p>
                      </div>
                    </div>
                  </div>
            </div>
            
            {/* Image */}
            <div className="hidden md:block w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white mx-auto max-w-sm md:max-w-none">
                <Image 
                  src="/consulting/representative.jpg" 
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
                src="/consulting/representative.jpg" 
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

      {/* Pain Points Section - High Impact Design */}
      <section className="py-24 bg-brand-red/5 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C50E1D 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                こんな<span className="text-brand-red mx-2">課題</span>ありませんか？
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Sales Challenges */}
              <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-brand-red shadow-xl transform md:rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-red-50">
                   <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-brand-red">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                     </svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900">売上UPの課題</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "AIを活用して集客を効率化したい",
                    "とにかく売上・利益を増やしたい",
                    "広告費・外注費の無駄を削減したい",
                    "マーケティング・集客に詳しいスタッフがいない"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-bold text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Challenges - Revert to White for Contrast */}
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
                    "社内のAIスキルを高めたい",
                    "採用難をAIで解決したい",
                    "何をどう進めれば良いか分からない",
                    "DX推進のリーダーがいない"
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
                  その課題を放置すると､<br className="md:hidden"/>企業存続の<span className="text-red-500 text-3xl md:text-5xl underline decoration-4 decoration-red-900 underline-offset-8 mx-2">リスク</span>に…
                </h3>
                
                <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                  <div className="bg-gray-800/50 p-6 rounded-xl flex items-center gap-5 shadow-lg transform hover:scale-[1.02] transition-transform relative overflow-hidden group">
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600"></div>
                     <span className="text-red-600/80 font-black text-4xl leading-none opacity-80 group-hover:opacity-100 transition-opacity">✕</span>
                     <p className="font-bold text-gray-200 text-lg md:text-2xl leading-snug">
                       競合にお客様をとられ､<br className="md:hidden"/><span className="text-white border-b-2 border-red-600 pb-1">売上減少が止まらない</span>
                     </p>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl flex items-center gap-5 shadow-lg transform hover:scale-[1.02] transition-transform relative overflow-hidden group">
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600"></div>
                     <span className="text-red-600/80 font-black text-4xl leading-none opacity-80 group-hover:opacity-100 transition-opacity">✕</span>
                     <p className="font-bold text-gray-200 text-lg md:text-2xl leading-snug">
                       ムダな広告費・外注費が<br className="md:hidden"/><span className="text-white border-b-2 border-red-600 pb-1">垂れ流しのまま</span>
                     </p>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl flex items-center gap-5 shadow-lg transform hover:scale-[1.02] transition-transform relative overflow-hidden group">
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600"></div>
                     <span className="text-red-600/80 font-black text-4xl leading-none opacity-80 group-hover:opacity-100 transition-opacity">✕</span>
                     <p className="font-bold text-gray-200 text-lg md:text-2xl leading-snug">
                       同じ仕事に､競合は2時間､<br className="md:hidden"/><span className="text-white border-b-2 border-red-600 pb-1">あなたは10時間かかる</span>
                     </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Transition */}
            <div className="text-center mt-20">
                <div className="w-px h-16 bg-gray-300 mx-auto mb-6"></div>
                <p className="text-lg font-bold text-gray-500 mb-4">これらは全て</p>
                <div className="inline-block bg-brand-red text-white text-3xl md:text-5xl font-black py-4 px-12 rounded-full shadow-xl">
                    AIマーケ顧問で解決！
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* What is AI Marketing Advisor? - Graphic Representation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">AIマーケ顧問とは？</h2>
              <p className="text-gray-500 mt-2 text-sm font-bold">AI活用と<br className="md:hidden" />マーケティング支援の融合</p>
            </div>

            {/* Concept Diagram - Simplified & Benefit-Oriented */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-20">
               <div className="bg-gray-50 w-64 h-64 rounded-full flex flex-col items-center justify-center shadow-sm border border-gray-100 relative z-10">
                  <span className="text-3xl font-black text-gray-900 mb-2">AI活用</span>
                  <span className="text-sm font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">生産性UP・コスト削減</span>
               </div>
               <div className="text-4xl font-black text-gray-300">×</div>
               <div className="bg-gray-50 w-64 h-64 rounded-full flex flex-col items-center justify-center shadow-sm border border-gray-100 relative z-10">
                  <span className="text-3xl font-black text-brand-red mb-2">マーケティング</span>
                  <span className="text-sm font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">売上UP・集客強化</span>
               </div>
               <div className="hidden md:block text-4xl font-black text-gray-300">=</div>
               <div className="bg-gradient-to-br from-brand-red to-red-700 w-72 h-72 rounded-full flex flex-col items-center justify-center shadow-2xl text-white relative z-20 transform scale-110 border-4 border-white">
                  <span className="text-4xl font-black text-center leading-tight">
                    利益<br/>最大化
                  </span>
               </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 md:p-14 border border-red-100 shadow-inner max-w-5xl mx-auto relative overflow-hidden">
               {/* Pattern Background */}
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C50E1D 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
               
               <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-10 text-center relative z-10">
                 なぜ、圧倒的な<br className="md:hidden" />投資対効果が出るのか？
               </h3>
               <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-3">
                       <div className="w-12 h-12 rounded-full bg-red-100 text-brand-red flex items-center justify-center font-black text-xl flex-shrink-0">1</div>
                       <h4 className="font-bold text-brand-red text-xl border-b-2 border-red-100 pb-1">「全体最適」と「部分最適」</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-medium">戦略（全体）と、広告・SEOなどの戦術（部分）。両方に精通しているからこそ、最短距離で成果に繋げます。</p>
                 </div>
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-3">
                       <div className="w-12 h-12 rounded-full bg-red-100 text-brand-red flex items-center justify-center font-black text-xl flex-shrink-0">2</div>
                       <h4 className="font-bold text-brand-red text-xl border-b-2 border-red-100 pb-1">AIによる圧倒的な効率化</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-medium">人手のかかる作業をAIで自動化。コストを劇的に下げながら、スピードと質を同時に向上させます。</p>
                 </div>
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-3">
                       <div className="w-12 h-12 rounded-full bg-red-100 text-brand-red flex items-center justify-center font-black text-xl flex-shrink-0">3</div>
                       <h4 className="font-bold text-brand-red text-xl border-b-2 border-red-100 pb-1">オーダーメイドの伴走支援</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-medium">毎月のミーティングで方針を整理し、日々の実行支援はチャットで柔軟にサポート。いつでも相談可能です。</p>
                 </div>
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-3">
                       <div className="w-12 h-12 rounded-full bg-red-100 text-brand-red flex items-center justify-center font-black text-xl flex-shrink-0">4</div>
                       <h4 className="font-bold text-brand-red text-xl border-b-2 border-red-100 pb-1">固定費最小の低コスト構造</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-medium">当社自身が固定費を極限まで抑えているため、大手と同等以上の質を、1/10以下の価格で提供可能です。</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                主なサービス内容
              </h2>
            </div>

            <div className="space-y-24">
              {/* Item 1: Meeting */}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2 relative">
                   <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 border-4 border-white">
                      <Image 
                        src="/consulting/service-meeting.jpg" 
                        alt="Zoom等を使用した月1回のオンラインコンサルティング風景" 
                        width={800}
                        height={600}
                        className="w-full h-auto" 
                      />
                   </div>
                   <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                      <p className="font-bold text-gray-900 flex items-center gap-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                        Zoom / Meet 対応
                      </p>
                   </div>
                </div>
                <div className="md:w-1/2">
                  <div className="text-brand-red font-black text-2xl tracking-widest mb-2 opacity-30">01</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">月1回の<br className="md:hidden" />オンライン通話相談</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8 border-l-4 border-brand-red pl-4">
                    AI活用・マーケティングについて、現状の課題整理から具体的な施策提案まで、マンツーマンでご相談いただけます。
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center">✓</div>
                      複数名での参加もOK
                    </li>
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center">✓</div>
                      広告代理店等との定例会への同席も可能
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 2: Chat */}
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="md:w-1/2 relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl min-h-[300px] flex flex-col justify-center transform rotate-1">
                   {/* Chat UI Mockup */}
                   <div className="space-y-4 max-w-sm mx-auto w-full">
                      <div className="flex gap-3">
                         <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                         <div className="bg-gray-100 p-4 rounded-r-2xl rounded-bl-2xl text-sm text-gray-700 font-medium">
                            AIツールの導入で迷っています。<br/>おすすめはありますか？
                         </div>
                      </div>
                      <div className="flex gap-3 flex-row-reverse">
                         <div className="w-10 h-10 rounded-full bg-brand-red flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">弊</div>
                         <div className="bg-red-50 p-4 rounded-l-2xl rounded-br-2xl text-sm text-gray-800 font-medium">
                            貴社の業務フローであれば、まずは「ChatGPT Teamプラン」が最適です。<br/>導入手順書をお送りしますね！
                         </div>
                      </div>
                      <div className="flex gap-3">
                         <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                         <div className="bg-gray-100 p-4 rounded-r-2xl rounded-bl-2xl text-sm text-gray-700 font-medium">
                            ありがとうございます！<br/>助かります！
                         </div>
                      </div>
                   </div>
                </div>
                <div className="md:w-1/2">
                  <div className="text-brand-red font-black text-2xl tracking-widest mb-2 opacity-30">02</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">チャットサポート<br className="md:hidden" />（無制限）</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8 border-l-4 border-brand-red pl-4">
                    日々の業務で発生した「困りごと」や「緊急のトラブル」も、チャットで即座に相談・解決できます。
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center">✓</div>
                      回数無制限で相談し放題
                    </li>
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center">✓</div>
                      グループチャット作成OK（社員様も参加可能）
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 3: Expert Introduction */}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2 relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                     <Image 
                       src="/consulting/service-expert.jpg" 
                       alt="提携する各分野の専門プロフェッショナル紹介イメージ" 
                       width={800}
                       height={600}
                       className="w-full h-auto object-cover" 
                     />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="text-brand-red font-black text-2xl tracking-widest mb-2 opacity-30">03</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">専門家の紹介・連携</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8 border-l-4 border-brand-red pl-4">
                    当社で対応できない専門的な業務が発生した場合、信頼できるプロフェッショナルを無料でご紹介します。
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center">✓</div>
                      紹介料・仲介手数料は0円
                    </li>
                    <li className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center">✓</div>
                      実力・信頼のあるパートナーのみを厳選
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                ご利用の流れ
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative text-center">
                <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg z-10 relative">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">無料相談</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  課題をお聞かせください。<br/>
                  その場で具体的なアドバイスを<br/>実施します。
                </p>
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
              </div>
              
              {/* Step 2 */}
              <div className="relative text-center">
                <div className="w-16 h-16 bg-white text-brand-red border-2 border-brand-red rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg z-10 relative">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ご契約</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  双方合意なら電子契約。<br/>
                  初期費用ゼロ・1ヶ月更新で、<br/>リスクなく開始できます。
                </p>
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
              </div>
              
              {/* Step 3 */}
              <div className="relative text-center">
                <div className="w-16 h-16 bg-white text-gray-900 border-2 border-gray-200 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg z-10 relative">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">顧問スタート</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  月1回のZoomと、<br/>
                  チャット等での随時相談が<br/>
                  スタートします。
                </p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">料金プラン</h2>
                   </div>

            <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
              {/* Header & Price */}
              <div className="bg-gradient-to-br from-brand-red to-gray-900 text-white p-10 text-center relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                 <h3 className="text-2xl font-bold mb-6 relative z-10">AIマーケ顧問</h3>
                 <div className="flex items-baseline justify-center gap-1 relative z-10">
                   <span className="text-lg font-medium text-red-100">月額</span>
                   <span className="text-6xl font-black tracking-tight">3</span>
                   <span className="text-2xl font-bold">万円</span>
                   <span className="text-sm font-medium text-red-100">（税別）</span>
                   </div>
                 <p className="text-sm text-red-100 mt-4 font-medium relative z-10">初期費用 0円 ｜ 最低契約期間 1ヶ月〜</p>
                </div>
              
              {/* Features */}
              <div className="p-8 md:p-10">
                 <ul className="space-y-5 mb-10">
                   <li className="flex items-center gap-4 text-gray-800 font-bold text-lg border-b border-gray-100 pb-4">
                     <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                     </span>
                     月1回のオンライン相談
                   </li>
                   <li className="flex items-center gap-4 text-gray-800 font-bold text-lg border-b border-gray-100 pb-4">
                     <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                     </span>
                     チャットサポート（無制限）
                   </li>
                   <li className="flex items-center gap-4 text-gray-800 font-bold text-lg border-b border-gray-100 pb-4">
                     <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                     </span>
                     専門家の紹介・連携
                   </li>
                 </ul>

                <Link 
                  href="https://general-cg.com/contact/" 
                   className="inline-flex items-center justify-center w-full bg-brand-red text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all shadow-lg text-lg group"
                >
                  まずは無料相談を申し込む
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                   </svg>
                </Link>
                 <div className="text-center mt-4">
                   <p className="text-xs text-gray-400 mb-1">※ご状況に合わせた個別見積もりも可能です</p>
                   <p className="text-[10px] text-gray-300">フォーム入力は1分で完了します</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Consultations */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            こんなご相談を<br className="md:hidden" />よくいただきます
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              "もっと売上を増やすには､どうすれば良い？",
              "Google広告の費用対効果を改善したい",
              "広告費・外注費の無駄があると感じていて､出血を食い止めたい",
              "AIを使いこなせるよう､アドバイスしてほしい",
              "既存事業の売上が下がっており､原因特定と対策を進めたい",
              "何から手をつければ良いか､分からない"
            ].map((text, i) => (
              <div key={i} className="bg-white p-5 md:p-6 rounded-2xl shadow-md border-2 border-red-50 flex items-start gap-4 transform hover:-translate-y-1 transition-transform duration-300 group">
                 <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                   </svg>
                 </div>
                 <p className="font-bold text-gray-800 text-lg pt-0.5 leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies (No Link) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                 豊富な支援実績
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

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Stripe Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                AIマーケ顧問が<br className="md:hidden" />選ばれる理由
              </h2>
            </div>

            {/* 1. Comparison with Agencies */}
            <div className="mb-24">
               <div className="flex items-center gap-4 mb-6">
                 <span className="bg-brand-red text-white font-bold px-4 py-1 rounded-full text-lg">01</span>
                 <h3 className="text-2xl font-bold text-gray-900">広告代理店との違い</h3>
               </div>
               
               <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-200">
                 <table className="w-full text-left border-collapse min-w-[700px]">
                   <thead>
                     <tr className="bg-gray-100 text-gray-700">
                       <th className="p-5 w-1/5 font-bold text-center"></th>
                       <th className="p-5 w-2/5 font-bold text-center text-brand-red text-xl bg-red-50 border-t-4 border-brand-red">当社（AIマーケ顧問）</th>
                       <th className="p-5 w-2/5 font-bold text-center">一般的な広告代理店</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr className="border-b border-gray-100">
                       <th className="p-5 font-bold text-gray-700 bg-gray-50 text-center">役割</th>
                       <td className="p-5 font-bold text-gray-900 bg-red-50/30 text-center text-lg">
                         顧問・マーケ幹部
                         <span className="block text-xs font-normal text-gray-500 mt-1">（全体最適）</span>
                       </td>
                       <td className="p-5 text-gray-600 text-center">
                         広告・SEO等の専任スタッフ
                         <span className="block text-xs font-normal text-gray-400 mt-1">（部分最適）</span>
                       </td>
                     </tr>
                     <tr className="border-b border-gray-100">
                       <th className="p-5 font-bold text-gray-700 bg-gray-50 text-center">得意領域</th>
                       <td className="p-5 font-bold text-gray-900 bg-red-50/30 text-center">集客全体を横断的に見た施策実行</td>
                       <td className="p-5 text-gray-600 text-center">「広告運用のみ」「SEOのみ」など</td>
                     </tr>
                     <tr className="border-b border-gray-100">
                       <th className="p-5 font-bold text-gray-700 bg-gray-50 text-center">メリット</th>
                       <td className="p-5 text-gray-900 bg-red-50/30 font-medium text-sm md:text-base">
                         インパクトの大きい箇所を特定し、優先的に改善できる
                       </td>
                       <td className="p-5 text-gray-600 text-sm md:text-base">
                         特定の施策に関しては深いノウハウがある
                       </td>
                     </tr>
                     <tr>
                       <th className="p-5 font-bold text-gray-700 bg-gray-50 text-center">デメリット</th>
                       <td className="p-5 text-gray-500 bg-red-50/30 text-sm">
                         特定の施策に限定した深いノウハウは、代理店に劣る場合もある
                       </td>
                       <td className="p-5 text-gray-500 text-sm">
                         特定の施策以外は、対応できない
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
            </div>

            {/* 2. Comparison with Consulting Firms */}
            <div>
               <div className="flex items-center gap-4 mb-6">
                 <span className="bg-brand-red text-white font-bold px-4 py-1 rounded-full text-lg">02</span>
                 <h3 className="text-2xl font-bold text-gray-900">他のコンサル会社との違い</h3>
               </div>

               <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-200">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                     <tr className="bg-gray-100 text-gray-700">
                       <th className="p-5 w-1/6 font-bold text-center"></th>
                       <th className="p-5 w-2/6 font-bold text-center text-brand-red text-xl bg-red-50 border-t-4 border-brand-red">当社</th>
                       <th className="p-5 w-1.5/6 font-bold text-center">大手コンサル</th>
                       <th className="p-5 w-1.5/6 font-bold text-center">格安・個人コンサル</th>
                  </tr>
                </thead>
                   <tbody>
                     <tr className="border-b border-gray-100">
                       <th className="p-5 font-bold text-gray-700 bg-gray-50 text-center text-sm">AI活用・<br/>最新ノウハウ</th>
                       <td className="p-5 font-bold text-brand-red bg-red-50/30 text-center text-lg">
                         ◎（強み）
                         <span className="block text-xs font-normal text-gray-600 mt-1">自社でフル活用､AIツール開発も</span>
                       </td>
                       <td className="p-5 text-gray-600 text-center">
                         △〜○
                         <span className="block text-xs font-normal text-gray-400 mt-1">組織としては取り組むが遅い</span>
                       </td>
                       <td className="p-5 text-gray-600 text-center">
                         ×〜△
                         <span className="block text-xs font-normal text-gray-400 mt-1">AIまたは実務に疎い場合が多い</span>
                       </td>
                  </tr>
                     <tr className="border-b border-gray-100">
                       <th className="p-5 font-bold text-gray-700 bg-gray-50 text-center text-sm">担当者の質</th>
                       <td className="p-5 font-bold text-gray-900 bg-red-50/30 text-center">
                         当社代表
                         <span className="block text-xs font-normal text-gray-600 mt-1">AI×マーケティングの最前線で活躍</span>
                       </td>
                       <td className="p-5 text-gray-600 text-center">
                         若手・新人
                         <span className="block text-xs font-normal text-gray-400 mt-1">優秀な層は大企業案件にアサインされがち</span>
                       </td>
                       <td className="p-5 text-gray-600 text-center">
                         玉石混交
                         <span className="block text-xs font-normal text-gray-400 mt-1">実務経験が浅い人も多い</span>
                       </td>
                  </tr>
                     <tr className="border-b border-gray-100">
                       <th className="p-5 font-bold text-gray-700 bg-gray-50 text-center text-sm">支援スタイル</th>
                       <td className="p-5 font-bold text-gray-900 bg-red-50/30 text-center">
                         オーダーメイド
                         <span className="block text-xs font-normal text-gray-600 mt-1">「実務」と「戦略」の両輪</span>
                       </td>
                       <td className="p-5 text-gray-600 text-center">
                         テンプレート
                         <span className="block text-xs font-normal text-gray-400 mt-1">成功事例の横展開が中心</span>
                       </td>
                       <td className="p-5 text-gray-600 text-center">
                         一般論・経営指導
                         <span className="block text-xs font-normal text-gray-400 mt-1">実務にはタッチしない</span>
                       </td>
                  </tr>
                     <tr>
                       <th className="p-5 font-bold text-gray-700 bg-gray-50 text-center text-sm">費用感</th>
                       <td className="p-5 font-black text-brand-red bg-red-50/30 text-center text-2xl">
                         月3万円<span className="text-sm font-bold ml-1 text-gray-600">（固定）</span>
                         <span className="block text-xs font-bold text-gray-600 mt-1">ムダな固定費を全カットし還元</span>
                       </td>
                       <td className="p-5 text-gray-600 text-center font-bold">
                         月30〜100万円
                         <span className="block text-xs font-normal text-gray-400 mt-1">組織維持費が乗るため高額</span>
                       </td>
                       <td className="p-5 text-gray-600 text-center font-bold">
                         月5〜20万円
                         <span className="block text-xs font-normal text-gray-400 mt-1">相場並み</span>
                       </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                担当コンサルタント
              </h2>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <Image 
                  src="/representative.jpg" 
                  alt="ジェネラルコンサルティンググループ株式会社 代表取締役 槙 優真" 
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
                 {/* Certifications */}
                 <div className="mt-6 space-y-2">
                    <div className="bg-white px-4 py-2 rounded-lg text-sm font-bold text-center text-gray-700 shadow-sm border border-gray-200">Google AI Essentials認定</div>
                    <div className="bg-white px-4 py-2 rounded-lg text-sm font-bold text-center text-gray-700 shadow-sm border border-gray-200">生成AIプロンプトエンジニア認定</div>
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
                    ベンチャー・スタートアップから大手企業まで会社員を4年経験｡<br/>
                    2016年に独立して以降､新規事業立ち上げ・既存事業の売上改善を多数経験｡<br/>
                    2024年､AIの影響力を目の当たりにしたことで､AI×マーケティングの領域に注力｡
                  </p>
                  <p>
                    1992年､山形県出身｡<br/>
                    個人・社会の本質的な”幸せ”に強い関心があり､慶應義塾大学（哲学）に在籍｡
                  </p>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200 mt-8">
                    <h4 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">主な支援実績</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-red font-bold">●</span>
                        <span>マーケティング担当幹部として法律事務所を創業｡年商3.9億円に</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-red font-bold">●</span>
                        <span>東証プライム上場企業の社長室にて､全社Web広告戦略の統括をコンサル支援</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-red font-bold">●</span>
                        <span>ココナラ（東証グロース上場）ほか､複数社のAI活用を支援</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-red font-bold">●</span>
                        <span>約400名の経営者が在籍する「新経営戦略塾」にてAI講師を担当</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>

              {/* Mission Link - Full Width Clickable Area */}
              <Link href="/profile#story" target="_blank" rel="noopener noreferrer" className="block mt-10 -mx-8 -mb-8 md:-mx-12 md:-mb-12">
                <div className="pt-8 px-8 pb-8 md:px-12 md:pb-12 bg-gradient-to-b from-white to-red-50 hover:to-red-100 transition-colors duration-300 rounded-b-3xl border-t border-gray-200 text-center group">
                  <p className="font-bold text-gray-800 text-lg mb-2">この事業にかける想い</p>
                  <div className="inline-flex items-center gap-2 text-brand-red font-bold border-b border-brand-red pb-0.5">
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
                  q: "マーケティング関係ない､\nAI全般の相談もできますか？",
                  a: "はい､もちろんです｡\nAI活用に関することは､何でも気軽にご相談ください｡"
                },
                {
                  q: "AI関係なしに､\n集客・マーケティングの相談もできますか？",
                  a: "はい､もちろんです｡\n集客・マーケティングに関することは､何でも気軽にご相談ください｡"
                },
                {
                  q: "料金はどれくらいですか？",
                  a: "月額3万円です｡\n個別見積にて､貴社マーケ幹部として全面サポートすることも可能です｡"
                },
                {
                  q: "初期費用は発生しますか？",
                  a: "発生しません｡初期費用はゼロ円です｡"
                },
                {
                  q: "最低契約期間はどれくらいですか？",
                  a: "1ヶ月からお試し契約いただけます｡"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">Q</div>
                    <h3 className="text-lg font-bold text-gray-900 pt-1.5 whitespace-pre-wrap leading-snug">{item.q}</h3>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0 font-bold text-lg">A</div>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-wrap pt-1.5">{item.a}</p>
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
            まずは無料相談で、<br />貴社の課題をお聞かせください
          </h2>
          <p className="text-gray-300 mb-12 max-w-xl mx-auto text-lg">
            無理な勧誘は一切ございませんので、ご安心ください。
          </p>
          
          <div className="flex flex-col items-center gap-2">
             <Link 
                href="https://general-cg.com/contact/" 
                className="inline-flex items-center justify-center bg-brand-red text-white font-bold py-5 px-16 rounded-full hover:bg-white hover:text-brand-red transition-all shadow-2xl hover:shadow-white/20 text-xl group"
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
