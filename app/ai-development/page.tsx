import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import LogoSlider from '../components/LogoSlider';

export const metadata: Metadata = {
  title: 'AIツール受託開発・AIエージェント開発｜ジェネラルコンサルティンググループ',
  description: 'AIツールの受託開発、AIエージェント開発、Webサイト・LP制作サービス。大幅なコスト削減と売上向上を実現するAIソリューションを、低コスト・短納期でご提供します。',
  openGraph: {
    title: 'AIツール受託開発・AIエージェント開発｜ジェネラルコンサルティンググループ',
    description: 'AIツールの受託開発、AIエージェント開発、Webサイト・LP制作サービス。',
    url: 'https://general-consulting.co.jp/ai-development',
    siteName: 'ジェネラルコンサルティンググループ株式会社',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: {
    canonical: 'https://general-consulting.co.jp/ai-development',
  },
};

export default function AiDevelopmentPage() {
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
                "name": "AIツール受託開発",
                "provider": {
                  "@type": "Organization",
                  "name": "ジェネラルコンサルティンググループ株式会社",
                  "founder": "槙 優真"
                },
                "description": "AIエージェント開発からWeb制作まで、業務効率化と売上向上を実現するAIツールを受託開発します。",
                "offers": {
                  "@type": "Offer",
                  "price": "500000",
                  "priceCurrency": "JPY",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "minPrice": "500000",
                    "priceCurrency": "JPY"
                  }
                }
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
                    "name": "AIツール受託開発",
                    "item": "https://general-consulting.co.jp/ai-development"
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
                  <div className="inline-block bg-teal-600/10 text-teal-600 font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-teal-600/20">
                    AIツール・AIエージェント開発
                  </div>
                  <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.2] tracking-tight">
                    <span className="text-teal-600">大幅なコスト削減<br/>売上UPを実現</span>
                  </p>
                  <div className="flex items-center gap-4 mb-8">
                      <div className="h-px bg-gray-300 w-12"></div>
                      <h1 className="text-lg font-bold text-gray-400 tracking-widest">AIツールの受託開発</h1>
                      <div className="h-px bg-gray-300 w-12"></div>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-800 mb-10 leading-relaxed font-bold border-l-4 border-teal-600 pl-6">
                    貴社の業務フローに合わせた<br/>独自のAIツールを開発します
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-10 max-w-2xl">
                    {[
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25" />
                          </svg>
                        ),
                        main: "AIツール開発",
                        sub: "AIエージェント開発など"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                          </svg>
                        ),
                        main: "プロンプト制作",
                        sub: "マイGPT・Gemなど"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-15.686 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253m0 0A11.953 11.953 0 0112 10.5c2.998 0 5.74-1.1 7.843-2.918" />
                          </svg>
                        ),
                        main: "Web/LP制作も",
                        sub: "AI活用で高品質に"
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex-1 bg-white/80 backdrop-blur-sm border-l-4 border-teal-600 py-3 px-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 text-gray-900 font-bold text-lg leading-tight mb-1">
                          <span className="text-teal-600">{item.icon}</span>
                          {item.main}
                        </div>
                        <div className="text-gray-500 font-bold text-xs pl-7">
                          {item.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
                      <Link 
                        href="https://general-cg.com/contact/" 
                        className="inline-flex items-center justify-center w-full sm:w-auto bg-teal-600 text-white font-bold py-4 px-12 rounded-full hover:bg-teal-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg group"
                      >
                        開発について相談する
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

            {/* Image */}
            <div className="hidden md:block w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white mx-auto max-w-sm md:max-w-none">
                <Image 
                  src="/service/development.jpg" 
                  alt="AIツール開発イメージ" 
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image (Mobile) */}
      <section className="md:hidden bg-gray-50 pb-10">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/service/development.jpg" 
                alt="AIツール開発イメージ" 
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section (Logo Slider) */}
      <LogoSlider />

      {/* Pain Points Section - New Split Design */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0D9488 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                こんな<span className="text-teal-600 mx-2">課題</span>ありませんか？
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Positive: Ambitions */}
              <div className="bg-teal-50 p-8 md:p-10 rounded-3xl border-2 border-teal-200 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">効率化・競争優位を目指したい</h3>
                    </div>
                    <ul className="space-y-4">
                        {[
                            "AIツールを開発して､効率的な経営を目指したい",
                            "業務フローごとAIで自動化して、利益率を高めたい",
                            "自社独自のAIシステムで、競合他社に差をつけたい",
                            "WebサイトやLPも、AIの力で高速・低コストに作りたい"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-teal-600 font-bold mt-0.5">●</span>
                                <span className="font-bold text-gray-800 text-lg leading-snug">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              </div>

              {/* Negative: Issues */}
              <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border-2 border-gray-200 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-400 text-white flex items-center justify-center shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">AI活用の停滞・課題</h3>
                    </div>
                    <ul className="space-y-4">
                        {[
                            "プロンプトをいくら試行錯誤しても､求める成果が出ない",
                            "社内にエンジニアがおらず、ツールの実装ができない",
                            "自動化したいアイデアはあるが、実現方法が分からない",
                            "既存のパッケージソフトでは、自社の業務に合わない"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-gray-400 font-bold mt-0.5">●</span>
                                <span className="font-bold text-gray-700 text-lg leading-snug">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>

            {/* Solution Transition */}
            <div className="text-center">
                <div className="w-px h-16 bg-gray-300 mx-auto mb-6"></div>
                <p className="text-lg font-bold text-gray-500 mb-4">その展望・課題</p>
                <div className="inline-block bg-teal-600 text-white text-3xl md:text-5xl font-black py-4 px-12 rounded-full shadow-xl">
                    AIツール受託開発で解決
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 1: AI Tool/Agent */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-teal-600 font-bold text-lg tracking-widest uppercase mb-2 block">Service 01</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                AIツール・<br className="md:hidden" />AIエージェント開発
              </h2>
              <p className="text-gray-500 mt-4 text-lg font-medium">
                貴社の業務フローに特化した、独自のAIツール・AIエージェントを開発します。<br/>
                市販のツールでは実現できない、きめ細やかな自動化を実現します。
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mb-16">
              <div className="flex-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">業務システム・集客ツール</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  社内データの連携はもちろん、従来の開発では不可能だった「AIによる柔軟な判断・アウトプット」を組み込んだシステムを開発します。
                </p>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                   <p className="text-center text-teal-600 font-bold">約50万円〜</p>
                </div>
              </div>

              <div className="flex-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">自律型AIエージェント</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  人の指示を待たずにタスクを遂行する「AIエージェント」を開発。複数の手順が必要な複雑な業務も、最小限の確認だけで任せられます。
                </p>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                   <p className="text-center text-teal-600 font-bold">約200万円〜</p>
                </div>
              </div>
            </div>

            <div className="text-center">
               <p className="text-gray-500 text-sm">※詳細な要件をお伺いした上で、正式なお見積もりを提示いたします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Prompt/GPTs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-teal-600 font-bold text-lg tracking-widest uppercase mb-2 block">Service 02</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                マイGPT・<br className="md:hidden" />プロンプト制作
              </h2>
              <p className="text-gray-500 mt-4 text-lg font-medium">
                ツール開発までは不要な業務も、プロンプトの改善で成果が劇的に変わります。<br/>
                マイGPT・Gem・Claude Projects等に対応可能です。
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-inner border border-gray-100 mb-12">
               <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left">
                 過去の制作事例
               </h3>
               
               <div className="grid md:grid-cols-3 gap-6">
                 {/* Category 1: Marketing */}
                 <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.43.872.95 1.114 1.545.295.733.563 1.487.801 2.257m0 0a28.432 28.432 0 01-.801 2.257m0 0a28.432 28.432 0 01-.801 2.257m0 0a2.25 2.25 0 01-2.228 1.545h-1.026a2.25 2.25 0 01-2.228-1.545 28.58 28.58 0 01-.802-2.257m0 0a28.58 28.58 0 01-.802-2.257m0 0a28.58 28.58 0 01-.802-2.257m.302-3.08c.441-.854 1.11-1.554 1.954-2.025m0 0a33.303 33.303 0 014.288-2.275m0 0a33.303 33.303 0 014.288 2.275m0 0a17.914 17.914 0 00-1.684-1.226" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg text-gray-800">集客・コンテンツ</h4>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "LPの改善指示を自動生成",
                        "メルマガ本文を自動生成",
                        "SEO記事の構成・本文生成",
                        "動画台本（YouTube等）生成"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-600">
                          <span className="text-teal-500 mt-0.5">●</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                 </div>

                 {/* Category 2: Sales */}
                 <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg text-gray-800">営業・顧客対応</h4>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "SNSプロフィールからDM生成",
                        "提案内容の方向性を半自動生成",
                        "ノウハウに基づく返信文生成",
                        "顧客分析・分類の自動化"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-600">
                          <span className="text-teal-500 mt-0.5">●</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                 </div>

                 {/* Category 3: Others */}
                 <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg text-gray-800">業務効率化・その他</h4>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "領収書から精算項目を自動抽出",
                        "動画データからの情報抽出",
                        "理解度テスト問題の作成",
                        "プロンプトを自動生成するプロンプト"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-600">
                          <span className="text-teal-500 mt-0.5">●</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                 </div>
               </div>
            </div>

            <div className="text-center">
              <div className="inline-block bg-white border-2 border-teal-100 rounded-xl p-6 shadow-sm">
                <p className="text-gray-500 font-bold mb-2 text-sm">料金目安</p>
                <p className="text-3xl font-black text-teal-600">
                  約10〜30万円
                  <span className="text-sm text-gray-500 font-normal ml-2">（難易度に応じてお見積り）</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus: Web/LP Development */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-16 border border-gray-800">
                
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 via-gray-900 to-gray-900 pointer-events-none"></div>

                <div className="md:w-3/5 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-teal-900/50 text-teal-300 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-teal-700/50 backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                        AI Driven Development
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-white">
                        Webサイト・LP制作も<br/>
                        <span className="text-teal-400">AI駆動開発</span>で高速・高品質に
                    </h2>
                    <p className="text-gray-300 leading-relaxed font-medium text-sm md:text-base">
                        AIによるコーディング支援技術（AI駆動開発）を活用。<br/>
                        成果の出るWebサイトやLPを制作します。<br/>
                        <span className="block mt-3 text-sm text-teal-400/80">
                            ※当サイトもAIによるコーディング支援技術（AI駆動開発）で作られています
                        </span>
                    </p>
                </div>
                
                <div className="md:w-2/5 w-full relative z-10">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-gray-800 p-4 rounded-xl text-center border border-gray-700">
                            <p className="text-xs text-gray-400 mb-1 font-bold">Cost</p>
                            <p className="font-bold text-white text-sm md:text-base">従来よりも安価</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-xl text-center border border-gray-700">
                            <p className="text-xs text-gray-400 mb-1 font-bold">Marketing</p>
                            <p className="font-bold text-white text-sm md:text-base">「売れる」設計</p>
                        </div>
                    </div>
                    <Link 
                        href="https://general-cg.com/contact/" 
                        className="inline-flex items-center justify-center w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg text-lg group"
                    >
                        Web制作を相談する
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                開発の流れ
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg z-10 relative">1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">ヒアリング</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  解決したい課題や<br/>実現したい機能を<br/>お伺いします
                </p>
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
              </div>
              
              <div className="relative text-center">
                <div className="w-16 h-16 bg-white text-teal-600 border-2 border-teal-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg z-10 relative">2</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">ご提案・見積</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  最適なツール構成と<br/>お見積もりを<br/>提示します
                </p>
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
              </div>
              
              <div className="relative text-center">
                <div className="w-16 h-16 bg-white text-gray-900 border-2 border-gray-200 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg z-10 relative">3</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">開発・制作</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  プロトタイプ作成と<br/>フィードバックを<br/>行います
                </p>
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
              </div>

              <div className="relative text-center">
                <div className="w-16 h-16 bg-white text-gray-900 border-2 border-gray-200 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg z-10 relative">4</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">納品・運用</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  完成品を納品。<br/>運用保守も<br/>可能です
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                よくあるご質問
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  q: "AIの専門知識がなくても依頼できますか？",
                  a: "はい、問題ございません。難しい専門用語を使わず、お客様の業務内容に合わせて分かりやすく説明・提案します。"
                },
                {
                  q: "「何から始めればいいか分からない」状態でも相談できますか？",
                  a: "はい、もちろんです。弊社の強みは開発力だけでなく「マーケティング視点」にもあります。「自社ならどう活用すべきか？」といった企画段階からのご相談も大歓迎です。"
                },
                {
                  q: "開発期間はどのくらいですか？",
                  a: "ツールの規模によりますが、プロトタイプ作成まで最短2週間〜1ヶ月程度で進めることが可能です。"
                },
                {
                  q: "既存のシステムと連携させることは可能ですか？",
                  a: "はい、可能です。CSVやPDFなどの社内データの読み込みや、既存システムとのAPI連携なども柔軟に対応します。"
                },
                {
                  q: "導入後の運用サポートはありますか？",
                  a: "はい、納品後の保守・運用サポートも承っております。ツールの調整や機能追加など、継続的に支援します。"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h3 className="flex items-start gap-4 text-lg font-bold text-gray-900 mb-4">
                    <span className="text-teal-600 bg-teal-50 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">Q</span>
                    {item.q}
                  </h3>
                  <div className="flex items-start gap-4 text-gray-600 leading-relaxed">
                    <span className="text-gray-400 w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">A</span>
                    <p>{item.a}</p>
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
                className="inline-flex items-center justify-center bg-teal-600 text-white font-bold py-5 px-16 rounded-full hover:bg-white hover:text-teal-600 transition-all shadow-2xl hover:shadow-white/20 text-xl group"
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
