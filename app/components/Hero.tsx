import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-white text-gray-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="relative w-full h-[50vh] md:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ 
          backgroundImage: 'url("/hero-bg.jpeg")', 
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/40"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-brand-blue font-bold mb-6 tracking-widest text-xs md:text-base uppercase">
              VERSENCE Inc.
            </h1>
            <h2 className="text-lg md:text-4xl lg:text-5xl font-bold leading-relaxed md:leading-snug mb-8 md:mb-12 text-gray-900 antialiased tracking-tight">
              物理的・精神的ウェルビーイングを<br/>
              社会に実装する
            </h2>
          </div>
        </div>

        {/* Scroll Indicator - Positioned relative to the Hero section, not the content */}
        <div className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
