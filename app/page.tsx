import Image from 'next/image';
import type { Metadata } from 'next';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import Service from './components/Service';
import Projects from './components/Projects';
import Column from './components/Column';
import Footer from './components/Footer';
import LogoSlider from './components/LogoSlider';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ジェネラルコンサルティンググループ株式会社｜AI×マーケティング支援',
  description: 'AIとマーケティングの知見を融合し、企業の持続的な成長と高収益化を実現するジェネラルコンサルティンググループ株式会社の公式サイトです。',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ジェネラルコンサルティンググループ株式会社',
            url: 'https://general-consulting.co.jp',
            description: 'AIとマーケティングの知見を融合し、企業の持続的な成長と高収益化を実現するコンサルティングファーム',
          }),
        }}
      />
      <Header />
      <Hero />
      
      {/* Logo Slider Section */}
      <LogoSlider />
      
      {/* Introduction Section (Redesigned) */}
      <section className="py-12 md:py-20 bg-gray-50 overflow-hidden relative">
        {/* Subtle Diagonal Lines Background */}
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{
               backgroundImage: 'linear-gradient(135deg, #000000 0.5px, transparent 0.5px)',
               backgroundSize: '20px 20px'
             }} 
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto p-6 md:p-16 relative flex flex-col md:flex-row items-start gap-8 md:gap-12 bg-white shadow-xl rounded-none md:rounded-r-3xl border-l-4 border-brand-red">
            
            {/* Main Content */}
            <div className="w-full text-left">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 leading-snug">
                <span className="text-brand-red">AI活用</span><span className="text-lg md:text-3xl ml-1 align-middle text-gray-600">(守り)</span> × <span className="text-brand-red">マーケティング</span><span className="text-lg md:text-3xl ml-1 align-middle text-gray-600">(攻め)</span><br/>
                コストは最小化、売上は最大化
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg font-medium border-t border-gray-100 pt-8 mt-8">
                <span className="block text-xl font-bold text-gray-800 mb-4">属人的な経営から、仕組みで利益を生む経営へ。</span>
                AIとマーケティング、攻守の両輪で<span className="font-bold text-brand-red">「圧倒的な投資対効果」</span>を実現。<br className="hidden md:block"/>
                「仕組み」で売上をつくり、心にゆとりある経営をサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Service />
      <Projects />
      
      {/* Customer Reviews Snippet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-red font-bold block mb-2 tracking-wider">CUSTOMER REVIEWS</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">お客様の声</h2>
          <p className="text-gray-600 mb-10">
            当社のサービスをご利用いただいたお客様の声を一覧で掲載しています。
          </p>
          <Link 
            href="/reviews/1"
            className="inline-block border-2 border-brand-red text-brand-red font-bold py-3 px-10 rounded hover:bg-brand-red hover:text-white transition-colors"
          >
            お客様の声 一覧を見る
          </Link>
        </div>
      </section>

      {/* Profile Snippet (Updated) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto">
            <div className="md:w-5/12 sticky top-24">
              <div className="bg-gray-100 aspect-[3/4] rounded-lg overflow-hidden relative shadow-lg">
                 <Image 
                   src="/representative.jpg" 
                   alt="代表・コンサルタント写真" 
                   fill
                   sizes="(max-width: 768px) 100vw, 50vw"
                   className="object-cover"
                 />
              </div>
            </div>
            <div className="md:w-7/12">
              <span className="text-brand-red font-bold block mb-4 tracking-wider">CEO PROFILE & STORY</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                属人的な経営から、<br className="md:hidden"/>AIと仕組みで「変化に強い、安定した」経営へ。
              </h2>
              
              <div className="text-gray-600 leading-relaxed space-y-6 text-justify">
                <p>
                  19歳でビジネスの世界に飛び込み、医学部A判定を捨てるほどの覚悟で、泥臭い実務と成果を積み上げてきました。独立後、事業は拡大しましたが、同時に「経営者やキーマンが休めば全てが止まる」。属人的経営の限界に直面し、会社を畳むべきかと本気で悩みました。
                </p>
                <p>
                  挫折と再起を経てたどり着いた答えが、「AI×マーケティング」による究極の効率化と仕組み化です。
                </p>
                <p>
                  10年以上の現場知見と、最新のAI技術を融合させ、貴社の事業を「属人性に頼らない、再現性のある資産」へと変える。一時の成功ではなく、未来へ続く事業モデルを提案します。
                </p>
              </div>

              <div className="mt-12">
                <div className="flex flex-col items-start gap-3">
                  <Link 
                    href="/profile" 
                    className="group relative inline-flex items-center gap-3 bg-brand-red text-white font-bold py-5 px-8 md:px-12 rounded-full hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Shine Effect */}
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full animate-shine" />
                    
                    <span className="relative z-10 text-lg">代表プロフィール・創業ストーリー</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform">
                      <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Column />
      <News />
      <Footer />
    </main>
  );
}