import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Profile() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Simple Hero Section */}
      <div className="w-full bg-white pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <p className="text-brand-red font-bold tracking-[0.2em] mb-8 text-sm md:text-base">CEO PROFILE & STORY</p>
          
          <div className="mb-8 w-[200px] md:w-[280px] shadow-lg rounded-xl overflow-hidden">
            <img 
              src="/representative.jpg" 
              alt="槙 優真" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-600 font-medium">ジェネラルコンサルティンググループ株式会社</p>
            <p className="text-gray-900 font-medium">代表取締役</p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">槙 優真（Yuma Maki）</h1>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <Link href="#profile" className="group border border-brand-red p-4 flex justify-between items-center bg-white hover:bg-brand-red/5 transition-colors">
              <span className="text-gray-900 font-medium">プロフィール</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-gray-400 group-hover:text-brand-red transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
            <Link href="#story" className="group border border-brand-red p-4 flex justify-between items-center bg-white hover:bg-brand-red/5 transition-colors">
              <span className="text-gray-900 font-medium">ストーリー</span>
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

      {/* Main Content */}
      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">

          {/* New Profile Section (Updated) */}
          <div id="profile" className="scroll-mt-24 max-w-4xl mx-auto mb-32 bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            
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
          
          {/* Intro Section */}
          <div id="story" className="scroll-mt-24 max-w-4xl mx-auto mb-24 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              マンパワーに頼る「属人化の壁」を、<br/>
              AIとマーケティングで突破する
            </h2>
            <p className="text-gray-600 leading-loose text-lg text-justify md:text-center">
              AI×マーケティングという新しい武器と、10年間磨き続けてきたマーケティングの本質を掛け合わせ、企業の「売れる仕組み」構築を支援します。その背景にある、私の原点とこれまでの歩みをお伝えします。
            </p>
          </div>

          {/* Story Sections - Zigzag Layout */}
          <div className="space-y-24 md:space-y-32 max-w-6xl mx-auto">
            
            {/* Section 1: Right Image */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="md:w-1/2 order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-brand-red pl-4">
                  医学部A判定を捨て、<br/>あえて選んだ「ビジネス修行」
                </h3>
                <div className="text-gray-600 leading-loose space-y-4">
                  <p>
                    私のキャリアは、少し変わったスタートでした。幼い頃に父を亡くし、医師を目指して勉学に励んだ私は、医学部医学科でA判定を取得するまでになります。しかし震災と本番での挫折を経て、「与えられたレールではなく、自分の意思で人生を動かしたい」という想いが強くなりました。
                  </p>
                  <p>
                    19歳で私は予備校を辞め、起業の道へ。しかし、商売の厳しさを知らなかった私は、師事した経営者のもとで一度立ち止まり、会社員としてビジネスの基礎を一から叩き込む決断をしました。そこからの4年間は、まさに修行の日々でした。Webマーケティング支援の現場で、深夜まで泥臭く働き、実務を積み上げました。
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
                <div className="bg-white p-3 shadow-lg transform rotate-2 max-w-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" 
                    alt="ビジネス修行時代" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Left Image */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="md:w-1/2 order-1 flex justify-center">
                <div className="bg-white p-3 shadow-lg transform -rotate-2 max-w-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop" 
                    alt="独立と挫折" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2 order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-brand-red pl-4">
                  事業の発展と､「うつ病」という限界
                </h3>
                <div className="text-gray-600 leading-loose space-y-4">
                  <p>
                    その後、SNSマーケティングのスタートアップやYahoo! JAPANでの経験を経て、23歳で再び独立。独立後の歩みは、決して平坦ではありませんでしたが、それまでの努力が実を結びます｡売上は伸び、経済的な余裕も生まれ、一見すると成功への階段を上っているように見えました。
                  </p>
                  <p>
                    しかし、その「成功」の裏側では、ある歪みが蓄積されていました。当時の私のスタイルは、典型的な「マンパワーと努力に依存した経営」でした。仕事が好調になればなるほど、現場の負担は増大し、私が止まれば全てが止まるという危ういバランスの上に立っていました。
                  </p>
                  <p>
                    2022年9月。ついにその歪みが限界に達しました。私自身の「うつ病」という診断。とても仕事ができる状態ではなく､半年間の療養を余儀なくされました｡
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Right Image */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="md:w-1/2 order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-brand-red pl-4">
                  AIの衝撃､そして希望
                </h3>
                <div className="text-gray-600 leading-loose space-y-4">
                  <p>
                    静まり返った部屋で私が痛感したのは、社長やキーマンがいないと立ち行かない経営モデルの脆さでした。「売れる仕組み」に昇華できなければ、経営者も、そこで働くメンバーも、いつか必ず疲弊してしまう。その事実に、私は打ちのめされました。
                  </p>
                  <p>
                    2022年春に復帰し、活動を続ける中、2024年4月に大きな衝撃が走りました。進化を続けるAIツールに触れた際、それが書き出した文章の質の高さに言葉を失ったのです。すでに多くの人間や、専門的なライターよりも、洗練された文章を、瞬時に生成している。
                  </p>
                  <p>
                    Webマーケティングに不可欠な専門スキルですら、一瞬で代替されようとしている。その光景に、私は正直、戦慄を覚えました。しかし同時に、これはかつて私が直面した「マンパワーと根性の限界」を突破するための、唯一無二の鍵になると直感しました。
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
                <div className="bg-white p-3 shadow-lg transform rotate-1 max-w-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" 
                    alt="AIとの出会い" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Left Image (Market Challenges) */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="md:w-1/2 order-1 flex justify-center">
                <div className="bg-white p-3 shadow-lg transform -rotate-1 max-w-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop" 
                    alt="未開拓市場での挑戦" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2 order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-brand-red pl-4">
                  未開拓市場での苦労
                </h3>
                <div className="text-gray-600 leading-loose space-y-4">
                  <p>
                    AIに戦慄した私は､AIを主軸とした事業へ舵を切りました。ただ、現実は想像以上にタフなものでした。「まだAIなんて早い」「何ができるのかイメージがわかない」。新しい領域であるがゆえに実績を問われ、商談はできても受注には至らない。未開拓の市場で､ゼロから需要を創出するような苦労がありました｡
                  </p>
                  <p>
                    それでも私は諦めませんでした。なぜなら、この活動は必ず「経営を抜本的に変える」と確信していたからです。AIを「経営のパートナー」として使いこなす。それこそが、マンパワー頼みの属人化に悩む企業の未来を救う唯一の道だと信じて、愚直に仕事を継続してきました。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Full Width / Centered (Solution & Vision) */}
            <div className="bg-gray-50 p-8 md:p-16 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full -ml-32 -mb-32"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  集客を「人手と根性」から「仕組み」という資産へ
                </h3>
                
                {/* Visual Image for Section 5 */}
                <div className="max-w-2xl mx-auto mb-12 shadow-2xl rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
                    alt="Strategic Marketing and Systems" 
                    className="w-full h-64 object-cover"
                  />
                </div>

                <div className="text-gray-600 leading-loose space-y-6 max-w-3xl mx-auto">
                  <p>
                    現在、私は数名の組織から数百名規模の企業まで、多くの企業・経営者さまに伴走させていただいています。「AI×マーケティング」という新しい武器と、10年間磨き続けてきたマーケティングの本質を掛け合わせ、課題を「売れる仕組み」で解決したいと考えています。
                  </p>
                
                <div className="bg-white p-6 rounded-lg shadow-sm my-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center border-b border-gray-100 pb-4">私が伴走して実現したい未来</h4>
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
                      <h5 className="font-bold text-brand-red mb-2 text-center">【心にゆとりある働き方】</h5>
                      <p className="text-sm">効率化で生まれた時間は、次の成長への投資や、心身を整えるための余白へ。</p>
                    </div>
                  </div>
                </div>

                <p>
                  私にできることは、戦略立案からWeb広告・SEO・SNS・LP制作まで一気通貫で支援してきた「10年の泥臭い実戦知見」と、試行錯誤の末に磨き上げた「実践的なAI活用」を、皆さまの事業に最適に繋ぎ込むことです。
                </p>
                <p>
                  素晴らしい価値を持つ企業の経営者さま・スタッフさま共に「仕組みで売れる状態に至り、心にゆとりを持って働ける」。そんな自由で持続可能な経営を実現できるよう、誠実にサポートできればと思っています｡
                </p>
                
                <div className="text-right mt-12">
                  <p className="font-bold text-gray-900 mb-1">ジェネラルコンサルティンググループ株式会社</p>
                  <p className="font-bold text-gray-900">代表取締役　槙 優真</p>
                </div>
              </div>
            </div>
          </div>

          </div>

          {/* Partner Section */}
          <div id="partner" className="scroll-mt-24 max-w-6xl mx-auto mt-32">
             <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">パートナー紹介</h2>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                各領域で最高品質の支援を実現するため、多様な専門性を持つパートナーと連携しています。<br className="hidden md:block"/>
                ご相談内容の特性に合わせて、最適な布陣で貴社をサポートいたします。
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Partner 1 */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col md:flex-row gap-6 group hover:border-brand-red/30 transition-colors duration-300 items-center md:items-start">
                  <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                    <div className="w-32 h-32 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-lg overflow-hidden relative shadow-sm border-4 border-white">
                      <img 
                        src="/partner-ryoichi.jpg" 
                        alt="Ryoichi.E" 
                        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105" 
                        style={{ transform: 'scale(0.95)' }} 
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 w-full">
                    <div className="flex items-baseline justify-between mb-3 border-b border-gray-200 pb-2 group-hover:border-brand-red/30 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">Ryoichi.E</h3>
                      <span className="text-sm font-bold text-brand-red">パートナー</span>
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
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col md:flex-row gap-6 group hover:border-brand-red/30 transition-colors duration-300 items-center md:items-start">
                  <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                    <div className="w-32 h-32 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-lg overflow-hidden relative shadow-sm border-4 border-white">
                      <img 
                        src="/partner-masahiro.jpg" 
                        alt="Masahiro.N" 
                        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105" 
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 w-full">
                    <div className="flex items-baseline justify-between mb-3 border-b border-gray-200 pb-2 group-hover:border-brand-red/30 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">Masahiro.N</h3>
                      <span className="text-sm font-bold text-brand-red">パートナー</span>
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
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col md:flex-row gap-6 group hover:border-brand-red/30 transition-colors duration-300 items-center md:items-start">
                  <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                    <div className="w-32 h-32 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-lg overflow-hidden relative shadow-sm border-4 border-white">
                      <img 
                        src="/partner-miki.jpg" 
                        alt="Miki.S" 
                        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105" 
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 w-full">
                    <div className="flex items-baseline justify-between mb-3 border-b border-gray-200 pb-2 group-hover:border-brand-red/30 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">Miki.S</h3>
                      <span className="text-sm font-bold text-brand-red">パートナー</span>
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
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col md:flex-row gap-6 group hover:border-brand-red/30 transition-colors duration-300 items-center md:items-start">
                  <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                    <div className="w-32 h-32 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-lg overflow-hidden relative shadow-sm border-4 border-white">
                      <img 
                        src="/partner-seiichi.jpg" 
                        alt="Seiichi.S" 
                        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105" 
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 w-full">
                    <div className="flex items-baseline justify-between mb-3 border-b border-gray-200 pb-2 group-hover:border-brand-red/30 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">Seiichi.S</h3>
                      <span className="text-sm font-bold text-brand-red">パートナー</span>
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
          
          {/* CTA */}
          <div className="mt-24 text-center">
            <Link 
              href="/contact" 
              className="bg-brand-red hover:bg-red-700 text-white font-bold py-5 px-16 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl inline-block transform hover:-translate-y-1"
            >
              お問い合わせ・相談する
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
