import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記｜ヴェルセンス株式会社',
  description: 'ヴェルセンス株式会社の特定商取引法に基づく表記です。販売価格、代金の支払時期・方法、返品・キャンセルに関する規定など、法令に基づく表示事項を掲載しています。',
  robots: {
    index: false,
  },
};

export default function Law() {
  const lawInfo = [
    { label: '事業者', value: 'ヴェルセンス株式会社' },
    { label: '代表者', value: '槙 優真' },
    { 
      label: '所在地', 
      value: (
        <>
          〒166-0014<br />
          東京都杉並区松ノ木三丁目13番6号
        </>
      ) 
    },
    { label: '連絡先', value: 'info@versence.jp' },
    { 
      label: '商品の販売価格', 
      value: (
        <>
          セールスページの表記に従う<br />
          <span className="text-sm text-gray-500">※時期によって料金が異なる場合がございます。</span>
        </>
      ) 
    },
    { 
      label: '送料などの商品代金以外の付帯費用', 
      value: 'オンラインでのやり取りとなるため、送料はかかりません。銀行支払を希望される方は、お支払いの際の手数料はお客様にてご負担ください。' 
    },
    { label: '代金の支払時期', value: 'お申し込み時に代金をお支払いください。（前払い制）' },
    { label: '代金の支払方法', value: 'クレジットカード、銀行振込' },
    { label: '商品等の引き渡し時期', value: 'お支払い確認後、すぐにメールまたは各種連絡先にてお引き渡し' },
    { 
      label: '返品の可否と条件', 
      value: (
        <>
          情報という商品特性上、原則返品・返金は行っておりません。<br />
          販売ページに返金保証等別途記載がある場合は、そちらを優先と致します。
        </>
      ) 
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-blue font-bold tracking-widest block mb-2">LAW</span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">特定商取引法に基づく表示</h1>
          <div className="w-16 h-1 bg-brand-blue mx-auto mt-6"></div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
              <div className="flex flex-col">
                {lawInfo.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row border-b border-gray-50 last:border-0">
                    <div className="py-4 px-6 md:py-6 md:px-12 md:w-1/3 bg-gray-50/50 text-gray-900 font-bold md:border-r border-gray-50 flex items-center">
                      {item.label}
                    </div>
                    <div className="py-4 px-6 md:py-6 md:px-12 md:w-2/3 text-gray-700 leading-relaxed">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

