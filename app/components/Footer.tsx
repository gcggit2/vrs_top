import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Changed grid layout to give more space to the first column (Company Info) */}
        <div className="grid md:grid-cols-5 gap-8 mb-16 items-start">
          {/* Column 1: Company Info - Takes 2 columns width */}
          <div className="md:col-span-2">
            {/* Logo replaces text header */}
            <div className="mb-8"> 
              {/* Increased margin for better spacing */}
              <Link href="/">
                <img 
                  src="/logo.png" 
                  alt="GENERAL CONSULTING GROUP Inc." 
                  className="w-32 md:w-40 h-auto object-contain" 
                />
              </Link>
            </div>
            
            <h3 className="text-sm font-bold mb-2 text-gray-900 whitespace-nowrap">ジェネラルコンサルティンググループ株式会社</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              「成果」と「時間」を創り出し、<br/>
              心にゆとりある、持続可能な社会へ。
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-6 text-brand-red">サービス一覧</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/consulting" className="hover:text-brand-red transition-colors">AIマーケ顧問</Link></li>
              <li><Link href="/ai-marke-training" className="hover:text-brand-red transition-colors">AIマーケ研修</Link></li>
              <li><Link href="/ai-training" className="hover:text-brand-red transition-colors">AI基礎研修</Link></li>
              <li><Link href="/ai-development" className="hover:text-brand-red transition-colors">AIツールの受託開発</Link></li>
            </ul>
          </div>

          {/* Column 3: Contents */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-6 text-brand-red">コンテンツ</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/profile" className="hover:text-brand-red transition-colors">代表プロフィール</Link></li>
              <li><Link href="/projects" className="hover:text-brand-red transition-colors">支援事例</Link></li>
              <li><Link href="/reviews/1" className="hover:text-brand-red transition-colors">お客様の声</Link></li>
              <li><a href="https://note.com/gcg_maki" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">コラム記事</a></li>
              <li><Link href="/company" className="hover:text-brand-red transition-colors">会社紹介</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="md:col-span-1">
            <div className="space-y-4 pt-1">
              <Link 
                href="/contact" 
                className="block bg-brand-red hover:bg-red-700 text-white text-center py-3 rounded font-bold transition-colors shadow-sm"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          {/* Footer Bottom Links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/company-profile" className="hover:text-brand-red transition-colors">会社概要</Link>
            <Link href="/privacy" className="hover:text-brand-red transition-colors">プライバシーポリシー</Link>
            <Link href="/law" className="hover:text-brand-red transition-colors">特定商取引法に基づく表示</Link>
          </div>
          <p>© GENERAL CONSULTING GROUP Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
