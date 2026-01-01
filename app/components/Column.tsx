import Image from 'next/image';

const columns = [
  {
    title: '「稼げる社長＝スゴい」が経営者を追い詰める｜経営の価値基準を「持続可能な経営」に定義し直す',
    href: 'https://note.com/gcg_maki/n/nc6be60c6368f',
    imageSrc: '/column/column-1.png',
  },
  {
    title: '1日24時間のうち「たった20％」で成果が激変｜最優先で時間を投資すべき"第二領域"とは？',
    href: 'https://note.com/gcg_maki/n/n32c8c648a15b',
    imageSrc: '/column/column-2.png',
  },
  {
    title: '売上目標という呪縛を解いたら｜数字を追うのをやめた途端、優良顧客が集まり始めた経営の転換点',
    href: 'https://note.com/gcg_maki/n/nf6034d1db51f',
    imageSrc: '/column/column-3.png',
  },
];

export default function Column() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold block mb-2 tracking-wider">COLUMN</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">コラム記事</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {columns.map((col, index) => (
            <a
              key={index}
              href={col.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <Image 
                  src={col.imageSrc}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                  priority={index === 0}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-brand-red transition-colors line-clamp-3">
                  {col.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://note.com/gcg_maki" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-brand-red text-brand-red font-bold py-3 px-10 rounded hover:bg-brand-red hover:text-white transition-colors"
          >
            記事一覧を見る
          </a>
        </div>
      </div>
    </section>
  );
}

