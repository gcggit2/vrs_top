import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'プライバシーポリシー｜ヴェルセンス株式会社',
  description: 'ヴェルセンス株式会社のプライバシーポリシー（個人情報保護方針）です。当社における個人情報の収集、利用目的、第三者への提供、安全管理措置などについて定めています。',
  robots: {
    index: false,
  },
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-blue font-bold tracking-widest block mb-2">PRIVACY POLICY</span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">プライバシーポリシー</h1>
          <div className="w-16 h-1 bg-brand-blue mx-auto mt-6"></div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12">
            <div className="prose prose-red max-w-none text-gray-700 leading-relaxed">
              <p className="mb-8">
                ヴェルセンス株式会社（以下、当社といいます。）は、皆様の個人情報の重要性を認識し、その適正な収集、利用、保護をはかるとともに、安全管理を行うため、プライバシーポリシーを定め、次のとおり運用します。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-brand-blue pl-4">個人情報の定義</h2>
              <p>個人情報とは、利用者個人に関する情報であって、当該情報を構成する氏名、メールアドレス、生年月日その他の記述等により当該利用者を識別できるものとします。</p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-brand-blue pl-4">個人情報の利用目的</h2>
              <p>当社が提供するサービス全般)は、個人情報を以下の目的の範囲内のみで利用いたします。また、ご本人の同意がある場合及び個人情報保護法その他の個人情報に関する法令により認められる場合を除いては、この範囲を超えて個人情報を利用することはありません。</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>当社が提供するサービス全般)における利用者へのサービスの提供と個人認証</li>
                <li>商品広告を提供する企業等への会員サービスを目的とした情報提供</li>
                <li>当社が提供するサービス全般)によるサービスの向上等を目的としたアンケート、キャンペーンの実施</li>
                <li>当社が提供するサービス全般)からのメールによる各種情報の無料提供、お問い合わせへの返答</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-brand-blue pl-4">個人情報の第三者提供</h2>
              <p>当社が提供するサービス全般)は、以下の場合を除いては個人情報を第三者に提供をすることはありません。</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>本サービスのサービス向上の目的で個人情報を集計及び分析等する場合</li>
                <li>前号の集計及び分析等により得られたものを、個人を識別又は特定できない態様にて提携先等第三者に開示又は提供する場合</li>
                <li>本サービスに関わる部分の営業譲渡が行われ、譲渡先に対して法的に権利義務一切が引き継がれる場合</li>
                <li>個人情報の第三者への提供に当たりあらかじめ本人の同意を得ている場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>公衆衛生の向上またが児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                <li>利用目的の達成に必要な範囲内において、個人データの取扱いの全部又は一部を委託する場合</li>
                <li>商品広告を提供する企業等への会員サービスを目的とした情報提供</li>
                <li>その他法令により認められる場合</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-brand-blue pl-4">個人情報の安全管理</h2>
              <p>当社が提供するサービス全般)の従業員に対する教育を行い、個人情報保護を徹底します。</p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-brand-blue pl-4">個人情報の変更等</h2>
              <p>当社が提供するサービス全般)において登録した個人情報をいつでも変更・追加・削除することができます。</p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-brand-blue pl-4">個人情報の利用目的の通知、開示、利用停止等の求め</h2>
              <p>当社が提供するサービス全般)は、利用目的の通知及び個人情報の開示、利用停止又は消去、第三者への提供の停止について、下記の窓口にて受け付けております。ご本人からのお申出があった場合には、お申出頂いた方がご本人又はその代理人であることを確認のうえ、法令の定めに従い対応し、書面又はメールにて回答いたします。なお、お申出が法令の定める要件を充たさない場合、又は、個人情報保護法その他の法令により、開示等を拒絶することが認められる事由がある場合には、お申出に添えないことがございます。</p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-brand-blue pl-4">お問い合わせ窓口</h2>
              <p>開示等のお申出、ご意見、ご質問、苦情、その他個人情報の取り扱いに関するお問い合わせは、<a href="mailto:info@versence.jp" className="text-brand-blue hover:underline">info@versence.jp</a> にご連絡ください。</p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-brand-blue pl-4">免責</h2>
              <p>当社が提供するサービス全般)は何らの責任を負いません。</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>当社が提供するサービス全般)上の機能または別の手段を用いて他の利用者に個人情報を明らかにした場合</li>
                <li>活動情報またはその他の利用者が入力した情報により、期せずして本人が特定できてしまった場合</li>
                <li>ご本人以外の利用者が個人を識別でき情報(ID、パスワード等)を入手した場合</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-brand-blue pl-4">cookie(クッキー)の使用</h2>
              <p>当社が提供するサービス全般)は、利用者の皆様によりよいサービスを提供するため、cookie(クッキー)を使用することがありますが、これにより個人を特定できる情報の収集を行えるものではなく、お客様のプライバシーを侵害することがございません。また、cookie(クッキー)の受け入れを希望されない場合は、ブラウザの設定で変更することができます。※cookie(クッキー)とは、サーバーコンピュータからのお客様のブラウザに送信され、お客様が使用しているコンピュータのハードディスクに蓄積される情報です。</p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-brand-blue pl-4">アクセスログ等の記録、開示</h2>
              <p>当社が提供するサービス全般)になされた書き込み等により損害を被ったと主張する第三者から開示を要請された場合において、当該書き込みを行った登録ユーザーの氏名、住所、電子メールアドレス、電話番号などの個人情報及びアクセスログを開示することがあります。</p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-brand-blue pl-4">統計データの利用</h2>
              <p>当社が提供するサービス全般)は、提供を受けた個人情報をもとに、個人を特定でけない形式による統計データを作成し、当該データにつき何らの制限なく利用することができるものとします。</p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-brand-blue pl-4">継続的改善</h2>
              <p>当社(およびヴェルセンス株式会社が提供するサービス全般)は、個人情報の取り扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、プライバシーポリシーを変更することがあります。</p>
              
              <p className="mt-12 text-right font-bold">2025年3月31日 制定</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}




