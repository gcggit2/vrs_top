import React from 'react';
import Image from 'next/image';

export default function LogoSlider() {
  const items = [
    { type: 'image', src: "/projects/ad-house/ad-house.png", alt: "AD HOUSE", className: "h-12 md:h-20" },
    { type: 'text', text: "東証プライム上場企業" },
    { type: 'image', src: "/projects/eikokuya/eikoya.png", alt: "銀座英國屋", className: "h-12 md:h-20" },
    { type: 'text', text: "法律事務所" },
    { type: 'image', src: "/projects/sks/sks.png", alt: "新経営戦略塾", className: "h-14 md:h-24" },
    { type: 'text', text: "医療機関" },
    { type: 'image', src: "/projects/coconala/coconala.png", alt: "coconala", className: "h-12 md:h-20" },
    { type: 'text', text: "BtoB販促支援" },
    { type: 'image', src: "/projects/japan-shredder-service/japan-shredder-service.png", alt: "日本シュレッダーサービス", className: "h-12 md:h-20" },
    { type: 'text', text: "リゾートホテル" },
    { type: 'image', src: "/projects/blue-sky/blue-sky.png", alt: "Blue Sky", className: "h-12 md:h-20" },
    { type: 'text', text: "プロモーション代行" },
    { type: 'image', src: "/projects/aini-ku/aini-ku.png", alt: "aini-ku", className: "h-12 md:h-20" },
    { type: 'text', text: "船舶免許スクール" },
  ];

  return (
    <section className="py-2 bg-white overflow-hidden relative border-b border-gray-100">
      <div className="flex w-fit animate-scroll hover:pause">
        {/* Set 1 */}
        <div className="flex items-center gap-3 md:gap-6 px-3 md:px-6 whitespace-nowrap min-w-full justify-around shrink-0 grayscale">
          {items.map((item, index) => (
            item.type === 'image' ? (
              <div key={index} className={`relative ${item.className} w-auto`}>
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  width={200}
                  height={100}
                  className="w-auto h-full object-contain" 
                />
              </div>
            ) : (
              <div key={index} className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">
                {item.text}
              </div>
            )
          ))}
        </div>

        {/* Set 2 */}
        <div className="flex items-center gap-3 md:gap-6 px-3 md:px-6 whitespace-nowrap min-w-full justify-around shrink-0 grayscale">
          {items.map((item, index) => (
             item.type === 'image' ? (
              <div key={`clone-${index}`} className={`relative ${item.className} w-auto`}>
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  width={200}
                  height={100}
                  className="w-auto h-full object-contain" 
                />
              </div>
            ) : (
              <div key={`clone-${index}`} className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">
                {item.text}
              </div>
            )
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
