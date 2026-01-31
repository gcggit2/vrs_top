import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: '会社概要｜ヴェルセンス株式会社',
  description: 'ヴェルセンス株式会社の会社概要です。代表者、所在地、設立日、事業内容（ウェルビーイングに関するサービスの企画・開発・運用）などの基本情報を掲載しています。',
  robots: {
    index: false,
  },
};

export default function CompanyProfile() {
  const companyInfo = [
    { label: '社名', value: 'ヴェルセンス株式会社' },
    { label: '代表者名', value: '代表取締役　槙 優真' },
    { 
      label: '本社所在地', 
      value: (
        <>
          〒166-0014<br />
          東京都杉並区松ノ木三丁目13番6号
        </>
      ) 
    },
    { label: '設立年月日', value: '2025年3月31日' },
    { label: '連絡先', value: 'MAIL : info@versence.jp' },
    { label: 'URL', value: <a href="https://versence.jp" className="text-brand-blue hover:underline">https://versence.jp</a> },
    { 
      label: '事業内容', 
      value: 'ウェルビーイングに関するサービスの企画、開発、提供及び運用'
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-blue font-bold tracking-widest block mb-2">COMPANY PROFILE</span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">会社概要</h1>
          <div className="w-16 h-1 bg-brand-blue mx-auto mt-6"></div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {companyInfo.map((item, index) => (
                    <tr key={index} className="border-b border-gray-50 last:border-0 group">
                      <th className="py-6 px-6 md:px-12 w-1/3 bg-gray-50/50 text-gray-900 font-bold align-top">
                        {item.label}
                      </th>
                      <td className="py-6 px-6 md:px-12 text-gray-700 leading-relaxed">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}




