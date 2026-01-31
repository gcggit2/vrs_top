import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: '経営者向けマインドフルネス事業',
    description: '経営者がマインドフルネスな状態で経営判断を行うことで「業績UP」と「心のゆとり」を実現するサポートを提供しています｡',
    link: '#',
    image: '/service/mindfulness.jpg',
    buttonText: 'Coming Soon...',
  },
  {
    title: '東京グルテンフリー観光事業',
    description: '主に小麦アレルギー・セリアック病の訪日外国人旅行者に向けて､厳選されたグルテンフリー対応の飲食店やスポットを巡る東京観光プランニングガイドを販売しています｡',
    link: '#',
    image: '/service/glutenfree.jpg',
    buttonText: '詳しくはこちら',
  },
];

export default function Service() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold block mb-2 tracking-wider">SERVICE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">サービス一覧</h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full border border-gray-100">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-base text-gray-600 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Link 
                  href={service.link} 
                  className="text-center block w-full py-3 border border-brand-blue text-brand-blue font-bold rounded hover:bg-brand-blue hover:text-white transition-colors"
                >
                  {service.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
