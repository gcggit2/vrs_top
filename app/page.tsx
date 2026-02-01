import Image from 'next/image';
import type { Metadata } from 'next';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import Service from './components/Service';
import Projects from './components/Projects';
import Footer from './components/Footer';
import LogoSlider from './components/LogoSlider';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ヴェルセンス株式会社｜ウェルビーイングを社会に実装する',
  description: '物理的・精神的ウェルビーイングを社会に実装することを目指すヴェルセンス株式会社の公式サイトです。心身の健康と豊かさを追求し、すべての人々がより良く生きられる持続可能な社会の実現に貢献します。',
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
            name: 'ヴェルセンス株式会社',
            url: 'https://versence.jp',
            description: '物理的・精神的ウェルビーイングを社会に実装し、持続可能な社会の実現を目指す企業',
          }),
        }}
      />
      <Header />
      <Hero />
      
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
          <div className="max-w-5xl mx-auto p-6 md:p-16 relative flex flex-col md:flex-row items-start gap-8 md:gap-12 bg-white shadow-xl rounded-none md:rounded-r-3xl border-l-4 border-brand-blue">
            
            {/* Main Content */}
            <div className="w-full text-left">
              <h2 className="text-lg md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 leading-snug tracking-tight">
                物理的・精神的ウェルビーイングを<br/>
                社会に実装する
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg font-medium border-t border-gray-100 pt-8 mt-8">
                <span className="block text-xl font-bold text-gray-800 mb-4">持続可能な社会の実現へ。</span>
                私たちは、心身の健康と豊かさを追求し、<span className="font-bold text-brand-blue">「ウェルビーイング」</span>を軸とした事業を展開しています。<br className="hidden md:block"/>
                すべての人々が、より良く生きられる社会を目指して。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Service />
      


      <Footer />
    </main>
  );
}