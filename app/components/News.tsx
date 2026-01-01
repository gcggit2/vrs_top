import Link from 'next/link';

// Use data matching the actual content we created in app/news/data.ts
// Note: In a real app, we might import this or fetch it. For now, matching the manual links.
const newsItems = [
  {
    id: '20251223-winter-holiday',
    title: '年末年始休業のお知らせ',
    date: '2025.12.23',
    category: 'お知らせ',
  },
  { 
    id: 'ai-seminar-1130',
    date: '2025.10.15', 
    title: '11月30日（日）AI活用セミナー開催のお知らせ', 
    category: 'セミナー' 
  },
  { 
    id: 'koelab-20250917',
    date: '2025.09.17', 
    title: 'ポッドキャスト番組『経営者の志』でお話しました', 
    category: 'メディア掲載' 
  },
  { 
    id: 'ai-marke-komon',
    date: '2025.08.01', 
    title: '新サービス「AIマーケ顧問」を開始しました', 
    category: 'お知らせ' 
  },
  { 
    id: 'ai-seminar-20250705',
    date: '2025.07.05', 
    title: 'AI活用セミナー（50社以上が参加）を主催しました', 
    category: 'セミナー報告' 
  }
];

export default function News() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-4">
          <div>
            <span className="text-brand-red font-bold block mb-2 tracking-wider">ACTIVITY & INFO</span>
            <h2 className="text-3xl font-bold text-gray-900">活動報告・お知らせ</h2>
          </div>
          <Link href="/news" className="text-brand-red hover:text-red-700 font-bold mt-4 md:mt-0 flex items-center gap-1 group">
            一覧を見る <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {newsItems.map((item, index) => (
            <Link 
              key={index} 
              href={`/news/${item.id}`}
              className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 p-6 hover:bg-red-50/30 transition-colors border-b border-gray-100 last:border-0 group relative"
            >
              <div className="flex items-center gap-4 flex-shrink-0">
                <time className="text-gray-500 font-mono text-sm">{item.date}</time>
              </div>
              <h3 className="text-gray-900 font-medium flex-1 group-hover:text-brand-red transition-colors text-base leading-snug">
                {item.title}
              </h3>
              <div className="hidden md:block text-brand-red opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
