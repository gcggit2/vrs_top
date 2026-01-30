import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Script from 'next/script';
import LogoSlider from '../components/LogoSlider';

export const metadata: Metadata = {
  title: '利益の『伸びしろ』壁打ち｜無料の経営・マーケティング診断｜ジェネラルコンサルティンググループ',
  description: '【毎月5社限定・無料】貴社の利益には、まだ「伸びしろ」が眠っています。コスト削減・Web広告の機会損失・AI活用など、60分間の壁打ちで「隠れた利益」を可視化。中小企業から上場企業まで､豊富な支援経験を持つ槙優真が直接アドバイスします。',
};

export default function KabeuchiPage() {
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
                "name": "利益の『伸びしろ』壁打ち",
                "provider": {
                  "@type": "Organization",
                  "name": "ジェネラルコンサルティンググループ株式会社",
                  "founder": "槙 優真"
                },
                "description": "貴社の利益には、まだ「伸びしろ」が眠っている。代表・槙が直接、60分間の対話を通じて貴社の「隠れた利益」を可視化します。",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "JPY",
                  "availability": "https://schema.org/LimitedAvailability"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "なぜ無料？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "現場のリアルな課題に触れることが私自身の知見のアップデートに直結するからです。また、もし相性が良く、ご興味を持っていただけた場合のみ、顧問サービスなどもご案内いたします｡"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "強引な勧誘は？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "一切ありません。壁打ちだけで終わっても全く問題ありませんので、ご安心ください。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "壁打ちは、事前準備が必要？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "「時間がかかっている業務」「外注している業務」「主な集客施策」「直近の広告費や成果の数字（CPA、成約率など）」が分かると、より具体的なアドバイスが可能です。"
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
                    "name": "利益の『伸びしろ』壁打ち",
                    "item": "https://general-consulting.co.jp/kabeuchi"
                  }
                ]
              }
            ]
          }),
        }}
      />

      {/* 1. ファーストビュー */}
      <section className="pt-12 pb-12 lg:pt-24 lg:pb-32 bg-[oklch(0.97_0.02_145.35)] relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 transform origin-top-right z-0 opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
            
            {/* Text Content */}
            <div className="w-full text-center lg:text-left">
               <div className="inline-block bg-[oklch(0.623_0.19_145.35)]/10 text-[oklch(0.623_0.19_145.35)] font-bold px-4 py-1.5 rounded-full text-xs md:text-sm mb-6 border border-[oklch(0.623_0.19_145.35)]/20">
                 中小企業の経営者さま向け
               </div>

               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight">
                 <span className="block mb-1 md:mb-2 lg:mb-0">60分の壁打ちで、</span>
                 <span className="text-[oklch(0.623_0.19_145.35)] block whitespace-nowrap">利益UPの道筋を特定</span>
               </h1>

               <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                  <div className="h-px bg-gray-300 w-8 md:w-12"></div>
                  <h2 className="text-sm md:text-lg font-bold text-gray-400 tracking-widest">利益の『伸びしろ』壁打ち</h2>
                  <div className="h-px bg-gray-300 w-8 md:w-12"></div>
               </div>
               
               {/* 信頼のバッジ */}
               <div className="flex flex-col sm:flex-row gap-3 md:gap-6 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0">
                 {[
                   { text: "AIによる時短・コスト削減" },
                   { text: "集客数UP・獲得コスト改善" }
                 ].map((badge, i) => (
                   <div key={i} className="flex-1 bg-white/80 backdrop-blur-sm border-l-4 border-[oklch(0.623_0.19_145.35)] py-3 px-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center sm:justify-start text-left">
                     <div className="text-gray-900 font-bold text-sm md:text-base">
                       {badge.text}
                     </div>
                   </div>
                 ))}
               </div>
               
               <p className="text-gray-600 font-medium text-sm md:text-base mb-8 md:mb-10 text-center lg:text-left">
                 代表・槙が直接、60分間の壁打ちで「利益の伸びしろ」を可視化します
               </p>

               <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
                 <div className="flex flex-col items-center lg:items-start gap-2 w-full sm:w-auto">
                   <Link 
                     href="/kabeuchi/apply" 
                     className="inline-flex items-center justify-center w-full sm:w-auto bg-[oklch(0.623_0.19_145.35)] text-white font-bold py-4 px-8 md:px-12 rounded-full hover:bg-[oklch(0.55_0.19_145.35)] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-base md:text-lg group"
                   >
                     利益の『伸びしろ』を壁打ちする
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                     </svg>
                   </Link>
                   <div className="text-center mt-3">
                     <p className="text-xs md:text-sm text-red-600 font-bold bg-white/80 px-4 py-1 rounded-full border border-red-200 shadow-sm inline-block">
                       ※完全無料｡毎月先着5社限定
                     </p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Image (Representative) */}
            <div className="hidden lg:block w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white mx-auto max-w-sm md:max-w-none">
                <Image 
                  src="/representative.jpg" 
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
      <section className="lg:hidden bg-[oklch(0.97_0.02_145.35)] pb-10">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/representative.jpg" 
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
      <LogoSlider />

      {/* 2. チェックリスト：こんな課題を解決できます */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-10 md:mb-16">
               <h2 className="text-2xl md:text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight">
                 <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent block md:inline">こんな状況を</span>
                 <span className="text-[oklch(0.623_0.19_145.35)] underline decoration-4 decoration-[oklch(0.85_0.1_145.35)] underline-offset-4">改善できます</span>
               </h2>
             </div>
             
             <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16">
               {/* 守り */}
               <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] border-4 border-blue-600 shadow-xl md:shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                  <div className="bg-blue-600 p-4 md:p-6 flex items-center justify-center gap-2 md:gap-3 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <h3 className="text-lg md:text-2xl font-extrabold text-white tracking-wider">【守り】</h3>
                  </div>
                  <div className="p-4 md:p-8 flex flex-col gap-4 md:gap-6 bg-blue-50/50 flex-1">
                    {/* Item 1 */}
                    <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md border border-blue-100 flex-1">
                      <div className="flex items-start gap-3 md:gap-4 h-full">
                        <div className="bg-blue-100 text-blue-600 p-2 md:p-3 rounded-full shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg md:text-2xl font-bold text-blue-900 mb-2 md:mb-3">
                            <span className="border-b-4 border-blue-200 inline-block leading-tight">「手作業」</span>
                          </h4>
                          <p className="text-gray-800 font-bold leading-relaxed text-sm md:text-lg">
                            高い給与の大半が、売上に直結する業務ではなく雑務に消えている
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md border border-blue-100 flex-1">
                      <div className="flex items-start gap-3 md:gap-4 h-full">
                        <div className="bg-blue-100 text-blue-600 p-2 md:p-3 rounded-full shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg md:text-2xl font-bold text-blue-900 mb-2 md:mb-3">
                            <span className="border-b-4 border-blue-200 inline-block leading-tight">「外注費」</span>
                          </h4>
                          <p className="text-gray-800 font-bold leading-relaxed text-sm md:text-lg">
                            実はAIで数秒で終わる業務に、高い外注費を払い続けている
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>

               {/* 攻め - Updated to Theme Green */}
               <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] border-4 border-[oklch(0.623_0.19_145.35)] shadow-xl md:shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                  <div className="bg-[oklch(0.623_0.19_145.35)] p-4 md:p-6 flex items-center justify-center gap-2 md:gap-3 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                    <h3 className="text-lg md:text-2xl font-extrabold text-white tracking-wider">【攻め】</h3>
                  </div>
                  <div className="p-4 md:p-8 flex flex-col gap-4 md:gap-6 bg-[oklch(0.97_0.02_145.35)]/50 flex-1">
                    {/* Item 1 */}
                    <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md border border-[oklch(0.85_0.1_145.35)] flex-1">
                      <div className="flex items-start gap-3 md:gap-4 h-full">
                        <div className="bg-[oklch(0.97_0.02_145.35)] text-[oklch(0.623_0.19_145.35)] p-2 md:p-3 rounded-full shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg md:text-2xl font-bold text-[oklch(0.35_0.15_145.35)] mb-2 md:mb-3">
                            <span className="border-b-4 border-[oklch(0.85_0.1_145.35)] inline-block leading-tight">「集客・Web広告」</span>
                          </h4>
                          <p className="text-gray-800 font-bold leading-relaxed text-sm md:text-lg">
                            代理店任せ/独学でも、ムダなく機会損失なく運用できているか確信が持てない
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md border border-[oklch(0.85_0.1_145.35)] flex-1">
                      <div className="flex items-start gap-3 md:gap-4 h-full">
                        <div className="bg-[oklch(0.97_0.02_145.35)] text-[oklch(0.623_0.19_145.35)] p-2 md:p-3 rounded-full shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg md:text-2xl font-bold text-[oklch(0.35_0.15_145.35)] mb-2 md:mb-3">
                            <span className="border-b-4 border-[oklch(0.85_0.1_145.35)] inline-block leading-tight">「Webサイト・LP」</span>
                          </h4>
                          <p className="text-gray-800 font-bold leading-relaxed text-sm md:text-lg">
                            「売れるために必須の要素」が網羅されているか､致命的なミスがないか確信が持てない
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
             </div>

             <div className="text-center relative">
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-[oklch(0.623_0.19_145.35)]/10 blur-3xl rounded-full -z-10"></div>
               <div className="inline-block bg-[oklch(0.623_0.19_145.35)] text-white px-8 md:px-12 py-6 rounded-2xl shadow-xl shadow-[oklch(0.85_0.1_145.35)]">
                 <p className="font-bold text-lg md:text-2xl leading-relaxed">
                   <span className="bg-white/20 px-2 py-1 rounded mr-2">1つでも</span>チェックが入るなら、<br className="md:hidden" />
                   <span className="text-yellow-200 border-b-2 border-yellow-200 mx-1">「改善できる利益」</span>が<br className="md:hidden" />
                   確実にあります。
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. 動画セクション */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-2xl md:text-3xl font-bold mb-8">「利益の『伸びしろ』壁打ち」とは？</h2>
             
             {/* 動画プレースホルダー */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <div style={{ padding: '55.93% 0 0 0', position: 'relative' }}>
                <iframe 
                  src="https://player.vimeo.com/video/1159529164?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                  title="利益の伸びしろ壁打ち_説明動画"
                ></iframe>
              </div>
              <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
            </div>
           </div>
        </div>
      </section>

      {/* 4. なぜ、今「壁打ち」をやるのか（代表の想い） */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row">
             {/* Left Column: Heading */}
             <div className="bg-gray-900 text-white p-8 md:p-10 md:w-1/3 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 md:mb-6 relative z-10">
                  なぜ、今<br/>
                  <span className="text-[oklch(0.623_0.19_145.35)]">「壁打ち」</span>を<br/>
                  やるのか
                </h2>
                <div className="w-12 h-1 bg-[oklch(0.623_0.19_145.35)] mb-4 md:mb-6"></div>
             </div>

             {/* Right Column: Content */}
             <div className="p-8 md:p-10 lg:p-14 md:w-2/3 flex flex-col justify-center">
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-6 md:mb-10 leading-relaxed">
                  「超効率的な経営は、<br/>
                  <span className="bg-[oklch(0.97_0.02_145.35)] px-1">現場の違和感に気づくこと</span>から始まる」
                </p>
                
                <div className="space-y-6 md:space-y-8 text-gray-600 leading-loose font-medium text-sm md:text-base">
                  <p>
                    ジェネラルコンサルティンググループ株式会社 代表の槙（まき）です。<br/><br/>
                    これまで約10年間、年商数億規模の事業立ち上げから、東証プライム上場企業の全社Web広告の統括支援まで、現場の最前線で「事業の数字」と向き合ってきました。
                  </p>
                  
                  <div className="my-6 md:my-8">
                    <p className="text-gray-600 leading-loose font-medium">
                      日々、生きた数字と向き合う中で痛感していることがあります。<br/><br/>
                      <span className="font-bold text-gray-800 text-base md:text-lg leading-relaxed">
                        それは2026年現在、<span className="bg-[oklch(0.97_0.02_145.35)] border-b-4 border-[oklch(0.623_0.19_145.35)] px-1">AIを使いこなして「利益体質な経営」へシフトできている企業と、従来のやり方を継続している企業とでは、取り返しのつかないほどの格差が広がり始めているという事実</span>です。
                      </span>
                    </p>
                  </div>

                  <p>
                    この壁打ちは、私が培った知見を還元し、一社でも多くの企業が「古い慣習」から抜け出し、超効率的な経営へとシフトするきっかけを作るための、私にとっても真剣な挑戦の場です。
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. 60分で見つけ出す「2つの利益改善ポイント」 */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-10 md:mb-16">
               <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-gray-900">
                 60分で見つけ出す<br/>
                 <span className="text-[oklch(0.623_0.19_145.35)] relative inline-block">
                   「2つの利益改善ポイント」
                   <span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-[oklch(0.97_0.02_145.35)] -z-10"></span>
                 </span>
               </h2>
             </div>

             <div className="grid md:grid-cols-2 gap-6 md:gap-8">
               {/* Point 1 */}
               <div className="bg-gradient-to-br from-blue-50 to-white p-1 rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                 <div className="bg-white rounded-[20px] p-6 md:p-8 h-full flex flex-col relative overflow-hidden border-2 border-blue-100">
                    <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-100 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16 opacity-50"></div>
                    <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
                      <div className="bg-blue-600 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-md">1</div>
                      <span className="text-blue-600 font-bold tracking-wider text-sm bg-blue-50 px-3 py-1 rounded-full">守り</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug">
                      <span className="block md:hidden">AIによる<br/>時短・コスト削減</span>
                      <span className="hidden md:block">AIによる時短・コスト削減</span>
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-4 md:mb-6">
                      <p className="text-gray-600 font-bold text-sm text-center">「その作業、本当に人がやるべきですか？」</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      既存業務や外注費の中から､AI活用で直接利益に転換できる業務・コストを特定｡「具体的に何をやるべきか」までお伝えします｡
                    </p>
                 </div>
               </div>

               {/* Point 2 - Updated to Theme Green */}
               <div className="bg-gradient-to-br from-[oklch(0.97_0.02_145.35)] to-white p-1 rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                 <div className="bg-white rounded-[20px] p-6 md:p-8 h-full flex flex-col relative overflow-hidden border-2 border-[oklch(0.85_0.1_145.35)]">
                    <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[oklch(0.97_0.02_145.35)] rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16 opacity-50"></div>
                    <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
                      <div className="bg-[oklch(0.623_0.19_145.35)] text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-md">2</div>
                      <span className="text-[oklch(0.623_0.19_145.35)] font-bold tracking-wider text-sm bg-[oklch(0.97_0.02_145.35)] px-3 py-1 rounded-full">攻め</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug">
                      <span className="block md:hidden">集客数UP・<br/>獲得コスト改善</span>
                      <span className="hidden md:block">集客数UP・獲得コスト改善</span>
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-4 md:mb-6">
                      <p className="text-gray-600 font-bold text-sm text-center">「その広告費、機会損失はありませんか？」</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      広告費を月3万から月1,000万円超まで伸ばした経験､中小〜大手上場企業の支援経験から､申込数・獲得コスト改善の急所を突きます｡
                    </p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. 担当コンサルタント */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                担当コンサルタント
              </h2>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
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
                        <span className="text-[oklch(0.623_0.19_145.35)] font-bold">●</span>
                        <span>マーケティング担当幹部として法律事務所を創業｡年商3.9億円に</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[oklch(0.623_0.19_145.35)] font-bold">●</span>
                        <span>東証プライム上場企業の社長室にて､全社Web広告戦略の統括をコンサル支援</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[oklch(0.623_0.19_145.35)] font-bold">●</span>
                        <span>ココナラ（東証グロース上場）ほか､複数社のAI活用を支援</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[oklch(0.623_0.19_145.35)] font-bold">●</span>
                        <span>約400名の経営者が在籍する「新経営戦略塾」にてAI講師を担当</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>

              {/* Mission Link */}
              <Link href="/profile#story" target="_blank" rel="noopener noreferrer" className="block mt-10 -mx-8 -mb-8 md:-mx-12 md:-mb-12">
                <div className="pt-8 px-8 pb-8 md:px-12 md:pb-12 bg-gradient-to-b from-white to-[oklch(0.97_0.02_145.35)] hover:to-[oklch(0.90_0.05_145.35)] transition-colors duration-300 rounded-b-3xl border-t border-gray-200 text-center group">
                  <p className="font-bold text-gray-800 text-lg mb-2">この事業にかける想い</p>
                  <div className="inline-flex items-center gap-2 text-[oklch(0.623_0.19_145.35)] font-bold border-b border-[oklch(0.623_0.19_145.35)] pb-0.5">
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

      {/* 7. よくある質問 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">よくある質問</h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  q: "なぜ無料？",
                  a: "現場のリアルな課題に触れることが私自身の知見のアップデートに直結するからです。また、もし相性が良く、ご興味を持っていただけた場合のみ、顧問サービスなどもご案内いたします｡"
                },
                {
                  q: "強引な勧誘は？",
                  a: "一切ありません。壁打ちだけで終わっても全く問題ありませんので、ご安心ください。"
                },
                {
                  q: "壁打ちは、事前準備が必要？",
                  a: "「時間がかかっている業務」「外注している業務」「主な集客施策」「直近の広告費や成果の数字（CPA、成約率など）」が分かると、より具体的なアドバイスが可能です。"
                }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                   <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
                     <span className="bg-[oklch(0.97_0.02_145.35)] text-[oklch(0.623_0.19_145.35)] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">Q</span>
                     {item.q}
                   </h3>
                   <div className="flex items-start gap-3 pl-2">
                     <span className="text-gray-400 font-bold mt-1">A.</span>
                     <p className="text-gray-600 leading-relaxed">{item.a}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. お申し込み */}
      <section id="form" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-12">
               <span className="bg-[oklch(0.623_0.19_145.35)] text-white font-bold px-4 py-1 rounded-full text-sm mb-4 inline-block">毎月5社限定</span>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                 お申し込みフォーム
               </h2>
               <p className="text-gray-600">
                 通常2営業日以内に､日程調整のご連絡を差し上げます｡<br/>
                 ※代表 槙が直接担当するため、枠が埋まり次第、受付を終了します
               </p>
             </div>

             {/* フォームプレースホルダー */}
             <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl text-center">
                <Link 
                   href="/kabeuchi/apply" 
                   className="inline-flex items-center justify-center bg-[oklch(0.623_0.19_145.35)] text-white font-bold py-5 px-8 md:px-16 rounded-full hover:bg-[oklch(0.55_0.19_145.35)] transition-all shadow-xl hover:shadow-2xl text-lg md:text-xl w-full md:w-auto"
                >
                  利益の『伸びしろ』を壁打ちする
                </Link>
                
                <div className="mt-6 flex flex-col items-center gap-2">
                  <p className="text-base text-red-600 font-bold bg-red-50 px-6 py-2 rounded-full border border-red-200 inline-block">
                    ※完全無料｡毎月先着5社限定
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
