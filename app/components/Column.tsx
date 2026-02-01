import Image from 'next/image';

const columns = [
  {
    title: 'AIツール､「あれもこれも」は不要｜AI研修のプロが教える、万能1つ＋特化1つで十分な理由',
    href: 'https://note.com/gcg_maki/n/n9d2f840e3ba3',
    imageSrc: '/column/column-1.png',
  },
  {
    title: '商談前リサーチを2時間→30分に短縮｜AI活用で準備時間75%カットする方法',
    href: 'https://note.com/gcg_maki/n/n0c1b8089c986',
    imageSrc: '/column/column-2.png',
  },
  {
    title: '「稼げる社長＝スゴい」が経営者を追い詰める｜経営の価値基準を「持続可能な経営」に定義し直す',
    href: 'https://note.com/gcg_maki/n/nc6be60c6368f',
    imageSrc: '/column/column-3.png',
  },
];

export default function Column() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold block mb-2 tracking-wider">COLUMN</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">コラム記事</h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto mt-6"></div>
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
              <div className="h-48 overflow-hidden relative bg-gray-50">
                <Image 
                  src={col.imageSrc}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                  priority={index === 0}
                  className="object-contain md:group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-brand-blue transition-colors line-clamp-3">
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
            className="inline-block border-2 border-brand-blue text-brand-blue font-bold py-3 px-10 rounded hover:bg-brand-blue hover:text-white transition-colors"
          >
            記事一覧を見る
          </a>
        </div>
      </div>
    </section>
  );
}

