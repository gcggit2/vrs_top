import Link from 'next/link';

const columns = [
  {
    date: '2025.10.15',
    title: 'AI時代に求められるマーケティング戦略とは？本質を捉える思考法',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    date: '2025.09.28',
    title: '中小企業こそAIを導入すべき5つの理由と具体的な活用事例',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
  },
  {
    date: '2025.09.10',
    title: '売上アップとコスト削減を同時に実現する組織作りのポイント',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
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
            <a key={index} href="https://note.com/gcg_maki" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={col.image} 
                  alt={col.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <time className="text-gray-500 text-sm font-mono block mb-2">{col.date}</time>
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

