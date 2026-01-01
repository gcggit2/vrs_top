import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'AIマーケ顧問',
    description: 'やることは減り、成果は最大化。月額3万円で、マーケティング戦略〜実務まで、一気通貫で伴走します。',
    link: '/consulting',
    // Meeting / Consulting image
    image: '/service/advisor.jpg',
  },
  {
    title: 'AIマーケ研修',
    description: '兼務でも、集客最大化。AI×マーケで“売れ続ける仕組み”を再現性高く内製化できるようになる研修です。',
    link: '/ai-marke-training',
    // Training / Seminar image
    image: '/service/marketing-training.jpg',
  },
  {
    title: 'AI基礎研修',
    description: '全職種向けのAI活用研修です。さまざまな職種・業務における生産性UP・人手不足の解決にも有効です。',
    link: '/ai-training',
    // Office work / Learning image
    image: '/service/basic-training.jpg',
  },
  {
    title: 'AIツールの受託開発',
    description: '貴社では上手くAI効率化できない業務を、貴社専用のAIツールを開発することで効率化します。',
    link: '/ai-development',
    // Coding / Development image
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
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
    </section>
  );
}
