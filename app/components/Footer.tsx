import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Responsive Grid Layout: Mobile 1col, Tablet 2cols, Desktop 5cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 items-start">
          {/* Column 1: Company Info - Tablet: Full width, Desktop: 2/5 */}
          <div className="md:col-span-2">
            {/* Logo replaces text header */}
            <div className="mb-8"> 
              {/* Increased margin for better spacing */}
              <Link href="/">
                <Image 
                  src="/logo.png" 
                  alt="VERSENCE Inc." 
                  width={160}
                  height={60}
                  className="w-32 md:w-40 h-auto object-contain" 
                />
              </Link>
            </div>
            
            <h3 className="text-sm font-bold mb-2 text-gray-900 whitespace-nowrap">ヴェルセンス株式会社</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              物理的・精神的ウェルビーイングを<br/>
              社会に実装する
            </p>
          </div>

          {/* Column 2 & 3 & 4 Removed */}
          
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          {/* Footer Bottom Links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/company-profile" className="hover:text-brand-blue transition-colors">会社概要</Link>
            <Link href="/privacy" className="hover:text-brand-blue transition-colors">プライバシーポリシー</Link>
            <Link href="/law" className="hover:text-brand-blue transition-colors">特定商取引法に基づく表示</Link>
          </div>
          <p>© VERSENCE Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
