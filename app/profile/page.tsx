import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '槙 優真｜代表プロフィール・創業ストーリー（ジェネラルコンサルティンググループ）',
  description: 'ジェネラルコンサルティンググループ代表取締役 槙 優真のプロフィールと創業ストーリー。医学部A判定を捨てて選んだビジネスの道、うつ病による挫折、そしてAI×マーケティングに行き着いた経緯を紹介します。',
};

export default function Profile() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "槙 優真",
            "jobTitle": "代表取締役",
            "affiliation": {
              "@type": "Organization",
              "name": "ジェネラルコンサルティンググループ株式会社"
            },
            "url": "https://general-consulting.co.jp/profile",
            "image": "https://general-consulting.co.jp/representative.jpg",
            "alumniOf": "慶應義塾大学",
            "description": "ジェネラルコンサルティンググループ株式会社 代表取締役。AI×マーケティングの専門家。10年以上のマーケティング実務経験とAI活用ノウハウを持つ。"
          }),
        }}
      />
      
      {/* Simple Hero Section & Navigation */}
      <div className="w-full bg-white pt-12 pb-4">
        <div className="container mx-auto px-4">
          <h1 className="text-brand-red font-bold tracking-[0.2em] mb-8 text-sm md:text-base text-center">CEO PROFILE & STORY</h1>
          
          {/* Navigation Menu */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <Link href="#story" className="group border border-brand-red p-4 flex justify-between items-center bg-white hover:bg-brand-red/5 transition-colors">
                <span className="text-gray-900 font-medium">ストーリー</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-gray-400 group-hover:text-brand-red transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <Link href="#profile" className="group border border-brand-red p-4 flex justify-between items-center bg-white hover:bg-brand-red/5 transition-colors">
                <span className="text-gray-900 font-medium">プロフィール</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-gray-400 group-hover:text-brand-red transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <Link href="#partner" className="group border border-brand-red p-4 flex justify-between items-center bg-white hover:bg-brand-red/5 transition-colors">
                <span className="text-gray-900 font-medium">パートナー紹介</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-gray-400 group-hover:text-brand-red transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section - Stylish Design */}
      <section id="story" className="w-full bg-[#FCF5F5] py-20 md:py-32 scroll-mt-20 relative overflow-hidden border-y border-brand-red/10">
        {/* Background Pattern: Red Grid on Off-White */}
        <div className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: `linear-gradient(#B91C1C 1px, transparent 1px), linear-gradient(90deg, #B91C1C 1px, transparent 1px)`, 
            backgroundSize: '30px 30px',
            opacity: 0.08
          }}
        ></div>

        {/* Decorative Watermark Text */}
        <div className="absolute -top-10 -left-10 text-[150px] md:text-[200px] font-black text-[#991B1B] opacity-[0.05] pointer-events-none select-none leading-none z-0">
          STORY
        </div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#991B1B]/10 to-transparent rounded-full blur-3xl z-0 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Intro Section */}
            <div className="mb-24 text-center max-w-4xl mx-auto">
              <div className="mb-12 border-b border-gray-200 pb-6">
                <span className="text-brand-red font-bold tracking-widest text-sm block mb-2">STORY</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">ストーリー</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
                マンパワーに頼る「属人化の壁」を、<br/>
                AIとマーケティングで突破する
              </h3>
                <p className="text-gray-600 leading-loose text-lg text-justify md:text-center">
                AI×マーケティングで、コストを最小化し、売上を最大化する「強い経営の仕組み」構築を支援します。<br className="hidden md:inline"/>その背景にある、私の原点とこれまでの歩みをお伝えします。
              </p>
            </div>

            {/* Story Sections - Zigzag Layout */}
            <div className="space-y-24 md:space-y-32">
              
              {/* Section 1: Right Image */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="md:w-1/2 order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-brand-red pl-4">
                    医学部A判定を捨て、<br/>あえて選んだ「ビジネス修行」
                  </h3>
                  <div className="text-gray-600 leading-loose space-y-4">
                    <p>
                      私のキャリアは、少し変わったスタートでした。幼い頃に父を亡くし、医師を目指して勉学に励んだ私は、医学部医学科でA判定を取得するまでになります。しかし大学受験の失敗と震災を経て、「与えられたレールではなく、自分の意思で人生を動かしたい」という想いが強くなりました。
                    </p>
                    <p>
                      19歳で私は予備校を辞め、起業の道へ。しかし、ビジネスの厳しさを知らなかった私は、師事した経営者のもとで一度立ち止まり、会社員としてビジネスの基礎を一から叩き込む決断をしました。そこからの4年間は、まさに修行の日々でした。Webマーケティング支援の現場で、深夜まで泥臭く働き、実務を積み上げました。
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
                  <div className="bg-white p-3 shadow-lg transform rotate-2 max-w-sm">
                    <Image 
                      src="/story/story1.jpg" 
                      alt="医学部A判定からビジネス修行の道へ" 
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Left Image */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="md:w-1/2 order-1 flex justify-center">
                  <div className="bg-white p-3 shadow-lg transform -rotate-2 max-w-sm">
                    <Image 
                      src="/story/story2.jpg" 
                      alt="事業の成功と蓄積される歪み" 
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-brand-red pl-4">
                    事業の発展と、<br/>成功の裏側に潜む「リスク」
                  </h3>
                  <div className="text-gray-600 leading-loose space-y-4">
                    <p>
                      その後、SNSマーケティングのスタートアップ企業やYahoo! JAPANでの経験を経て、23歳で再び独立。独立後の歩みは、決して平坦ではありませんでしたが、それまでの努力が実を結びます｡売上は伸び、経済的な余裕も生まれ、一見すると成功への階段を上っているように見えました。
                    </p>
                    <p>
                      しかし、その「成功」は非常に危ういバランスの上にありました。当時のスタイルは、典型的な「マンパワー依存」。自分が動かなければ売上が止まる。案件が増え、規模も大きくなるほど、私の時間は現場対応に奪われていく。「このまま走り続けることはできるのだろうか？」という、拭えない違和感が蓄積されていきました。
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2.5: Right Image (Depression & Realization) */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="md:w-1/2 order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-brand-red pl-4">
                    「うつ病」による強制終了。<br/>静寂の中で気づいた、仕組みなき経営の脆さ。
                  </h3>
                  <div className="text-gray-600 leading-loose space-y-4">
                    <p>
                      2022年9月。ついにその歪みが限界に達しました。私自身の「うつ病」という診断。とても仕事ができる状態ではなく､半年間の療養を余儀なくされました｡
                    </p>
                    <p>
                      強制的に立ち止まったことで、私は痛感しました。社長や特定の個人の頑張りに依存する経営モデルがいかに脆いか。「売れる仕組み」があり、かつ「心のゆとり」がなければ、健全な会社経営は続かない。その事実を、思い知らされました。
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
                  <div className="bg-white p-3 shadow-lg transform rotate-1 max-w-sm">
                    {/* Placeholder for new image */}
                    <Image 
                      src="/story/story3.jpg" 
                      alt="強制終了と静寂の中での気づき" 
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Left Image (AI Impact) - Swapped Layout */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="md:w-1/2 order-1 flex justify-center">
                  <div className="bg-white p-3 shadow-lg transform -rotate-3 max-w-sm">
                    <Image 
                      src="/story/story4.jpg" 
                      alt="AIの衝撃と新たな希望" 
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-brand-red pl-4">
                    AIへの戦慄。<br/>それは「マンパワーの限界」を突破する鍵。
                  </h3>
                  <div className="text-gray-600 leading-loose space-y-4">
                    <p>
                      2022年春に復帰し、活動を続ける中、2024年4月に大きな衝撃が走りました。進化を続けるAIツールに触れた際、その圧倒的な処理能力と文章品質に、私は戦慄しました。すでに多くの人間や、専門的なライターよりも、洗練された文章を、瞬時に生成している。
                    </p>
                    <p>
                      専門スキルすら代替される衝撃。しかし同時に、これはかつて私が直面した「属人化と根性の限界」を突破する鍵になると直感しました。AIを使いこなせば、人間は「作業」から解放され、より本質的な「経営」や「判断」に集中できる。AIは脅威ではなく、経営を次のステージへ押し上げる最強のパートナーになると確信したのです。
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4: Right Image (Market Challenges) - Swapped Layout */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="md:w-1/2 order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-brand-red pl-4">
                    AIという、未開拓市場での挑戦
                  </h3>
                  <div className="text-gray-600 leading-loose space-y-4">
                    <p>
                      AIに戦慄した私は､AIを主軸とした事業へ舵を切りました。ただ、現実は想像以上にタフなものでした。「まだAIなんて早い」「何ができるのかイメージがわかない」。新しい領域であるがゆえに実績を問われ、商談はできても受注には至らない。
                    </p>
                    <p>
                      正直、最初は相当きつかったです。どれだけ試行錯誤を重ねても、なかなか成果に結びつかない日々。
                    </p>
                    <p>
                      それでも私は諦めませんでした。なぜなら、この活動は必ず「経営を抜本的に変える」と確信していたからです。AIを「パートナー」として使いこなす。それこそが、変化に強く、安定した経営を目指す企業の未来を切り拓く、確かな道だと信じて、愚直に仕事を継続してきました。
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
                  <div className="bg-white p-3 shadow-lg transform rotate-1 max-w-sm">
                    <Image 
                      src="/story/story5.jpg" 
                      alt="未開拓市場での挑戦と信念" 
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Section 5: Full Width / Centered (Solution & Vision) */}
              <div className="bg-gray-50 p-8 md:p-16 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full -ml-32 -mb-32"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
                    「属人的な経営」から、<br/>「仕組み」で持続可能な経営へ
                  </h3>
                  
                  {/* Image & Intro Text - 2 Column Layout */}
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 max-w-4xl mx-auto">
                    <div className="md:w-5/12 flex justify-center md:justify-end">
                      <div className="max-w-xs w-full shadow-xl rounded-lg overflow-hidden bg-white p-2">
                        <Image 
                          src="/story/story6.jpg" 
                          alt="AIとマーケティングによる仕組み化" 
                          width={400}
                          height={300}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    <div className="md:w-7/12">
                      <p className="text-gray-600 leading-loose">
                        これまで、私は数名の組織から数百名規模の企業まで、多くの企業・経営者さまに伴走してきました。「AI×マーケティング」という新しい武器と、10年以上磨き続けてきたマーケティングの知見を掛け合わせ、課題を「売れる仕組み」で解決したいと考えています。
                      </p>
                    </div>
                  </div>

                  <div className="text-gray-600 leading-loose space-y-6 max-w-4xl mx-auto">
                  
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-10">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 text-center border-b border-gray-100 pb-4 inline-block md:block">
                    私が伴走して<br className="md:hidden"/>実現したい未来
                  </h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-bold text-brand-red mb-2 text-center">【脱・属人化の実現】</h5>
                        <p className="text-sm">特定の誰かの頑張りに依存せず、仕組みとAIがビジネスを支える強固な体制を構築します。</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-red mb-2 text-center">【本来の価値への集中】</h5>
                        <p className="text-sm">スタッフ一人ひとりが本来向き合うべき「創造的な価値提供」に情熱を注げる環境を整えます。</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-red mb-2 text-center">【持続可能な経営】</h5>
                        <p className="text-sm">一時の無理な成果ではなく、長期的に安定して利益を生み出し続ける組織へ。</p>
                      </div>
                    </div>
                  </div>

                  <p>
                    私にできることは、戦略立案からWeb広告・SEO・SNS・LP制作まで一気通貫で支援してきた「10年以上の泥臭い実戦知見」と、試行錯誤の末に磨き上げた「実践的なAI活用」を、皆さまの事業に最適に組み込めるよう、支援することです。
                  </p>
                  <p>
                    素晴らしい価値を持つ企業の経営者さま・スタッフさま共に「仕組みで売れる状態に至り、心にゆとりを持って働ける」。そんな持続可能な経営を実現できるよう、誠実にサポートできればと思っています｡
                  </p>
                  
                  <div className="text-left md:text-right mt-12">
                    <p className="font-bold text-gray-900 mb-1 text-left md:text-right">
                      ジェネラルコンサルティング<br className="md:hidden"/>グループ株式会社
                    </p>
                    <p className="font-bold text-gray-900 text-left md:text-right">代表取締役 槙 優真</p>
                  </div>
                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
      </section>

      {/* Profile Section - Gray Background */}
      <section id="profile" className="w-full bg-gray-50 py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 border-b border-gray-200 pb-4">
              <span className="text-brand-red font-bold tracking-widest text-sm block mb-2">PROFILE</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">プロフィール</h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:justify-start gap-8 md:gap-12 mb-12">
              <div className="w-[160px] md:w-[220px] flex-shrink-0 shadow-lg rounded-xl overflow-hidden">
                <Image 
                  src="/representative.jpg" 
                  alt="槙 優真" 
                  width={220}
                  height={220}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="space-y-4 text-center md:text-left">
                <div>
                  <p className="text-gray-600 font-medium mb-1">ジェネラルコンサルティンググループ株式会社</p>
                  <p className="text-gray-900 font-medium text-lg">代表取締役</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  槙 優真 <span className="text-xl md:text-2xl text-gray-500 font-normal">（Yuma Maki）</span>
                </h2>
              </div>
            </div>
            
            {/* Summary Section */}
            <div className="mb-12 text-gray-700 leading-relaxed font-medium">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-brand-red pl-3 flex items-center bg-gray-50 py-2 rounded-r-md">
                略歴
              </h3>
              <div className="pl-2">
                <p className="mb-4">
                  ベンチャー・スタートアップから大手企業まで会社員を4年経験｡<br/>
                  2016年に独立して以降､新規事業立ち上げ・既存事業の売上改善を多数経験｡<br/>
                  2024年､AIの影響力を目の当たりにしたことで､AI×マーケティングの領域に注力｡
                </p>
                <p>
                  1992年､山形県出身｡<br/>
                  個人・社会の本質的な”幸せ”に強い関心があり､慶應義塾大学（哲学）に在籍｡
                </p>
              </div>
            </div>

            {/* Detailed Info Grid */}
            <div className="grid md:grid-cols-2 gap-10">
              
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-brand-red pl-3 flex items-center bg-gray-50 py-2 rounded-r-md">
                    主な支援実績
                  </h3>
                  <ul className="list-none ml-2 text-sm text-gray-700 space-y-3 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span>
                      <span>マーケティング担当幹部として法律事務所を創業｡年商3.9億円に</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span>
                      <span>東証プライム上場企業の社長室にて､全社Web広告戦略の統括をコンサル支援</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span>
                      <span>ココナラ（東証グロース上場）ほか､複数社のAI活用を支援</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span>
                      <span>約400名の経営者が在籍する「新経営戦略塾」にてAI講師を担当</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-brand-red pl-3 flex items-center bg-gray-50 py-2 rounded-r-md">
                  主なキャリア
                </h3>
                <div className="space-y-4 text-sm text-gray-700">
                  <div className="border-b border-gray-100 pb-2">
                    <p className="font-bold text-gray-900 mb-1">1. ベンチャー企業（社員数名）</p>
                    <p className="pl-4 text-gray-600">リスティング広告運用､LP・Webサイト制作</p>
                  </div>
                  <div className="border-b border-gray-100 pb-2">
                    <p className="font-bold text-gray-900 mb-1">2. スタートアップ（社員数十名）</p>
                    <p className="pl-4 text-gray-600">SNSマーケティング､インサイドセールス</p>
                  </div>
                  <div className="border-b border-gray-100 pb-2">
                    <p className="font-bold text-gray-900 mb-1">3. Yahoo! JAPAN（社員数千名）</p>
                    <p className="pl-4 text-gray-600">広告事業部門における戦略企画</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">4. フリーランス〜当社代表</p>
                    <p className="pl-4 text-gray-600">マーケティング戦略＆戦術､AI活用全般､新規事業立ち上げ､SEOメディア運営 etc.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          </div>
      </section>

      {/* Partner Section - White Background */}
      <section id="partner" className="w-full bg-white py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
             <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
              <div className="text-center mb-10 border-b border-gray-200 pb-6">
                <span className="text-brand-red font-bold tracking-widest text-sm block mb-2">PARTNER</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">パートナー紹介</h2>
              </div>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                各領域で最高品質の支援を実現するため、多様な専門性を持つパートナーと連携しています。<br className="hidden md:block"/>
                ご相談内容の特性に合わせて、最適な布陣で貴社をサポートいたします。
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Partner 1 */}
                <div className="bg-white p-6 rounded-lg border border-gray-100 flex flex-col md:flex-row gap-6 group hover:border-brand-red/30 transition-colors duration-300 items-center md:items-start">
                  <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                    <div className="w-32 h-32 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-lg overflow-hidden relative shadow-sm border-4 border-gray-50">
                      <Image 
                        src="/partner-ryoichi.jpg" 
                        alt="Ryoichi.E" 
                        fill
                        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105" 
                        style={{ transform: 'scale(0.95)' }} 
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 w-full">
                    <div className="flex items-center gap-3 mb-3 border-b border-gray-200 pb-2 group-hover:border-brand-red/30 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">Ryoichi.E</h3>
                      <span className="ml-auto text-sm font-bold text-brand-red whitespace-nowrap shrink-0 leading-none">パートナー</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-bold text-brand-red mb-1 pl-2 border-l-2 border-brand-red">経歴</p>
                        <p className="text-sm text-gray-700">キヤノン本社にて本部長（インサイドセールス、デジタルマーケティング部門）を歴任。</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-red mb-1 pl-2 border-l-2 border-brand-red">得意領域</p>
                        <p className="text-sm text-gray-700">メーカー、BtoB、中堅・大企業、営業戦略、インサイドセールス、デジタルマーケティング、生成AI全般</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partner 2 */}
                <div className="bg-white p-6 rounded-lg border border-gray-100 flex flex-col md:flex-row gap-6 group hover:border-brand-red/30 transition-colors duration-300 items-center md:items-start">
                  <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                    <div className="w-32 h-32 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-lg overflow-hidden relative shadow-sm border-4 border-gray-50">
                      <Image 
                        src="/partner-masahiro.jpg" 
                        alt="Masahiro.N" 
                        fill
                        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105" 
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 w-full">
                    <div className="flex items-center gap-3 mb-3 border-b border-gray-200 pb-2 group-hover:border-brand-red/30 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">Masahiro.N</h3>
                      <span className="ml-auto text-sm font-bold text-brand-red whitespace-nowrap shrink-0 leading-none">パートナー</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-bold text-brand-red mb-1 pl-2 border-l-2 border-brand-red">経歴</p>
                        <p className="text-sm text-gray-700">システムエンジニア歴30年。大手建設業、大手小売業のシステム構築を多数経験。</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-red mb-1 pl-2 border-l-2 border-brand-red">得意領域</p>
                        <p className="text-sm text-gray-700">建設・小売業、セキュリティ、ネットワーク環境設計、各種プログラミング、生成AI全般</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partner 3 */}
                <div className="bg-white p-6 rounded-lg border border-gray-100 flex flex-col md:flex-row gap-6 group hover:border-brand-red/30 transition-colors duration-300 items-center md:items-start">
                  <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                    <div className="w-32 h-32 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-lg overflow-hidden relative shadow-sm border-4 border-gray-50">
                      <Image 
                        src="/partner-miki.jpg" 
                        alt="Miki.S" 
                        fill
                        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105" 
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 w-full">
                    <div className="flex items-center gap-3 mb-3 border-b border-gray-200 pb-2 group-hover:border-brand-red/30 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">Miki.S</h3>
                      <span className="ml-auto text-sm font-bold text-brand-red whitespace-nowrap shrink-0 leading-none">パートナー</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-bold text-brand-red mb-1 pl-2 border-l-2 border-brand-red">経歴</p>
                        <p className="text-sm text-gray-700">マッキンゼー・アンド・カンパニー、P&G出身。</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-red mb-1 pl-2 border-l-2 border-brand-red">得意領域</p>
                        <p className="text-sm text-gray-700">日用品・消費財、BtoC、経営戦略、マーケティング戦略、新規事業・商品開発</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partner 4 */}
                <div className="bg-white p-6 rounded-lg border border-gray-100 flex flex-col md:flex-row gap-6 group hover:border-brand-red/30 transition-colors duration-300 items-center md:items-start">
                  <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                    <div className="w-32 h-32 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-lg overflow-hidden relative shadow-sm border-4 border-gray-50">
                      <Image 
                        src="/partner-seiichi.jpg" 
                        alt="Seiichi.S" 
                        fill
                        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105" 
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 w-full">
                    <div className="flex items-center gap-3 mb-3 border-b border-gray-200 pb-2 group-hover:border-brand-red/30 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">Seiichi.S</h3>
                      <span className="ml-auto text-sm font-bold text-brand-red whitespace-nowrap shrink-0 leading-none">パートナー</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-bold text-brand-red mb-1 pl-2 border-l-2 border-brand-red">経歴</p>
                        <p className="text-sm text-gray-700">公務員、法人営業、Webマーケティングを経験。</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-red mb-1 pl-2 border-l-2 border-brand-red">得意領域</p>
                        <p className="text-sm text-gray-700">転職業界、SEO、AIO（生成AI最適化）、YouTube・X運用、ライティング、生成AI全般</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 text-right">
                ※その他、ご相談内容に応じて、特定の専門スキルを持つパートナーと柔軟に連携しております。
              </p>
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
