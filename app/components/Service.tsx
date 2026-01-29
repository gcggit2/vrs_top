import Link from 'next/link';
import Image from 'next/image';

const kabeuchiService = {
  title: "利益の『伸びしろ』壁打ち",
    description: (
      <>
        守り（コスト削減）と攻め（売上UP）の両面から、<span className="font-bold">利益UPの道筋を特定する</span>60分の壁打ちです。
      </>
    ),
  link: "/kabeuchi",
  // 画像は使用しないため削除
};

const otherServices = [
  {
    title: 'AIマーケ顧問',
    description: 'やることは減り、成果は最大化。月額3万円で、マーケティング戦略〜実務まで、一気通貫で伴走します。',
    link: '/consulting',
    image: '/service/advisor.jpg',
  },
  {
    title: 'AIマーケ研修',
    description: '兼務でも、集客最大化。AI×マーケで“売れ続ける仕組み”を再現性高く内製化できるようになる研修です。',
    link: '/ai-marke-training',
    image: '/service/marketing-training.jpg',
  },
  {
    title: 'AI基礎研修',
    description: '全職種向けのAI活用研修です。さまざまな職種・業務における生産性UP・人手不足の解決にも有効です。',
    link: '/ai-training',
    image: '/service/basic-training.jpg',
  },
  {
    title: 'AIツールの受託開発',
    description: '貴社では上手くAI効率化できない業務を、貴社専用のAIツールを開発することで効率化します。',
    link: '/ai-development',
    image: '/service/development.jpg',
  },
];

export default function Service() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold block mb-2 tracking-wider">SERVICE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">サービス一覧</h2>
          <p className="mt-4 text-gray-600">
            マーケティング・AI活用に強みがあります。<br/>
            お気軽に何でもご相談ください。
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-white via-red-50 to-red-100 rounded-xl shadow-md border border-red-100 p-6 md:p-12 text-center relative overflow-hidden group hover:shadow-lg transition-all">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white rounded-full blur-3xl opacity-80 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white rounded-full blur-3xl opacity-80 pointer-events-none"></div>
            
            <div className="relative z-10">
              <p className="text-brand-red font-bold tracking-widest text-sm md:text-base mb-3">
                迷ったら、まずは現状分析から
              </p>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 whitespace-nowrap">
                利益の『伸びしろ』壁打ち
              </h3>
              
              <p className="text-gray-700 mb-8 leading-relaxed text-lg max-w-2xl mx-auto">
                {kabeuchiService.description}
              </p>
              
              <Link 
                href={kabeuchiService.link} 
                className="inline-block bg-brand-red text-white font-bold py-4 px-6 md:px-12 rounded-lg hover:bg-red-700 transition-all shadow-md transform hover:-translate-y-0.5 whitespace-nowrap text-sm sm:text-base"
              >
                【完全無料】詳細を見る
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 inline-block ml-2 mb-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Other Services (Grid) */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-lg md:text-xl font-bold text-gray-700">
              支援メニュー
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <Link 
                    href={service.link} 
                    className="text-center block w-full py-2 border border-brand-red text-brand-red font-bold rounded hover:bg-brand-red hover:text-white transition-colors text-sm"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
