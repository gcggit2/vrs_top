import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '新経営戦略塾さま｜支援事例｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例詳細ページです。新経営戦略塾さまの課題解決プロセスと成果をご紹介します。',
};

export default function SksProject() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-brand-red font-bold tracking-widest block mb-2 text-sm md:text-base">CASE STUDY</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-[#00509d] text-white border-[#00509d] mb-6">AI</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              新経営戦略塾さま
            </h1>
            
            {/* Eye-catch Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                    src="/projects/sks/sks.png" 
                    alt="新経営戦略塾さま" 
                    className="w-full h-auto"
                />
            </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-brand-red block"></span>
              クライアント概要
            </h2>
            <div className="leading-loose text-gray-700">
              <p className="mb-6">
                約400名の経営者が在籍する会員制勉強会「新経営戦略塾」を運営する企業です｡
                <br /><br />
                新規事業・多角化・Webマーケ・リスクマネジメント・M&A・税務財務など､さまざま内容を取り扱っています｡2025年から「AI活用」も新たなテーマに加わりました｡
              </p>
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-900">URL :</span>
                <a 
                  href="https://m-aim.jp/sks" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-red hover:underline font-medium"
                >
                  https://m-aim.jp/sks
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Details */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-brand-red block"></span>
              支援内容
            </h2>
            
            <div className="space-y-8 leading-loose text-gray-700">
              <p>
                約400名の経営者が在籍されている「新経営戦略塾」にて、毎月1回、経営者向けのAI講義を担当させていただいています。
              </p>
              <p>
                企業経営においてAI活用が不可欠であると認識されているものの、現在の講師陣は実務的なAI活用の専門家ではありませんでした｡そのため､AI講師を担当しております｡
              </p>
              
              <div className="my-8 text-lg leading-relaxed">
                <span className="font-bold underline decoration-brand-red decoration-2 underline-offset-1">
                  本講義の最大の特徴は、単なる「AI最新情報」や「AI活用方法」の紹介にとどまらず、「中小企業の経営者および経営者・スタッフが、会社の業績を高めるためのAI活用法」という、地に足がついた実務的なAIスキルに特化している点です。
                </span>
              </div>
              
              <p>
                現在、巷にはYouTubeやさまざまなコミュニティでAI情報が溢れていますが、実際には実務レベルでは使えない「新機能」が大々的に紹介されたり、趣味半分のAI活用テクニックが有料講座やコミュニティでも扱われたりと、経営層が実務活用のために情報収集する際のノイズが非常に大きいという構造的な問題があります。
              </p>
              <p>
                こうした状況を踏まえ、AI講義の際は「実務で本当に役立つ」ことだけに焦点を絞り、経営者・ビジネスマンの皆様が翌日からすぐに業務で使えるAI活用スキルを、具体的な事例やデモンストレーションを交えながらお伝えしています。
              </p>
              <p>
                毎月継続的に講義を行うことで、AIを実務活用してコストダウン・利益UPに繋げる手法を着実に習得いただき、各社の生産性向上や業績アップに貢献してまいります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-brand-red block"></span>
              参考スクリーンショット
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {[1, 2].map((num) => (
                <div key={num} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img 
                    src={`/projects/sks/sks${num}.png`}
                    alt={`支援実績イメージ ${num}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

